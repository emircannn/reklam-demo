import { useRouter } from 'next/router'
import React from 'react'
import ProductWrapper from './ProductWrapper/ProductWrapper'

const Product = () => {
  const {push} = useRouter()
  return (
    <main className='md:p-8 lg:mt-0 mt-5 max-md:px-4 flex-1 relative'>
      <h2 className='font-bold text-primary text-2xl max-2xl:text-lg border-b-2 border-primary'>Ürünler</h2>
      <div className='mt-5 w-full'>
        <div className='flex items-center justify-center w-full gap-4 my-4'>
          <button onClick={async() => await push('/abika/profil/metre')} className='button w-full'>M² Fiyatlı Ürün Ekle</button>
          <button onClick={async() => await push('/abika/profil/birim')} className='button w-full !bg-rose-600'>Birim Fiy. Ürün Ekle</button>
        </div>

          <ProductWrapper/>
      </div>
    </main>
  )
}

export default Product