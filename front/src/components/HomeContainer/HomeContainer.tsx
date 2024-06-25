import React from 'react'
import Cards from '../Cards/Cards'
import { getProducts } from '@/helpers/productHelper'

const HomeContainer = async () => {

  const products = await getProducts()

  return (
    <div>
        <Cards products={products}/>
    </div>
  )
}

export default HomeContainer