import express from "express";

const app = express();

const PORT = 3333;

var pacientes = []

app.get("/pacientes", (req, res) => {
  return res.status(200).json({ pacientes });
});

app.get("/pacients/:id", (req, res) => {
  return res.status(200).json({ paciente });
});

app.post("/pacientes", (req, res) => {
  return res.status(201).json({ paciente });
});

app.put("/pacientes/:id", (req, res) => {
  return res.status(200).json({ paciente });
});

app.delete("/pacientes/:id", (req, res) => {
  return res.status(204).send();
});

// Tem como função somente mostrar que o servidor está rodando
app.listen(PORT, () => console.log(`server running in localhost:${PORT}`));
