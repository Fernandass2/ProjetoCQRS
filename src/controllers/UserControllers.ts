import { Request, Response } from "express";


import { getAllUsersmedic, createUsermedic, updateUsermedic, deleteUsermedic, Usermedic } from "../models/userModels";

export async function getUsersmedic(req: Request, res: Response): Promise<void> {
    try {
        const users = await getAllUsersmedic();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ er: `Erro ao tentar buscar os usuários -> ${error}` })
    }
}

export async function create(req: Request, res: Response): Promise<void> {
    try {
        const user: Omit<Usermedic, "id"> = req.body
        const rs = await createUsermedic(user);
        res.status(201).json(`Cadastro realizado -> ${rs}`);
    }
    catch (err) {
        res.status(500).json(`Erro ao tentar cadastrar ${err}`);
    }
}

export async function update(req: Request, res: Response): Promise<void> {
    try {
        const user: Omit<Usermedic, "id"> = req.body
        const rs = await updateUsermedic(parseInt(req.params.id), user)
        res.status(201).json(`Atualizado -> ${rs}`);
    }
    catch (err) {
        res.status(500).json(`Erro ao tentar cadastrar ${err}`);
    }
}

export async function deleta(req: Request, res: Response): Promise<void> {
    try {
        const rs = await deleteUsermedic(parseInt(req.params.id))
        res.status(201).json(`Apagado -> ${rs}`);
    }
    catch (err) {
        res.status(500).json(`Erro ao tentar cadastrar ${err}`);
    }
}
