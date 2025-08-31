import type { InputProps } from './types';

function Input({ type, placeholder, onChange, name, formData, errors }: InputProps) {
    console.log(formData, 'formDataformData');
    console.log(errors[name], 'errors[name]');

    const hasError = errors[name];
    console.log(hasError, 'hasError');

    const isValid = formData[name] && !errors[name];
    console.log(isValid, 'isValid');

    const value = formData ? formData[name] : '';

    return (
        <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`border-2 p-2 rounded-xl 
                ${hasError ? 'border-red-600 bg-red-50' : ''} 
                ${isValid ? 'border-green-600 bg-green-50' : ''}
                ${!hasError && !isValid ? 'border-gray-600' : ''}`}
        />
    );
}

export default Input;
