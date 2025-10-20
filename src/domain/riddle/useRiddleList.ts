import { useEffect, useState } from 'react';
import { fetchRiddlesCollection } from '../../domain/riddle/RiddleAdapter';
import { Riddle } from '../../domain/riddle/RiddleService';

export function useRiddleList() {
    const [riddleList, setRiddleList] = useState<Riddle[]>([])

    useEffect(() => {
        fetchRiddlesCollection()
            .then((riddles) => setRiddleList(riddles))
    }, []);

    return riddleList
}
