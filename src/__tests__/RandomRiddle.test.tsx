import { App } from '../App';

describe('Random riddle', () => {
    it('access random riddle', () => {
        cy.intercept('GET', '**/riddles', {
            body: [
                {
                    id: 'RIDDLE_ID',
                    contents: 'Riddle contents',
                    answers: [{ id: 'ANSWER_ID', text: 'Answer 1' }]
                }
            ],
        });
        cy.intercept('GET', '**/riddles/RIDDLE_ID', {
            body: {
                id: 'RIDDLE_ID',
                contents: 'Riddle contents',
                answers: [{ id: 'ANSWER_ID', text: 'Answer 1' }]
            },
        })

        cy.mount(<App />, '/');

        cy.getByTestId('work-interval').should('be.visible');
        cy.getByTestId('timestamp').should('be.visible');

        cy.getByTestId('random-riddle-control').click();

        cy.getByTestId('riddle-contents').should('be.visible');
        cy.url().should('include', '/riddle/RIDDLE_ID');
    });
});
