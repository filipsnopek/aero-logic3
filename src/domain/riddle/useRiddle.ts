import { useEffect, useState } from 'react';
import { fetchRiddlesById, fetchRiddlesCollection } from './RiddleAdapter';
import { Riddle } from './RiddleService';
import { useParams } from 'react-router-dom';
import { getAnswerFor } from 'riddle-exam';

export function useRiddleList() {
    const [riddleList, setRiddleList] = useState<Riddle[]>([])

    useEffect(() => {
        fetchRiddlesCollection()
            .then((riddles) => setRiddleList(riddles))
    }, []);

    return riddleList
}

export function useRiddleById() {
    const { id } = useParams<{ id: string }>();
    const [riddle, setRiddle] = useState<Riddle | undefined>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchRiddlesById(id).then((riddle) => setRiddle(riddle)).finally(() => setIsLoading(false));
    }, [id])

    return { riddle, isLoading }
}

export function useRiddleAnswer(riddleId?: string) {
    const [isRiddleSuccessful, setIsRiddleSuccessful] = useState<{ id: string }>();
    const [selected, setSelected] = useState<string>();

    const handleClick = async (answerId: string) => {
        if (selected) {
            return
        }

        setSelected(answerId);

        const data = await getAnswerFor(riddleId);

        setIsRiddleSuccessful(data);
    };

    return { isRiddleSuccessful, selected, handleClick };
}
