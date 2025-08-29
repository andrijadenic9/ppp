import './App.css';
import CardList from './Card/CardList';
import { topics } from './constants';

function App() {
    return (
        // <main className="min-h-dvh bg-white text-zinc-900 p-6">
        //     <h1 className="text-2xl font-bold mb-4">React.js Recursive – Topics</h1>

        //     <p className="text-sm text-zinc-600 mb-6">
        //         Click a bubble to expand/collapse its subtopics. Green = active, gray = inactive. Badge shows subtopic count.
        //     </p>

        //     <div className="space-y-2">
        //         {topics.map((t, i) => (
        //             <TopicNode key={`${t.title}-${i}`} topic={t} />
        //         ))}
        //     </div>
        // </main>
        <main className="min-h-dvh bg-white text-zinc-900 p-6">
            <div className="space-y-2">
                {topics.map((t, i) => (
                    <CardList key={`${t.title}-${i}`} topic={t} />
                ))}
            </div>
        </main>
    );
}

export default App;
