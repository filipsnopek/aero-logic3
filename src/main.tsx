import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import './index.css';
import { ContextProvider } from './common/context';
import { provideRiddleAnswer } from './domain/riddle/RiddleAnswerProvider';
import { getCorrectAnswer } from './domain/riddle/RiddleAdapter';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ContextProvider providers={[provideRiddleAnswer(getCorrectAnswer)]}>
            <App />
        </ContextProvider>
    </React.StrictMode>,
);
