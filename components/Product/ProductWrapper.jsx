import React from 'react'
import Product from './Product'

const ProductWrapper = ({productList}) => {
  return (
    <section className='w-[90%] mx-auto py-24 max-md:py-12'>

      <h2 className='font-bold uppercase text-2xl border-b-4 border-primary mb-8'>Ürünlerimiz</h2>
      <div className='grid grid-cols-3 place-content-center max-md:gap-8 gap-16 max-lg:grid-cols-2 max-sm:grid-cols-1'>
      {productList.map((product) => (
        <Product key={product._id} product={product}/>
      ))}
      </div>
    </section>
  )
}

export default ProductWrapper