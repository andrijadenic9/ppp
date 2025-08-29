import { useState } from 'react';
import type { TopicProps } from '../types';

type CardList = {
    topic: TopicProps;
    level?: number;
};

export default function CardList({ topic, level = 0 }: CardList) {
    const [open, setOpen] = useState<boolean>(false);
    const isSubTopics = topic.subtopics?.length;
    console.log(isSubTopics, 'isSubTopics');
    const hasChild = isSubTopics > 0;

    const active = 'bg-green-500';
    const inactive = ' bg-red-500 text-over';
    return (
        <div>
            <div
                onClick={() => hasChild && setOpen((v) => !v)}
                className={`cursor-pointer border-2 rounded-4xl flex gap-2 justify-between p-4 ${topic.enabled ? active : inactive}`}
                style={{marginLeft: level * 32}}
            >
                {hasChild && <span className='text-black font-bold'>{isSubTopics}</span> }
                <p>{topic.title}</p>
                <span>{open ? '--->' : 'o'}</span>
            </div>
            {open && hasChild && (
                <ul>
                    {topic.subtopics.map((t, i) => (
                        <CardList key={`${t.title}-${i}`} topic={t} level={level + 1} />
                    ))}
                </ul>
            )}
        </div>
    );
}
