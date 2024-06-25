"use client"
import React from 'react'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'

const Navbar = () => {
  const {userData} = useAuth()
  return (
    <nav className='flex flex-col items-center justify-between p-4 mb-4 bg-slate-500'>
      <div className='w-full flex items-center justify-between'>
        <Link href={"/"}>
          <img src="https://img.icons8.com/?size=100&id=di70Kca5bb7k&format=png&color=000000" alt="Eccomerce" 
          width={"60px"}
          height={"60px"}
          />
        </Link> 

        <input type="text"
        placeholder='Search...'
        className='max-w-[250px] rounded-md p-2 outline-none'
        />

        {userData?.token ? (
          <div>
            <Link href={"/dashboard"}>
              <p className='text-[20px] rounded-[6px] bg-blue-600 p-[6px] hover:bg-blue-500'>{userData.user.name}</p>
            </Link>
          </div>
          ) : (
            <Link href={"/login"}>
              <p className='text-[20px] rounded-[6px] bg-blue-600 p-[6px] hover:bg-blue-500'>Sign In</p>
            </Link>
          )
        }

        <Link href={"/cart"}>
          <img src="https://img.icons8.com/?size=100&id=60952&format=png&color=000000" alt="Carrito" 
          width={"50px"}
          height={"50px"}
          />
        </Link> 

        </div> 
    </nav>
  )
}

export default Navbar