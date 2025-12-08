import fs from 'fs/promises';
import path from 'path';
import { Recall } from '../app/types';

export async function getRecalls(): Promise<Recall[]> {
    try {
        const filePath = path.join(process.cwd(), 'recalls.json');
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.warn('Error reading recalls.json, returning empty list:', error);
        return [];
    }
}
