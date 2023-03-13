import { Psicologo } from "../../database/models/psicologo.model";

export const findPsicologoByEmail = async (email) => {
    const psicologo = await Psicologo.findOne({ where: { email } });
  
    return psicologo;
  };