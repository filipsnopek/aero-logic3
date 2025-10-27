import { App } from '../App';
import { ContextProvider } from '../common/context';
import { provideRiddleAnswer } from '../domain/riddle/RiddleAnswerProvider';

describe('ResolveRiddle Test', () => {
    beforeEach(() => {
        cy.intercept('GET', '**/riddles', {
            body: [
                {
                    id: 'RIDDLE_ID',
                    contents: 'Riddle contents',
                    answers: [{ id: 'ANSWER_ID', text: 'Answer 1' }]
                }
            ],
        });
        cy.intercept('GET', '**/riddles/RIDDLE_ID', {body: {
                "id": "RIDDLE_ID",
                "contents": "At my post, I watch them dance, moving dots both near and far, but one stands still and claims to cross the path of all who dare to pass.<br /><br />What is it?",
                "answers": [
                    {
                        "id": "1",
                        "text": "A holding pattern"
                    },
                    {
                        "id": "2",
                        "text": "An obstacle/tower"
                    },
                    {
                        "id": "3",
                        "text": "A runway intersection"
                    }
                ]
            },
        })
    })

    it('resolve riddle correctly', () => {
        const fake = () => Promise.resolve({
            id: '1',
            text: 'A holding pattern',
        });

        cy.mount(
            <ContextProvider providers={[provideRiddleAnswer(fake)]}>
                <App />
            </ContextProvider>,
            '/riddle/RIDDLE_ID',
        );

        cy.getByTestId('riddle-option-1').click()

        cy.getByTestId('riddle-success-message').should('be.visible');
    })
})
