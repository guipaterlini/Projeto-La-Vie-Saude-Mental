import express from "express";

const app = express();

const PORT = 3333;

// Middleware para que o express entenda json, precisa estar sempre acima das rotas
app.use(express.json());

var pacientes = [];

// INSERT PACIENTES
app.post("/pacientes", (req, res) => {
  const { nome, email, idade } = req.body;

  pacientes.push({ nome });

  return res.status(201).json({ paciente });
});

// FIND ALL PACIENTES
app.get("/pacientes", (req, res) => {
  return res.status(200).json({ pacientes });
});

// FIND ONE PACIENTE BY ID
app.get("/pacients/:id", (req, res) => {
  return res.status(200).json({ paciente });
});

// UPDATE PACIENTE BY ID
app.put("/pacientes/:id", (req, res) => {
  return res.status(200).json({ paciente });
});

// DELETE PACIENTE BY ID
app.delete("/pacientes/:id", (req, res) => {
  return res.status(204).send();
});

// Tem como função somente mostrar que o servidor está rodando
app.listen(PORT, () => console.log(`server running in localhost:${PORT}`));
