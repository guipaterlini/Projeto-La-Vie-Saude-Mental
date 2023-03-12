import { Router } from "express";
import {
  deletePacienteById,
  findAllPacientes,
  findOnePacienteById,
  insertPacientes,
  updatePacienteById,
} from "../controllers/pacientes/pacientes.controller.js";
import verifyFieldEmail from "../middlewares/verify-field-email.middleware.js";
import verifyFieldName from "../middlewares/verify-field-name.middleware.js";
// import auth from "../middlewares/auth.middleware.js";
// import verifyPassword from "../middlewares/verify-password.middleware.js";

const routes = Router();

// Rotas Pacientes
routes.post("/pacientes", verifyFieldEmail, verifyFieldName, insertPacientes);
routes.get("/pacientes", findAllPacientes);
routes.get("/pacientes/:id", findOnePacienteById);
routes.put(
  "/pacientes/:id",
  verifyFieldEmail,
  verifyFieldName,
  updatePacienteById
);
routes.delete("/pacientes/:id", deletePacienteById);

// routes.get("/pacientes", auth, findAllPacientes);
// routes.get("/pacientes/:id", auth, findOnePacienteById);
// routes.put("/pacientes/:id", auth, updatePacienteById);
// routes.delete("/pacientes/:id", auth, deletePacienteById);

// routes.post("/login", login);
// routes.post('/users', verifyFieldName, verifyPassword, insertPacientes)

export default routes;
