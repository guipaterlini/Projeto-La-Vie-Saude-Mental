import jwt from "jsonwebtoken";
import { ERROR_INVALID_ID } from "../../errors/errors.js";
import {findAllAtendimentoRepository, findAtendimentoById,
  } from "../../repositories/atendimentos/atendimentos.repository.js";


    export const findAllAtendimento = async (req, res) => {
        const atendimento = await findAllAtendimentoRepository();  
            return res.status(200).json({ atendimento });}

    export const findOneAtendimentoById = async (req, res) => {
        const { id } = req.params;
        const atendimento = await findAtendimentoById(id);
            return res.status(200).json({ atendimento });
                if (atendimento !== null) {
                return res.status(404).json({ err: ERROR_INVALID_ID });}}


 