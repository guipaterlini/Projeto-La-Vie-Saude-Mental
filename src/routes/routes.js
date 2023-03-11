import { Router } from "express";
import {
  deletePacienteById,
  findAllPacientes,
  findOnePacienteById,
  insertPacientes,
  updatePacienteById,
} from "../controllers/pacientes/pacientes.controller.js";

const routes = Router();

// Rotas Pacientes
routes.post("/pacientes", insertPacientes);
routes.get("/pacientes", findAllPacientes);
routes.get("/pacients/:id", findOnePacienteById);
routes.put("/pacientes/:id", updatePacienteById);
routes.delete("/pacientes/:id", deletePacienteById);

export default routes;
