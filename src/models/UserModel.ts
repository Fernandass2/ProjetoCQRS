import { RowDataPacket, ResultSetHeader } from "mysql2";
import pool from '../database';

export interface Med extends RowDataPacket {
    id: number;
    nameMedico: string;
    cpf: string;
    crm: string;
    especialidade: string;
}

// Buscar todos os médicos
export async function getAllMedicos(): Promise<Med[]> {
    const [rows] = await pool.query<Med[]>('SELECT * FROM medicos');
    return rows;
}

// Criar novo médico
export async function createMedico(medico: Omit<Med, 'id'>): Promise<ResultSetHeader> {
    try {
        const [result] = await pool.execute<ResultSetHeader>(
            'INSERT INTO medicos (nameMedico, cpf, crm, especialidade) VALUES (?, ?, ?, ?)',
            [medico.nameMedico, medico.cpf, medico.crm, medico.especialidade]
        );
        return result;
    } catch (error) {
        console.error('Erro ao criar médico:', error);
        throw error;
    }
}

// Atualizar médico existente
export async function updateMedico(id: number, medico: Omit<Med, 'id'>): Promise<ResultSetHeader> {
    try {
        const [result] = await pool.execute<ResultSetHeader>(
            'UPDATE medicos SET nameMedico = ?, cpf = ?, crm = ?, especialidade = ? WHERE id = ?',
            [medico.nameMedico, medico.cpf, medico.crm, medico.especialidade, id]
        );
        return result;
    } catch (error) {
        console.error('Erro ao atualizar médico:', error);
        throw error;
    }
}

// Deletar médico
export async function deleteMedico(id: number): Promise<ResultSetHeader> {
    try {
        const [result] = await pool.execute<ResultSetHeader>(
            'DELETE FROM medicos WHERE id = ?', [id]
        );
        return result;
    } catch (error) {
        console.error('Erro ao deletar médico:', error);
        throw error;
    }
}
