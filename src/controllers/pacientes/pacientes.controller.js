import { Paciente } from "../../database/models/paciente.model.js";
import {
  createPacienteRepository,
  deletePacienteRepository,
  findAllPacientesRepository,
  findPacienteById,
  updatePacienterepository,
} from "../../repositories/pacientes/pacientes.repository.js";

export const insertPacientes = async (req, res) => {
  const { nome, email, idade } = req.body;

  const paciente = await createPacienteRepository(nome, email, idade);

  return res.status(201).json({ paciente });
};

export const findAllPacientes = async (req, res) => {
  const pacientes = await findAllPacientesRepository();

  return res.status(200).json({ pacientes });
};

export const findOnePacienteById = async (req, res) => {
  const { id } = req.params;

  const paciente = await findPacienteById(id);

  if (!paciente) {
    return res.status(404).json({ message: "Id não encontrado" });
  }

  return res.status(200).json({ paciente });
};

export const updatePacienteById = async (req, res) => {
  const { id } = req.params;
  const { nome, email, idade } = req.body;

  const paciente = await updatePacienterepository(id, nome, email, idade);

  return res.status(200).json(paciente);
};

export const deletePacienteById = async (req, res) => {
  const { id } = req.params;

  await deletePacienteRepository(id);

  if (!paciente) {
    return res.status(404).json({ message: "Id não encontrado" });
  }

  return res.status(204).send();
};
