import React, { useState } from 'react'
import Product from './Product'

const ProductWrapper = ({productList}) => {

  const [productLimit, setProductLimit] = useState(3);

  const FavoriItems = productList.filter((product) => {return product.isActive === true && product.favori === true })

  return (
    <section className='w-[90%] mx-auto py-24 max-md:py-12'>

      <h2 className='font-bold uppercase text-2xl max-2xl:text-lg border-b-4 border-primary mb-8'>Öne Çıkan Ürünlerimiz</h2>
      <div className='grid grid-cols-3 place-content-center max-md:gap-8 gap-16 max-lg:grid-cols-2 max-sm:grid-cols-1'>
      {FavoriItems.length > 0 && FavoriItems.slice(0, productLimit).map((product) => (<Product key={product._id} product={product}/>))}
      </div>

      <div className='w-full mt-10 flex items-center justify-center gap-4'>
          {FavoriItems.length > productLimit && <button onClick={() => setProductLimit(productLimit + 3)} className='button'>Daha Falza Göster</button> }
          {productLimit > FavoriItems.length && <button onClick={() => setProductLimit(productLimit - 3)} className='button'>Daha Az Göster</button> }
          </div>
    </section>
  )
}

export default ProductWrapper