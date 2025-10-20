import { LandingPage } from './components/LandingPage';
import { RiddlePage } from './components/RiddlePage';

export const routes = [
    {
        index: true,
        path: '/',
        element: <LandingPage />,
    },
    {
        path: '/riddle/:id',
        element: <RiddlePage />,
    },
    {
        path: '*',
        element: <main>404: Page not found</main>,
    },
];
