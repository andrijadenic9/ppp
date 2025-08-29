import type { TopicProps } from './types';

export const topics: TopicProps[] = [
    {
        title: 'Physics',
        enabled: true,
        subtopics: [
            {
                title: 'Classical mechanics',
                enabled: true,
                subtopics: [
                    { title: "Newton's laws", enabled: true, subtopics: [] },
                    { title: 'Work and energy', enabled: true, subtopics: [] },
                    {
                        title: 'Rotational dynamics',
                        enabled: false,
                        subtopics: [
                            {
                                title: 'Angular momentum',
                                enabled: true,
                                subtopics: [],
                            },
                        ],
                    },
                ],
            },
            {
                title: 'Electromagnetism',
                enabled: true,
                subtopics: [
                    { title: "Maxwell's equations", enabled: true, subtopics: [] },
                    { title: 'Electric fields', enabled: true, subtopics: [] },
                    { title: 'Magnetic fields', enabled: false, subtopics: [] },
                ],
            },
            {
                title: 'Quantum mechanics',
                enabled: false,
                subtopics: [
                    { title: 'Wave–particle duality', enabled: true, subtopics: [] },
                    {
                        title: 'Schrödinger equation',
                        enabled: false,
                        subtopics: [
                            {
                                title: 'Rotational dynamics',
                                enabled: false,
                                subtopics: [{ title: 'Angular momentum', enabled: true, subtopics: [] }],
                            },
                            {
                                title: 'Quantum mechanics',
                                enabled: false,
                                subtopics: [
                                    { title: 'Wave–particle duality', enabled: true, subtopics: [] },
                                    { title: 'Schrödinger equation', enabled: false, subtopics: [] },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        title: 'Mathematics',
        enabled: true,
        subtopics: [
            {
                title: 'Algebra',
                enabled: true,
                subtopics: [
                    { title: 'Linear equations', enabled: true, subtopics: [] },
                    { title: 'Matrices', enabled: true, subtopics: [] },
                ],
            },
            {
                title: 'Calculus',
                enabled: true,
                subtopics: [
                    { title: 'Limits & continuity', enabled: true, subtopics: [] },
                    { title: 'Derivatives', enabled: true, subtopics: [] },
                    { title: 'Integrals', enabled: false, subtopics: [] },
                ],
            },
            {
                title: 'Discrete math',
                enabled: false,
                subtopics: [
                    { title: 'Graphs', enabled: true, subtopics: [] },
                    { title: 'Combinatorics', enabled: false, subtopics: [] },
                ],
            },
        ],
    },
    {
        title: 'Computer Science',
        enabled: true,
        subtopics: [
            {
                title: 'Data structures',
                enabled: true,
                subtopics: [
                    { title: 'Arrays & strings', enabled: true, subtopics: [] },
                    { title: 'Trees & graphs', enabled: true, subtopics: [] },
                    { title: 'Heaps & maps', enabled: false, subtopics: [] },
                ],
            },
            {
                title: 'Algorithms',
                enabled: true,
                subtopics: [
                    { title: 'Sorting', enabled: true, subtopics: [] },
                    { title: 'Dynamic programming', enabled: false, subtopics: [] },
                    { title: 'Greedy', enabled: true, subtopics: [] },
                ],
            },
            {
                title: 'Web development',
                enabled: true,
                subtopics: [
                    {
                        title: 'React',
                        enabled: true,
                        subtopics: [
                            { title: 'Hooks', enabled: true, subtopics: [] },
                            { title: 'Context', enabled: false, subtopics: [] },
                        ],
                    },
                    { title: 'Next.js', enabled: true, subtopics: [] },
                    { title: 'Tailwind CSS', enabled: true, subtopics: [] },
                ],
            },
        ],
    },
    {
        title: 'Chemistry',
        enabled: false,
        subtopics: [
            { title: 'Atomic structure', enabled: true, subtopics: [] },
            {
                title: 'Organic chemistry',
                enabled: false,
                subtopics: [
                    { title: 'Hydrocarbons', enabled: true, subtopics: [] },
                    { title: 'Stereochemistry', enabled: false, subtopics: [] },
                ],
            },
        ],
    },
    {
        title: 'Biology',
        enabled: true,
        subtopics: [
            {
                title: 'Cell biology',
                enabled: true,
                subtopics: [
                    { title: 'Organelles', enabled: true, subtopics: [] },
                    { title: 'Cell cycle', enabled: false, subtopics: [] },
                ],
            },
            {
                title: 'Genetics',
                enabled: true,
                subtopics: [
                    { title: 'Mendelian inheritance', enabled: true, subtopics: [] },
                    { title: 'DNA replication', enabled: true, subtopics: [] },
                ],
            },
        ],
    },
];

export default topics;
