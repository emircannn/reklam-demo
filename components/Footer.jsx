import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import {BsInstagram, BsFacebook, BsWhatsapp} from 'react-icons/bs'

const Footer = () => {

    const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-black'>
        <section className='w-[90%] mx-auto py-10 flex items-start justify-between max-md:flex-col max-md:items-center max-md:gap-4'>
            <div className='flex flex-col items-center justify-center w-1/3 max-md:w-full'>
            <div className='w-[150px]'>
               {/*  <Image alt='logo' src="/images/logo.png" priority width={500} height={500} className='w-full h-full object-cover mb-8'/> */}
               <h2 className='uppercase font-bold tracking-wider text-white text-2xl mb-4 text-center '>Logo</h2>
            </div>

            <div className='flex items-center justify-center gap-4'>
                <BsInstagram className='text-primary cursor-pointer hover:scale-105 duration-300' size={25}/>
                <BsFacebook className='text-primary cursor-pointer hover:scale-105 duration-300' size={25}/>
                <BsWhatsapp className='text-primary cursor-pointer hover:scale-105 duration-300' size={25}/>
            </div>
            </div>

            <nav className='w-1/3 max-md:w-full'>
                <ul className='text-white flex flex-col justify-center gap-2 items-center max-md:my-2 w-full'>
                    <li className='hover:text-primary duration-300 cursor-pointer'>Ana Sayfa</li>
                    <li className='hover:text-primary duration-300 cursor-pointer'>Tüm Ürünlerimiz</li>
                    <li className='hover:text-primary duration-300 cursor-pointer'>Hakkımızda</li>
                    <li className='hover:text-primary duration-300 cursor-pointer'>İletişim</li>
                </ul>
            </nav>

            <div className='text-white flex flex-col items-center justify-center gap-2 w-1/3 max-md:w-full'>
                <h4 className='uppercase font-semibold text-lg'>İletişim</h4>
                <div>
                <h4 className='text-center font-semibold'>Adres:</h4>
                <p className='text-center'>Yazlık, Vatan Mah. 4229. Sk. No:9, Serdivan Sakarya</p>
                </div>

                <div className='text-center'>
                <h4 className=' font-semibold'>Telefon:</h4>
                <a href='tel:05525779332'>0552 577 93 32</a>
                </div>

                <div className='text-center'>
                <h4 className=' font-semibold'>Mail:</h4>
                <a target='_blank' href='mailto:yasar.emircann@gmail.com' rel="noreferrer">yasar.emircann@gmail.com</a>
                </div>
            </div>
        </section>

        <section className='text-white w-[90%] mx-auto py-2 flex items-center justify-center'>
            <h3 className='text-center'>Tüm Hakları Saklıdır. {currentYear} © <a href='tel:05525779332'><span className='text-primary font-semibold cursor-pointer hover:opacity-75 duration-300'>Emircan Yaşar</span></a></h3>
        </section>
    </footer>
  )
}

export default Footer