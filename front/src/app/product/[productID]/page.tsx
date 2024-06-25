import ProductDetail from '@/components/ProductDetail/ProductDetail';
import React from 'react'


const page = ({ params } : { params : {productID : string} }) => {
  
  const {productID} = params
  
  return (
    <ProductDetail id={productID}/>
  )
}

export default page