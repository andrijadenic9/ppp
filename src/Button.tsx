import type { ButtonProps } from './types';

function Button({ children, className, isSubmitting }: ButtonProps) {
    return (
        <button disabled={isSubmitting} className={`${className} ${isSubmitting ? 'bg-gray-600' : ''}`}>
            {children}
        </button>
    );
}

export default Button;
