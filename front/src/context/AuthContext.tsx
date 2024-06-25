"use client"
import { AuthContextProps, UserSession } from '@/types'
import React, { createContext, useContext, useState, useEffect } from 'react'

interface AuthProviderProps {
    children: React.ReactElement
}

const AuthContext = createContext<AuthContextProps>({
    userData: null,
    setUserData: () => {}
})

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {

    const [userData, setUserData] = useState<UserSession | null>(null)

    useEffect(() => {
        if(userData) {
            localStorage.setItem("userSession", JSON.stringify(userData))
        }
    }, [userData])

    useEffect(() => {
        if(typeof window !== "undefined" && window.localStorage) {
            const userData = localStorage.getItem("UserSession")

            setUserData(JSON.parse(userData!))
        }
    }, [])


  return (
    <AuthContext.Provider value={{userData, setUserData}}>
        {children}
    </AuthContext.Provider>
    
  )
}


export const useAuth = () => useContext(AuthContext)