import express from "express";
import { randomUUID } from "node:crypto";
import routes from "./routes/routes.js";

const app = express();

const PORT = 3333;

// Middleware, a ordem deles tem impacto no funcionamento da aplicação
app.use(express.json());
app.use(routes);

global.pacientes = [];

// INSERT PACIENTES
app.post("/pacientes", (req, res) => {
  const { nome, email, idade } = req.body;

  const paciente = {
    id: randomUUID(),
    nome,
    email,
    idade,
  };

  pacientes.push(paciente);

  return res.status(201).json({ paciente });
});

// FIND ALL PACIENTES
app.get("/pacientes", (req, res) => {
  return res.status(200).json({ pacientes });
});

// FIND ONE PACIENTE BY ID
app.get("/pacients/:id", (req, res) => {
  const { id } = req.params;

  const paciente = pacientes.find((paciente) => paciente.id === id);

  if (!paciente) {
    return res.status(404).json({ message: "Id não encontrado" });
  }

  return res.status(200).json({ paciente });
});

// UPDATE PACIENTE BY ID
app.put("/pacientes/:id", (req, res) => {
  const { id } = req.params;
  const { nome, email, idade } = req.body;

  const paciente = pacientes.find((paciente) => paciente.id === id);

  paciente.nome = nome;
  paciente.email = email;
  paciente.idade = idade;

  return res.status(200).json({ paciente });
});

// DELETE PACIENTE BY ID
app.delete("/pacientes/:id", (req, res) => {
  const { id } = req.params;

  const indexOfPaciente = pacientes.findIndex((paciente) => paciente.id === id);
  pacientes.splice(indexOfPaciente, 1);

  return res.status(204).send();
});

// Tem como função somente mostrar que o servidor está rodando
app.listen(PORT, () => console.log(`server running in localhost:${PORT}`));
