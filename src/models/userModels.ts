import { RowDataPacket, ResultSetHeader } from "mysql2";
import connect from "../databese";


export interface Usermedic extends RowDataPacket {
    id: number;
    namemedico: string;
    cpf: string;
    crm:string;
    especialidade: string;
}


export async function getAllUsersmedic(): Promise<Usermedic[]> {
    const [rows] = await connect.query<Usermedic[]>('SELECT * FROM medicos', []);
    return rows;
}


export async function createUsermedic(usermed: Omit<Usermedic, 'id'>): Promise<ResultSetHeader> {
    try {
      
        const [result] = await connect.execute<ResultSetHeader>(
            'INSERT INTO medicos (namemedico, cpf, crm, especialidade) VALUES (?, ?, ?, ?)',
            [usermed.namemedico, usermed.cpf, usermed.crm ,usermed.especialidade]
        );
        return result;
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        throw error;
    }
}
export async function updateUsermedic(id: number, usermed: Omit<Usermedic, 'id'>): Promise<ResultSetHeader> {
    try {
        
        const [result] = await connect.execute<ResultSetHeader>(
            'UPDATE medicos SET namemedico = ?, cpf = ?, crm= ? , especialidade = ? WHERE id = ?',
            [usermed.namemedico, usermed.cpf, usermed.crm ,usermed.especialidade, id]
        );
        return result;
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        throw error;
    }
}
export async function deleteUsermedic(id: number): Promise<ResultSetHeader> {
    try {
        
        const [result] = await connect.execute<ResultSetHeader>('DELETE FROM medicos WHERE id = ?', [id]);
        return result;
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        throw error;
    }
}