import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Product = ({product}) => {
  return (
      <Link href={`/urun/${product._id}`}>
    <div className='w-full relative h-[400px] flex flex-col bg-gray-200 shadow-xl rounded-2xl'>
        <div className='w-full h-[60%] rounded-2xl overflow-hidden relative cursor-pointer group'>
            <Image alt='' src={`/uploads/${product.img[0]}`} className='w-full h-full object-cover rounded-2xl group-hover:opacity-0 duration-500' priority width={1000} height={1000}/>
            <Image alt='' src={`/uploads/${product.img[1]}`} className='w-full h-full top-0 left-0 absolute object-cover rounded-2xl opacity-0 group-hover:opacity-100 duration-500' priority width={1000} height={1000}/>
            <span className='absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 duration-500 flex items-center justify-center'>
                <button className='p-4 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-white duration-300'><AiOutlineArrowRight size={22}/></button>
            </span>
        </div>
        <div className='w-full h-[40%] flex items-center justify-center flex-col gap-2 p-4 rounded-b-2xl'>
            <h2 className='font-bold max-2xl:text-base text-lg uppercase whitespace-nowrap text-ellipsis overflow-hidden w-full text-center'>{product.title}</h2>
            <p className='whitespace-nowrap text-ellipsis text-center overflow-hidden max-2xl:text-sm w-full text-black/50'>{product.desc}</p>
            {product.price ? <span className='font-bold max-2xl:text-sm'>{(product.properties[0].price).toFixed(2)}₺</span> : 
          <span className='font-medium max-2xl:text-sm'>M² Fiyatı: <span className='font-bold'>{(product.properties[0].price).toFixed(2)}₺</span></span>}
        </div>

        {product.favori && <span className='absolute top-4 right-4 bg-primary text-white text-xs p-2 font-semibold animate-pulse'>Öne Çıkan</span>}
    </div>
      </Link>
  )
}

export default Product