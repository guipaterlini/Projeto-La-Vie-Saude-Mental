import { Router } from "express";

const routes = Router();

// Rotas Pacientes
routes.get("/pacientes", (req, res) => {
  var pacientes = global.pacientes;

  return res.status(200).json({ pacientes });
});

export default routes;
