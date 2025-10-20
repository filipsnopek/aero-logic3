import { useEffect, useState } from 'react';

export function useRiddleList() {
    const [riddleList, setRiddleList] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/riddles')
            .then((response) => response.json())
            .then(setRiddleList)
    }, []);

    return riddleList
}
