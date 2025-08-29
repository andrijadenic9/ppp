import { useState } from 'react';
import type { TopicProps } from './types';

/**
 * SR: Rekurzivni čvor. Svaki čvor lokalno pamti da li je otvoren.
 * - Klik na "balon" = toggle otvaranja
 * - Boje: enabled => "active", disabled => "inactive"
 * - (opciono) pokazuje broj podtema
 */
export default function TopicNode({ topic, level = 0 }: { topic: TopicProps; level?: number }) {
    const [open, setOpen] = useState(false);

    const subCount = topic.subtopics?.length ?? 0;
    const hasChildren = subCount > 0;

    // SR: stil balona
    const bubbleBase = 'inline-flex items-center gap-2 rounded-3xl px-4 py-2 border text-sm transition';
    const active = 'border-emerald-500 bg-emerald-50 text-emerald-500';
    const inactive = 'border-zinc-300 bg-zinc-50 text-zinc-400 line-through';
    const opened = open ? 'ring-1 ring-offset-2 ring-zinc-300' : '';

    return (
        <div className="mb-2">
            <button
                className={`${bubbleBase} ${topic.enabled ? active : inactive} ${opened}`}
                style={{ marginLeft: level * 16 }} // SR: uvlaka po nivou
                onClick={() => hasChildren && setOpen((v) => !v)}
                // SR: ako nema dece, klik ne radi "toggle", samo bubble ostaje pasivan
            >
                {/* Ikonica strelice samo kad ima dece */}
                {hasChildren && <span className="inline-block select-none">{open ? '▾' : '▸'}</span>}

                <span className="font-medium">{topic.title}</span>

                {/* [Optional] broj subtopics u bedžu */}
                {hasChildren && <span className="rounded-full px-2 py-0.5 text-xs border border-current/30">{subCount}</span>}
            </button>

            {/* Deca (rekurzija) */}
            {open && hasChildren && (
                <ul className="mt-2">
                    {topic.subtopics!.map((child, i) => (
                        <li key={`${topic.title}-${i}`}>
                            <TopicNode topic={child} level={level + 1} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
