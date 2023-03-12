import { randomUUID } from "node:crypto";
import { Paciente } from "../../database/models/paciente.model.js";

export const findPacienteById = async (id) => {
  const paciente = await Paciente.findOne({ where: { id } });

  return paciente;
};

export const createPacienteRepository = async (nome, email, idade) => {
  return await Paciente.create({ id: randomUUID(), nome, email, idade });
};

export const updatePacienterepository = async (id, nome, email, idade) => {
  await Paciente.update({ nome, email, idade }, { where: { id } });

  return await Paciente.findOne({ where: { id } });
};

export const deletePacienteRepository = async (id) => {
 return await Paciente.destroy({ where: { id } });
};

export const findAllPacientesRepository = async () => {
  return await Paciente.findAll();
};
