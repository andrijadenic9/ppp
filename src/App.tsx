import { useState, type ChangeEvent, type FormEvent } from 'react';
import './App.css';
// import CardList from './Card/CardList';
// import { topics } from './constants';
import Input from './Input';
import Label from './Label';
import type { ErrorsProps, FormDataProps } from './types';
import Button from './Button';
import ErrorText from './ErrorText';
// CardList expanding
// <main className="w-full max-w-3xl bg-white text-zinc-900 p-6">
//     <div className="space-y-2">
//         {topics.map((t, i) => (
//             <CardList key={`${t.title}-${i}`} topic={t} />
//         ))}
//     </div>
// </main>

function App() {
    const [errors, setErrors] = useState<ErrorsProps>({
        firstName: null,
        lastName: null,
        email: null,
        password: null,
    });

    const [formData, setFormData] = useState<FormDataProps>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    console.log(formData, 'formData');
    console.log(errors, 'errors');

    // Handle input change in real-time validation
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Validate on change
        const error = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    const validateField = (name: string, value = 'string') => {
        if (name === 'firstName') {
            if (!value) return 'First name is required';
            if (value.length < 3) return 'First name must be at least 3 characters';
            return null;
        }
        if (name === 'lastName') {
            if (!value) return 'Last name is required';
            if (value.length < 3) return 'Last name must be at least 3 characters';
            return null;
        }
        if (name === 'email') {
            if (!value) return 'Email is required';
            const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if (!emailRegex.test(value)) return 'Please provide a valid email';
            return null;
        }
        if (name === 'password') {
            if (!value) return 'Password is required';
            if (value.length < 5) return 'Password must be at least 5 characters';
            return null;
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('evo me');
        console.log(isFormValid(), 'isFormValid()');

        // proveri sve greske
        if (!isFormValid()) return;

        console.log('proso sam');
        setIsSubmitting(true);
        // poslaji api
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            alert('Uspesno!');
            // reset forma data
            setFormData({ firstName: '', lastName: '', email: '', password: '' });
            setErrors({ firstName: null, lastName: null, email: null, password: null });
            // reset errors
        } catch (error) {
            console.log(error, 'catch error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const isFormValid = () => {
        const requiredFiles = ['firstName', 'lastName', 'email', 'password'];

        // all filed msut have values
        const allFiledFilled = requiredFiles.every((filed) => formData[filed] && formData[filed].trim() !== '');
        console.log(allFiledFilled, 'allFiledFilled');

        // check for validation errors
        const noErrors = requiredFiles.every((field) => !errors[field]);
        console.log(noErrors, 'noErrors');

        return allFiledFilled && noErrors;
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <h1 className="text-black text-5xl mb-6">Form validation</h1>
            <form onSubmit={handleSubmit} className="grid grid-row-4 grid-col-2 space-y-6 gap-6">
                <div className="flex flex-col col-start-1 col-span-1 m-0">
                    <Label htmlFor="firstName">First name</Label>
                    <Input
                        name="firstName"
                        errors={errors}
                        onChange={handleInputChange}
                        formData={formData}
                        placeholder="Enter first name"
                    />
                    {errors?.firstName && <ErrorText message={errors?.firstName} />}
                </div>
                <div className="flex flex-col col-start-2 col-span-1">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input name="lastName" errors={errors} onChange={handleInputChange} formData={formData} placeholder="Enter last name" />
                    {errors?.lastName && <ErrorText message={errors?.lastName} />}
                </div>
                <div className="flex flex-col col-start-1 col-span-2">
                    <Label htmlFor="email">Email</Label>
                    <Input name="email" errors={errors} onChange={handleInputChange} formData={formData} placeholder="Enter email" />
                    {errors?.email && <ErrorText message={errors?.email} />}
                </div>
                <div className="flex flex-col col-start-1 col-span-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        name="password"
                        errors={errors}
                        onChange={handleInputChange}
                        formData={formData}
                        placeholder="Enter password"
                        type="password"
                    />
                    {errors?.password && <ErrorText message={errors?.password} />}
                </div>
                <Button
                    isSubmitting={isSubmitting}
                    className="cursor-pointer col-start-1 col-span-2 px-2 py-4 bg-green-700 text-white rounded-2xl"
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
            </form>
        </div>
    );
}

export default App;
