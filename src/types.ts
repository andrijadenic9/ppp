// topics.ts
export type TopicProps = {
    title: string;
    enabled: boolean;
    subtopics: TopicProps[];
};

// topics.ts
export type CardProps = {
    title: string;
    enabled: boolean;
    subtopics: CardProps[];
};
