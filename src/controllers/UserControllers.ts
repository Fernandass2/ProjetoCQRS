import { Request, Response } from "express";
import { 
    getAllMedicos, 
    createMedico, 
     updateMedico, 
     deleteMedico, 
    Med 
} from "../models/UserModel";

export async function getMedicos(req: Request, res: Response): Promise<void> {
    try {
        const medicos = await getAllMedicos();
        res.status(200).json(medicos);
    } catch (error) {
        res.status(500).json(`Erro ao tentar buscar os médicos -> ${error}`);
    }
}

export async function createMedicoHandler(req: Request, res: Response): Promise<void> {
    try {
        const medico: Omit<Med, "id"> = req.body;
        const resultado = await createMedico(medico);
        res.status(201).json(`Médico cadastrado com sucesso -> ${resultado}`);
    } catch (err) {
        res.status(500).json(`Erro ao tentar cadastrar médico -> ${err}`);
    }
}

export async function updateMedicoHandler(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            res.status(400).json("ID inválido");
            return;
        }
        const medico: Omit<Med, "id"> = req.body;
        const resultado = await updateMedico(id, medico);
        res.status(200).json(`Médico atualizado com sucesso -> ${resultado}`);
    } catch (err) {
        res.status(500).json(`Erro ao tentar atualizar médico -> ${err}`);
    }
}

export async function deleteMedicoHandler(req: Request, res: Response): Promise<void> {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            res.status(400).json("ID inválido");
            return;
        }
        const resultado = await deleteMedico(id);
        res.status(200).json(`Médico removido com sucesso -> ${resultado}`);
    } catch (err) {
        res.status(500).json(`Erro ao tentar remover médico -> ${err}`);
    }
}
