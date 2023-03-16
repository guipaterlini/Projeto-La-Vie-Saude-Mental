import { Router } from "express";
import {
  deletePacienteById,
  findAllPacientes,
  findOnePacienteById,
  insertPacientes,
  updatePacienteById,
} from "../controllers/pacientes/pacientes.controller.js";
import {
  deletePsicologoById,
  findAllPsicologos,
  findOnePsicologoById,
  insertPsicologo,
  login,
  updatePsicologoById,
} from "../controllers/psicologos/psicologos.controllers.js";
import verifyEmailAlreadyExists from "../middlewares/verify-email-already-exists.middleware.js";
import verifyFieldAge from "../middlewares/verify-field-age.middleware.js";
import verifyFieldBio from "../middlewares/verify-field-bio.middleware.js";
import verifyFieldEmail from "../middlewares/verify-field-email.middleware.js";
import verifyFieldName from "../middlewares/verify-field-name.middleware.js";
import verifyPassword from "../middlewares/verify-filed-password.middleware.js";
import verifyValidId from "../middlewares/verify-valid-id.middleware.js";

const routes = Router();

// Rotas Pacientes
routes.post(
  "/pacientes",
  verifyFieldEmail,
  verifyEmailAlreadyExists,
  verifyFieldName,
  verifyFieldAge,
  insertPacientes
);
routes.get("/pacientes", findAllPacientes);
routes.get("/pacientes/:id", verifyValidId, findOnePacienteById);
routes.put(
  "/pacientes/:id",
  verifyValidId,
  verifyFieldEmail,
  verifyFieldName,
  verifyFieldAge,
  updatePacienteById
);
routes.delete("/pacientes/:id", verifyValidId, deletePacienteById);

// Rota Login Psicologo
routes.post("/login", verifyFieldEmail, verifyPassword, login);

// Rotas Psicologos
routes.post(
  "/psicologos",
  verifyFieldEmail,
  verifyEmailAlreadyExists,
  verifyFieldName,
  verifyPassword,
  verifyFieldBio,
  insertPsicologo
);
routes.get("/psicologos", findAllPsicologos);
routes.get("/psicologos/:id", verifyValidId, findOnePsicologoById);
routes.put(
  "/psicologos/:id",
  verifyFieldEmail,
  verifyFieldName,
  verifyPassword,
  verifyFieldBio,
  updatePsicologoById
);
routes.delete("/psicologos/:id", deletePsicologoById);

// Rotas Atendimentos
// routes.post("/atendimentos", insertAtendimento); // precisa criar essa função lá no controllers
// routes.get("/atendimentos", findAllAtendimentos); // precisa criar essa função lá no controllers
// routes.get("/atendimentos/:id", findOneAtendimentoById); // precisa criar essa função lá no controllers

export default routes;
