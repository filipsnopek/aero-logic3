export type Riddle = {
    id: string;
    contents: string;
    answers: {
        id: string;
        text: string;
    }[];
};

export function getRandomRiddleId(riddles: Riddle[], excludedId?: string): string | undefined {
    let ids = riddles.map(({ id: riddleId }) => riddleId);

    if (excludedId) {
        ids = ids.filter((riddleId) => riddleId !== excludedId);
    }

    return ids[Math.floor(Math.random() * ids.length)];
}
