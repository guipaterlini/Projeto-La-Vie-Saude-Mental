import { ERROR_INVALID_ID } from "../errors/errors.js";
import { findPacienteById } from "../repositories/pacientes/pacientes.repository.js";
import { findPsicologoById } from "../repositories/psicologos/psicologos.repository.js";

export default async function verifyValidId(req, res, next) {
  const { id } = req.params;
  const { url } = req;

  if ((url = "/pacientes")) {
    const paciente = await findPacienteById(id);

    if (!paciente) {
      return res.status(404).json({ err: ERROR_INVALID_ID });
    }
  }

  if ((url = "/psicologos")) {
    const psicologo = await findPsicologoById(id);

    if (!psicologo) {
      return res.status(404).json({ err: ERROR_INVALID_ID });
    }
  }

  next();
}
