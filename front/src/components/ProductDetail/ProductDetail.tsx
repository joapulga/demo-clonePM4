"use client"
import { useAuth } from '@/context/AuthContext'
import { getProductsByID } from '@/helpers/productHelper'
import { IProduct } from '@/types'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const ProductDetail = ({ id }: { id: string }) => {

    const router = useRouter()
    const [product, setProduct] = useState<IProduct | null>(null)
    const { userData } = useAuth()

    const fetchData = async () => {
        const productDetail = await getProductsByID(id)
        console.log("Product Detail:", productDetail); // Log para verificar los datos recibidos
        setProduct(productDetail)
    }

    useEffect(() => {
        fetchData()
    }, [id])

    const handleAddToCart = (e: any) => {
        if (!userData?.token) {
            alert("You must be logged in")
        } else {
            let cart = JSON.parse(localStorage.getItem("cart") || "[]")
            if (!Array.isArray(cart)) {
                cart = []
            }
            const productExist = cart.some((item: IProduct) => item.id === product?.id)

            if (productExist) {
                alert("This product exists in your cart!!")
                router.push("/cart")
            } else {
                cart.push(product)
                localStorage.setItem("cart", JSON.stringify(cart))
                alert("Product added to your cart!!")
                router.push("/cart")
            }
        }
    }

    return (
        <div className="min-h-[60vh] bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-6">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center">
                {product && (
                    <>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{product.name}</h2>
                        <img src={product.image} alt={product.name} className="w-1/2 h-auto rounded-md mb-4"/>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">{product.description}</p>
                        <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Price: ${product.price}</p>
                        <button 
                            onClick={handleAddToCart} 
                            id={product.id?.toString()} 
                            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Add to cart
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default ProductDetail
