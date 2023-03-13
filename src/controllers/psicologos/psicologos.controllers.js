import jwt from "jsonwebtoken";
import { ERROR_INVALID_CREDENCIALS } from "../../errors/errors";
import {
  createPsicologoRepository,
  findPsicologoByEmail,
} from "../../repositories/psicologos/psicologos.repository";

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
