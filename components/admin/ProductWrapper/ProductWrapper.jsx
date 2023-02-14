import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AiTwotoneEdit } from 'react-icons/ai'

const ProductWrapper = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`)
        setProducts(res?.data)
     } catch (err) {
        console.log(err);
      }
    }
      getProducts();
  }, [setProducts])


  return (
    <section className='w-full mx-auto'>

      <h2 className='font-bold uppercase text-2xl border-b-4 border-primary mb-8'>Ürünlerimiz</h2>
      <div className='grid grid-cols-3 place-content-center max-md:gap-4 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1'>
        
    {products.map((product) => (
      <div key={product._id} className='w-full h-[400px] flex flex-col bg-gray-200 shadow-xl rounded-2xl'>
      <div className='w-full h-[60%] rounded-2xl overflow-hidden relative cursor-pointer group'>
          <Image alt='' src={`/uploads/${product.img[0]}`} className='w-full h-full object-cover rounded-2xl group-hover:opacity-0 duration-500' priority width={1000} height={1000}/>
          <Image alt='' src={`/uploads/${product.img[1]}`} className='w-full h-full top-0 left-0 absolute object-cover rounded-2xl opacity-0 group-hover:opacity-100 duration-500' priority width={1000} height={1000}/>
          <span className='absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 duration-500 flex items-center justify-center'>
              <button className='p-4 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-white duration-300'><AiTwotoneEdit size={22}/></button>
          </span>
      </div>
      <div className='w-full h-[40%] flex items-center justify-center flex-col gap-2 p-4 rounded-b-2xl'>
          <h2 className='font-bold text-lg uppercase'>{product.title}</h2>
          <p className='whitespace-nowrap text-ellipsis overflow-hidden w-full text-black/50'>{product.desc}</p>
          <span className='font-medium'>M² Fiyatı: <span className='font-bold'>{(product.properties[0].price).toFixed(2)}₺</span></span>
      </div>
  </div>
    ))}

      </div>
    </section>
  )
}

export default ProductWrapper