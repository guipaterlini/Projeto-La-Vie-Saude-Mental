import { randomUUID } from "node:crypto";
import { Paciente } from "../../database/models/paciente.model.js";

export const insertPacientes = async (req, res) => {
  const { nome, email, idade } = req.body;

  const paciente = {
    id: randomUUID(),
    nome,
    email,
    idade,
  };

  await Paciente.create({ id: randomUUID(), nome, email, idade });

  return res.status(201).json({ paciente });
};

export const findAllPacientes = async (req, res) => {
  const pacientes = await Paciente.findAll();

  return res.status(200).json({ pacientes });
};

export const findOnePacienteById = async (req, res) => {
  var pacientes = global.pacientes;

  const { id } = req.params;

  const paciente = pacientes.find((paciente) => paciente.id === id);

  if (!paciente) {
    return res.status(404).json({ message: "Id não encontrado" });
  }

  return res.status(200).json({ paciente });
};

export const updatePacienteById = (req, res) => {
  var pacientes = global.pacientes;

  const { id } = req.params;
  const { nome, email, idade } = req.body;

  const paciente = pacientes.find((paciente) => paciente.id === id);

  paciente.nome = nome;
  paciente.email = email;
  paciente.idade = idade;

  return res.status(200).json({ paciente });
};

export const deletePacienteById = (req, res) => {
  var pacientes = global.pacientes;

  const { id } = req.params;

  const paciente = pacientes.find((paciente) => paciente.id === id);

  const indexOfPaciente = pacientes.findIndex((paciente) => paciente.id === id);
  pacientes.splice(indexOfPaciente, 1);

  if (!paciente) {
    return res.status(404).json({ message: "Id não encontrado" });
  }

  return res.status(204).send();
};
