import { Link } from 'react-router-dom';
import { useLandingPage } from './useLandingPage';

export const LandingPage = () => {
    const { workInterval, formattedDate, randomRiddleId } = useLandingPage()

    return (
        <main className="text-lg">
            <div>
                <p>Work Interval: <span data-test="work-interval">{workInterval}</span></p>
                <p>Timestamp: <span data-test="timestamp">{formattedDate}</span></p>
                <div className="p-20 text-center">
                    {randomRiddleId && (
                        <Link data-test="random-riddle-control" to={`/riddle/${randomRiddleId}`} className="border border-blue-500 p-5">
                            Resolve random riddle
                        </Link>
                    )}
                </div>
            </div>
        </main>
    );
};
