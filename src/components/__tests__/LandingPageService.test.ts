import { describe, it, expect } from 'vitest';
import { createLandingPageModel } from '../LandingPageService';
import { Riddle } from '../../domain/riddle/RiddleService';

describe('LandingPageViewModel', () => {
    it('returns busy times work interval', () => {
        const date = new Date()
        date.setHours(10);
        const riddles: Riddle[] = []

        const result = createLandingPageModel(date, riddles)

        expect(result.workInterval).toBe('Busy Times');
    })

    it('returns returning pips work interval', () => {
        const date = new Date()
        date.setHours(17);
        const riddles: Riddle[] = []

        const result = createLandingPageModel(date, riddles)

        expect(result.workInterval).toBe('Returning pips');
    })

    it('formats the date', () => {
        const date = new Date(2025, 9, 27, 13, 37);
        const riddles: Riddle[] = [];

        const result = createLandingPageModel(date, riddles);

        expect(result.formattedDate).toBe('2025-10-27 13 37');
    });

    it('returns a randomRiddleId from riddles', () => {
        const date = new Date();
        const riddles: Riddle[] = [
            { id: 'r1', contents: 'Q1', answers: [{ id: 'a1', text: 'A1' }] },
            { id: 'r2', contents: 'Q2', answers: [{ id: 'a2', text: 'A2' }] },
        ];

        const result = createLandingPageModel(date, riddles);

        expect(['r1', 'r2']).toContain(result.randomRiddleId);
    });
})
