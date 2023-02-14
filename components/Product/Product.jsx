import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Product = () => {
  return (
      <Link href='/urun'>
    <div className='w-full h-[400px] flex flex-col bg-gray-200 shadow-xl rounded-2xl'>
        <div className='w-full h-[60%] rounded-2xl overflow-hidden relative cursor-pointer group'>
            <Image alt='' src='/images/branda.jpg' className='w-full h-full object-cover rounded-2xl group-hover:opacity-0 duration-500' priority width={1000} height={1000}/>
            <Image alt='' src='/images/branda2.jpg' className='w-full h-full top-0 left-0 absolute object-cover rounded-2xl opacity-0 group-hover:opacity-100 duration-500' priority width={1000} height={1000}/>
            <span className='absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 duration-500 flex items-center justify-center'>
                <button className='p-4 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-white duration-300'><AiOutlineArrowRight size={22}/></button>
            </span>
        </div>
        <div className='w-full h-[40%] flex items-center justify-center flex-col gap-2 p-4 rounded-b-2xl'>
            <h2 className='font-bold text-lg uppercase'>Lorem ipsum dolor sit.</h2>
            <p className='whitespace-nowrap text-ellipsis overflow-hidden w-full text-black/50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ex!</p>
            <span className='font-medium'>M² Fiyatı: <span className='font-bold'>40₺</span></span>
        </div>
    </div>
      </Link>
  )
}

export default Product