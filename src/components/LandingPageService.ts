import { getRandomRiddleId, Riddle } from '../domain/riddle/RiddleService';

function getInterval(time: Date): string {
    const hours = String(time.getHours()).padStart(2, '0');
    const hoursStr = Number(hours);

    if (hoursStr >= 11 && hoursStr > 17) {
        return 'Easy jets';
    }

    if (hoursStr >= 17 && hoursStr < 23) {
        return 'Returning pips';
    }

    if (hoursStr >= 23 && hoursStr < 5) {
        return 'Sleepies';
    }

    return 'Busy Times'
}

function getFormattedDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // +1 because months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours} ${minutes}`
}

export function createLandingPageModel(date: Date, riddles: Riddle[]) {
    return {
        workInterval: getInterval(date),
        formattedDate: getFormattedDate(date),
        randomRiddleId: getRandomRiddleId(riddles),
    };
}
