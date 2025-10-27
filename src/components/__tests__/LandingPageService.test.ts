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
})
