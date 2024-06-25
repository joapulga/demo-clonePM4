"use client"
import { useAuth } from '@/context/AuthContext'
import React from 'react'

const DashBoardPage = () => {
  const { userData } = useAuth()
  
  return (
    <div className="min-h-[60vh] bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Dashboard page</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Bienvenido {userData?.user.name}</h3>
          <div className="text-gray-700 dark:text-gray-300">
            <p className="mb-2"><span className="font-semibold">Address:</span> {userData?.user.address}</p>
            <p><span className="font-semibold">Phone:</span> {userData?.user.phone}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoardPage


