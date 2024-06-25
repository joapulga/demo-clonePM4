"use client";

import { register } from '@/helpers/authHelper';
import { validationFormRegister } from '@/helpers/formValidation';
import { RegisterErrorsProps, RegisterProps } from '@/types';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Register = () => {
    const router = useRouter();

    const [dataUser, setDataUser] = useState<RegisterProps>({
        email: "",
        password: "",
        name: "",
        address: "",
        phone: ""
    });

    const [errorUser, setErrorUser] = useState<RegisterErrorsProps>({
        email: "",
        password: "",
        name: "",
        address: "",
        phone: ""
    });

    const [formError, setFormError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDataUser({
            ...dataUser,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const errors = validationFormRegister(dataUser);
        setErrorUser(errors);

        const hasErrors = Object.values(errors).some(error => error);
        if (hasErrors) {
            return;
        }

        setIsSubmitting(true);
        setFormError(null);

        try {
            await register(dataUser);
            alert("You have successfully registered");
            router.push("/login");
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error during registration:", error.message);
                setFormError(error.message);
            } else {
                console.error("Unknown error during registration");
                setFormError("An unknown error occurred. Please try again.");
            }
        } finally {
            setIsSubmitting(false);
        }
    }

    useEffect(() => {
        const errors = validationFormRegister(dataUser);
        setErrorUser(errors);
    }, [dataUser]);

    return (
        <div className="flex items-center justify-center min-h-[60vh] bg-gray-100 dark:bg-gray-900">
            <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Register to Store</h1>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={dataUser.email} 
                                onChange={handleChange} 
                                placeholder="usuario@gmail.com"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            />
                            {errorUser.email && <p className="text-red-600 text-sm">{errorUser.email}</p>}
                        </div>
                        <div className="mt-4">
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                value={dataUser.password} 
                                onChange={handleChange} 
                                placeholder="********"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            />
                            {errorUser.password && <p className="text-red-600 text-sm">{errorUser.password}</p>}
                        </div>
                        <div className="mt-4">
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={dataUser.name} 
                                onChange={handleChange} 
                                placeholder="Usuario"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            />
                            {errorUser.name && <p className="text-red-600 text-sm">{errorUser.name}</p>}
                        </div>
                        <div className="mt-4">
                            <label htmlFor="address" className="sr-only">Address</label>
                            <input 
                                type="text" 
                                id="address" 
                                name="address" 
                                value={dataUser.address} 
                                onChange={handleChange} 
                                placeholder="Barrio unimev - MzE - C12"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            />
                            {errorUser.address && <p className="text-red-600 text-sm">{errorUser.address}</p>}
                        </div>
                        <div className="mt-4">
                            <label htmlFor="phone" className="sr-only">Phone</label>
                            <input 
                                type="text" 
                                id="phone" 
                                name="phone" 
                                value={dataUser.phone} 
                                onChange={handleChange} 
                                placeholder="2617336578"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            />
                            {errorUser.phone && <p className="text-red-600 text-sm">{errorUser.phone}</p>}
                        </div>
                    </div>
                    <div>
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            {isSubmitting ? 'Registering...' : 'Register'}
                        </button>
                    </div>
                    {formError && <p className="text-red-600 text-sm">{formError}</p>}
                </form>
            </div>
        </div>
    )
}

export default Register;
