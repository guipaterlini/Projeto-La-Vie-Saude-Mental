import { ERROR_INVALID_DATE } from "../errors/errors.js";

export default function verifyFieldDate(req, res, next) {
  const { data_atendimento } = req.body;

  const regex =
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?([+-]\d{2}:\d{2})?$/;
  if (regex.test(data_atendimento)) {
    next();
  }

  return res.status(400).json({ message: ERROR_INVALID_DATE });
}
