"use client"
import { useAuth } from '@/context/AuthContext'
import { getOrder } from '@/helpers/ordersHelpers'
import { IOrder } from '@/types'
import React, { useEffect, useState } from 'react'

const OrdersPage = () => {
  const [orders, setOrders] = useState<IOrder[]>([])
  const { userData } = useAuth()

  const fetchData = async () => {
    const ordersResponse = await getOrder(userData?.token!)
    setOrders(ordersResponse)
  }

  useEffect(() => {
    userData?.token && fetchData()
  }, [userData?.token])

  console.log(orders)
  return (
    <div className='flex flex-col items-center justify-center min-h-[60] bg-gray-100 dark:bg-gray-900 p-6'>
      <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>My Orders</h1>
      <div className='w-full max-w-4xl'>
        {
          orders?.length > 0 ? (
            orders?.map((order) => {
              return (
                <div key={order.id} className='bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-4'>
                  <div className='flex justify-between'>
                    <p className='text-lg font-medium text-gray-700 dark:text-gray-300'>
                      Order Date: {new Date(order.date).toLocaleString()}
                    </p>
                    <p className='text-lg font-medium text-gray-700 dark:text-gray-300'>
                      Order ID: {order.id}
                    </p>
                  </div>
                </div>
              )
            })
          ) : (
            <div className='bg-white dark:bg-gray-800 shadow-md rounded-lg p-6'>
              <p className='text-lg text-gray-700 dark:text-gray-300'>You dont have any orders yet.</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default OrdersPage
