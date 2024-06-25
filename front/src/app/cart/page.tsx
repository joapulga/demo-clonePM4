"use client"
import { useAuth } from '@/context/AuthContext'
import { createOrder } from '@/helpers/ordersHelpers'
import { IProduct } from '@/types'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Cart = () => {
    const router = useRouter()
    const { userData } = useAuth()
    const [cart, setCart] = useState<IProduct[]>([])
    const [total, setTotal] = useState<number>(0)

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
        if (!Array.isArray(storedCart)) {
            setCart([])
        } else {
            let totalCart = 0
            storedCart.forEach((item: IProduct) => {
                totalCart += item.price
            })
            setCart(storedCart)
            setTotal(totalCart)
        }
    }, [])

    const handleClick = async () => {
        const idProducts = new Set(cart.map((product) => product.id))
        await createOrder(Array.from(idProducts), userData?.token!)
        alert("Buy successfully!!")
        setCart([])
        setTotal(0)
        localStorage.setItem("cart", "[]")
        router.push("/dashboard/orders")
    }

    return (
        <div className="min-h-[60vh] bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-6">
            <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-4 w-full md:w-2/3">
                    {cart.length > 0 ? (
                        cart.map((item) => (
                            <div key={item.id} className="bg-gray-200 dark:bg-gray-700 rounded-md p-4">
                                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">{item.name}</p>
                                <p className="text-gray-700 dark:text-gray-300">Price: ${item.price}</p>
                            </div>
                        ))
                    ) : (
                        <div className="bg-gray-200 dark:bg-gray-700 rounded-md p-4">
                            <p className="text-gray-700 dark:text-gray-300">You dont have any products in your cart yet.</p>
                        </div>
                    )}
                </div>
                <div className="w-full md:w-1/3 bg-gray-200 dark:bg-gray-700 rounded-md p-4 flex flex-col items-center">
                    <p className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Total: ${total}</p>
                    <button
                        onClick={handleClick}
                        className="w-full rounded-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 p-2 mt-2"
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart

