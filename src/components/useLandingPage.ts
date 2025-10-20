import { createLandingPageModel } from './LandingPageService';
import { useRiddleList } from '../domain/riddle/useRiddle';

export const useLandingPage = () => {
    const riddles = useRiddleList();
    const model = createLandingPageModel(new Date(), riddles);

    return {
        ...model,
    };
}
