import { ERROR_DUPLICATE_EMAIL } from "../errors/errors.js";
import { findPacienteByEmail } from "../repositories/pacientes/pacientes.repository.js";

export default async function verifyEmailAlreadyExists(req, res, next) {
  const { email } = req.body;

  const paciente = await findPacienteByEmail(email);

  if (paciente) {
    return res.status(409).json({ err: ERROR_DUPLICATE_EMAIL(email) });
  }

  next();
}
