import { Riddle } from './RiddleService';

export async function fetchRiddlesCollection(): Promise<Riddle[]> {
    const response = await fetch('http://localhost:3000/riddles')

    return response.json();
}

export async function fetchRiddlesById(id: string | undefined): Promise<Riddle> {
    const response = await fetch(`http://localhost:3000/riddles/${id}`)

    return response.json();
}
