import { randomUUID } from "node:crypto";
import { Psicologo } from "../../database/models/psicologo.model.js";

export const createPsicologoRepository = async (
  nome,
  email,
  senha,
  apresentacao
) => {
  return await Psicologo.create({
    id: randomUUID(),
    nome,
    email,
    senha,
    apresentacao,
  });
};

export const findPsicologoByEmail = async (email) => {
  const psicologo = await Psicologo.findOne({ where: { email } });

  return psicologo;
};
