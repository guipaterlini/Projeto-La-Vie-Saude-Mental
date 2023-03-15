import { randomUUID } from "node:crypto";
import { Atendimento } from "../../database/models/atendimento.model.js";

export const createAtendimentoRepository = async (
    paciente_id,  
    psicologo_id,  
    data_atendimento,  
    observacao) => {    
        return await Atendimento.create({     
        id: randomUUID(),        
        paciente_id,   
        psicologo_id,   
        data_atendimento,    
        observacao, });
};

export const findAllAtendimentoRepository = async () => {
    return await Atendimento.findAll();
}

export const findAtendimentoById = async (id) => {
    const Atendimento = await Atendimento.findOne({ where: { id } });
  
    return Atendimento;
}

