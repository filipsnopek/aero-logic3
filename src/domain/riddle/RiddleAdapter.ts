import { Riddle } from './RiddleService';

export async function fetchRiddlesCollection(): Promise<Riddle[]> {
    const response = await fetch('http://localhost:3000/riddles')

    return response.json();
}
