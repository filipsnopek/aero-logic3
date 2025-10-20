import { Link } from 'react-router-dom';
import { useRiddleList } from './hooks/useRiddleList';
import { getFormattedDate, getInterval, getRandomRiddleId } from './LandingPageService';

export const LandingPage = () => {
    const riddles = useRiddleList()
    const date = new Date();

    return (
        <main className="text-lg">
            <div>
                <p>Work Interval: {getInterval(date)}</p>
                <p>Timestamp: {getFormattedDate(date)}</p>
                <div className="p-20 text-center">
                    {riddles.length && (
                        <Link to={`/riddle/${getRandomRiddleId(riddles)}`} className="border border-blue-500 p-5">
                            Resolve random riddle
                        </Link>
                    )}
                </div>
            </div>
        </main>
    );
};
