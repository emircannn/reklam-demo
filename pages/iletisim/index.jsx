import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillMail } from 'react-icons/ai'
import { BsTelephoneFill } from 'react-icons/bs'
import { HiLocationMarker } from 'react-icons/hi'
import { ImWhatsapp } from 'react-icons/im'

const index = () => {
  return (
    <>
        <Header/>
            <section className='min-h-[calc(100vh_-_349px)] w-[90%] mx-auto my-12'>
                <div className='w-full flex items-center justify-center max-xl:flex-col'>
                    <div className='w-1/2 max-xl:w-full flex flex-col gap-8'>
                <h1 className='font-bold text-primary tracking-wide text-4xl uppercase'>İletişim</h1>
                        <div className='flex items-center text-slate-800 font-bold gap-2'>
                        <HiLocationMarker className='text-primary' size={40}/>
                        <Link href='https://goo.gl/maps/NZcZx38HNf6hERCLA'>
                        <span className='text-slate-800 font-bold hover:text-primary duration-300 cursor-pointer text-xl uppercase'>Yazlık, Vatan Mah. 4229. Sk. No:9, Serdivan Sakarya</span>
                        </Link>
                        </div>
                        <div className='flex items-center text-slate-800 font-bold gap-2 ml-2'>
                        <BsTelephoneFill className='text-primary' size={30}/>
                        <a href='tel:05525779332' className='text-slate-800 font-bold hover:text-primary duration-300 cursor-pointer text-xl uppercase'>0552 577 93 32</a>
                        </div>
                        <div className='flex items-center text-slate-800 font-bold gap-2 ml-2'>
                        <AiFillMail className='text-primary' size={30}/>
                        <a href='mailto:yasar.emircann@gmail.com' className='text-slate-800 font-bold hover:text-primary duration-300 cursor-pointer text-xl'>yasar.emircann@gmail.com</a>
                        </div>

                        <button className='button flex items-center justify-center gap-4 w-1/2 max-lg:w-full'><ImWhatsapp size={30}/> WhatssApp İletişim Hattı</button>
                    </div>

                    <div className='w-1/2 max-xl:w-full'>
                        <Image alt='' src='/images/iletisim.gif' width={2000} height={2000} className='w-full h-full object-contain'/>
                    </div>
                </div>
            </section>
        <Footer/>
    </>
  )
}

export default index