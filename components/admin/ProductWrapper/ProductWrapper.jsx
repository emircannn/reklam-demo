import React from 'react'
import Product from './Product'

const ProductWrapper = () => {
  return (
    <section className='w-full mx-auto'>

      <h2 className='font-bold uppercase text-2xl border-b-4 border-primary mb-8'>Ürünlerimiz</h2>
      <div className='grid grid-cols-3 place-content-center max-md:gap-4 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1'>
      <Product/>
      <Product/>
      <Product/>
      </div>
    </section>
  )
}

export default ProductWrapper