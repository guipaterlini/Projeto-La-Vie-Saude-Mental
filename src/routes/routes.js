import { Router } from "express";
import {
  deletePacienteById,
  findAllPacientes,
  findOnePacienteById,
  insertPacientes,
  updatePacienteById,
} from "../controllers/pacientes/pacientes.controller.js";
import {
  insertPsicologo,
  login,
} from "../controllers/psicologos/psicologos.controllers.js";
import auth from "../middlewares/auth.middleware.js";
import verifyEmailAlreadyExists from "../middlewares/verify-email-already-exists.middleware.js";
import verifyFieldAge from "../middlewares/verify-field-age.middleware.js";
import verifyFieldEmail from "../middlewares/verify-field-email.middleware.js";
import verifyFieldName from "../middlewares/verify-field-name.middleware.js";
import verifyValidId from "../middlewares/verify-valid-id.middleware.js";

const routes = Router();

// Rota Login Psicologo
routes.post("/login", login);

// Rotas Pacientes
routes.post(
  "/pacientes",
  auth,
  verifyFieldEmail,
  verifyEmailAlreadyExists,
  verifyFieldName,
  verifyFieldAge,
  insertPacientes
);
routes.get("/pacientes", auth, findAllPacientes);
routes.get("/pacientes/:id", auth, verifyValidId, findOnePacienteById);
routes.put(
  "/pacientes/:id",
  auth,
  verifyValidId,
  verifyFieldEmail,
  verifyFieldName,
  verifyFieldAge,
  updatePacienteById
);
routes.delete("/pacientes/:id", auth, verifyValidId, deletePacienteById);

// Rotas Psicologos
routes.post("/psicologos", insertPsicologo);
// routes.get("/psicologos", findAllPsicologos); // precisa criar essa função lá no controllers
// routes.get("/psicologos/:id", findOnePsicologoById); // precisa criar essa função lá no controllers
// routes.put("/psicologos/:id", updatePsicologoById); // precisa criar essa função lá no controllers
// routes.delete("/psicologos/:id", deletePsicologoById); // precisa criar essa função lá no controllers

// Rotas Atendimentos
// routes.post("/atendimentos", insertAtendimento); // precisa criar essa função lá no controllers
// routes.get("/atendimentos", findAllAtendimentos); // precisa criar essa função lá no controllers
// routes.get("/atendimentos/:id", findOneAtendimentoById); // precisa criar essa função lá no controllers

export default routes;
