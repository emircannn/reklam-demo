import React, { useState } from 'react'
import Product from './Product'

const ProductWrapper = ({productList}) => {

  const [productLimit, setProductLimit] = useState(3);

  return (
    <section className='w-[90%] mx-auto py-24 max-md:py-12'>

      <h2 className='font-bold uppercase text-2xl border-b-4 border-primary mb-8'>Ürünlerimiz</h2>
      <div className='grid grid-cols-3 place-content-center max-md:gap-8 gap-16 max-lg:grid-cols-2 max-sm:grid-cols-1'>
      {productList.length > 0 && productList.slice(0, productLimit).map((product) => product.isActive === true && (<Product key={product._id} product={product}/>))}
      </div>

      <div className='w-full mt-10 flex items-center justify-center gap-4'>
          {productList.length > 3 && <button onClick={() => setProductLimit(productLimit + 3)} className='button'>Daha Falza Göster</button> }
          {productLimit > 3 && <button onClick={() => setProductLimit(productLimit - 3)} className='button'>Daha Az Göster</button> }
          </div>
    </section>
  )
}

export default ProductWrapper