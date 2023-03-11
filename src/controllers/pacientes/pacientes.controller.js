import { randomUUID } from "node:crypto";

export const insertPacientes = (req, res) => {
  var pacientes = global.pacientes;

  const { nome, email, idade } = req.body;

  const paciente = {
    id: randomUUID(),
    nome,
    email,
    idade,
  };

  

  pacientes.push(paciente);

  return res.status(201).json({ paciente });
};

export const findAllPacientes = (req, res) => {
  var pacientes = global.pacientes;

  return res.status(200).json({ pacientes });
};

export const findOnePacienteById = (req, res) => {
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
