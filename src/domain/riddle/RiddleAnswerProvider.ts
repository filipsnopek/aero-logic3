import { createGenericContext } from '../../common/context';

export type RiddleAnswerAdapter = (riddleId: string) => Promise<{ id: string, text: string }>;

export const { useContext, createContextProvider: provideRiddleAnswer } =
    createGenericContext<RiddleAnswerAdapter>();

export function useRiddleCorrectAnswer() {
    return useContext().value;
}
