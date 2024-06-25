"use client";

import { useAuth } from '@/context/AuthContext';
import { login } from '@/helpers/authHelper';
import { validationFormLogin } from '@/helpers/formValidation';
import { LoginErrorsProps, LoginProps } from '@/types';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'

const Login = () => {
    const { userData, setUserData } = useAuth()
    const router = useRouter()
    const [dataUser, setDataUser] = useState<LoginProps>({
        email: "",
        password: "",
    });

    const [errorUser, setErrorUser] = useState<LoginErrorsProps>({
        email: "",
        password: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDataUser({
            ...dataUser,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const response = await login(dataUser)
        alert("You have successfully logged in")
        const { token, user } = response
        setUserData({ token, user: user })
        router.push("/")
    }

    useEffect(() => {
        const errors = validationFormLogin(dataUser)
        setErrorUser(errors)
    }, [dataUser])

    return (
        <div className="flex items-center justify-center min-h-[60vh] bg-gray-100 dark:bg-gray-900">
            <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Sign in to Store</h1>
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
                                placeholder="example@gmail.com"
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
                    </div>
                    <div>
                        <button 
                            type="submit" 
                            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
