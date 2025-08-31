import type { ChangeEventHandler, ReactNode } from 'react';

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

export type FormDataProps = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

export type ErrorsProps = {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    password: string | null;
};

export type InputProps = {
    name: keyof FormDataProps;
    type?: string;
    placeholder: string;
    errors: ErrorsProps;
    onChange: ChangeEventHandler<HTMLInputElement>;
    formData: FormDataProps;
};

export type ButtonProps = {
    children: ReactNode;
    className: string;
    isSubmitting: boolean;
};
