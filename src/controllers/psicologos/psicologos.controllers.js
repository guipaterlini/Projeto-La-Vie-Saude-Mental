import jwt from "jsonwebtoken";
import { ERROR_INVALID_CREDENCIALS } from "../../errors/errors.js";
import {
  createPsicologoRepository,
  deletePsicologoRepository,
  findAllPsicologosRepository,
  findPsicologoByEmail,
  findPsicologoById,
  updatePsicologoRepository,
} from "../../repositories/psicologos/psicologos.repository.js";

export const login = async (req, res) => {
  const { email, senha } = req.body;

  const psicologo = await findPsicologoByEmail(email);

  if (senha === psicologo.senha) {
    const secret = "secret";

    const token = jwt.sign({ id, email, nome }, secret, { expiresIn: "1h" });

    return res.status(200).json({ token });
  }

  res.status(401).json({ message: ERROR_INVALID_CREDENCIALS });
};

export const insertPsicologo = async (req, res) => {
  const { nome, email, senha, apresentacao } = req.body;

  const psicologo = await createPsicologoRepository(
    nome,
    email,
    senha,
    apresentacao
  );
  return res.status(201).json({ psicologo });
};

export const findAllPsicologos = async (req, res) => {
  const psicologos = await findAllPsicologosRepository();

  return res.status(200).json({ psicologos });
};

export const findOnePsicologoById = async (req, res) => {
  const { id } = req.params;

  const psicologo = await findPsicologoById(id);

  return res.status(200).json({ psicologo });
};

export const updatePsicologoById = async (req, res) => {
  const { id } = req.params;
  const { nome, email, senha, apresentacao } = req.body;

  const psicologo = await findPsicologoByEmail(email);

  if (psicologo !== null) {
    if (id !== psicologo.id) {
      return res.status(409).json({ err: ERROR_DUPLICATE_EMAIL(email) });
    }
  } else {
    const psicologoAtualizado = await updatePsicologoRepository(
      id,
      nome,
      email,
      senha,
      apresentacao
    );

    return res.status(200).json(psicologoAtualizado);
  }
};

export const deletePsicologoById = async (req, res) => {
  const { id } = req.params;

  await deletePsicologoRepository(id), res.status(204).send();
};
