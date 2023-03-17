import {
  findAllAtendimentosRepository,
  findAtendimentoByIdRepository,
} from "../../repositories/atendimentos/atendimentos.repository.js";

export const insertAtendimento = async (req, res) => {
  const { paciente_id, data_atendimento, observaao } = req.body;
  const { psicologo_id } = req.psicologo;

  const atendimento = await createPacienteRepository(nome, email, idade);

  return res.status(201).json({ atendimento });
};

export const findAllAtendimentos = async (req, res) => {
  const atendimentos = await findAllAtendimentosRepository();

  return res.status(200).json({ atendimentos });
};

export const findOneAtendimentoById = async (req, res) => {
  const { id } = req.params;

  const atendimento = await findAtendimentoByIdRepository(id);

  return res.status(200).json({ atendimento });
};
