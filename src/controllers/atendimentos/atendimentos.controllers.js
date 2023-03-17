import {
  findAllAtendimentosRepository,
  findAtendimentoByIdRepository,
} from "../../repositories/atendimentos/atendimentos.repository.js";

export const insertAtendimento = async (req, res) => {};

export const findAllAtendimentos = async (req, res) => {
  const atendimentos = await findAllAtendimentosRepository();

  return res.status(200).json({ atendimentos });
};

export const findOneAtendimentoById = async (req, res) => {
  const { id } = req.params;

  const atendimento = await findAtendimentoByIdRepository(id);

  return res.status(200).json({ atendimento });
};
