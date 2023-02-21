import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BiHappyAlt, BiSupport } from 'react-icons/bi'
import { BsClockFill, BsTruck } from 'react-icons/bs'

const Properties = () => {

    const [settings, setSettings] = useState([])

    useEffect(() => {
      const getSettings = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/settings`)
            setSettings(res.data)
        } catch (err) {
            console.log(err)
        }
      }
      getSettings()
    }, [])

  return (
    
        <div className='w-full grid grid-cols-4 gap-2 max-md:grid-cols-2'>
                    <div className='flex flex-col items-center justify-start gap-8 my-8 group'>
                        <div className='p-4 rounded-full cursor-pointer border-2 border-primary text-primary group-hover:text-white group-hover:bg-primary duration-300'><BsTruck size={30}/></div>
                        <div className='flex flex-col justify-center items-center'>
                        <span className='font-semibold max-2xl:text-sm uppercase text-center'>Ücretsiz Kargo</span>
                        <span className='text-black/50 max-2xl:text-sm font-medium text-center'>{settings[0]?.freeShipping} TL üzeri kargo bedava</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-start gap-8 my-8 group'>
                        <div className='p-4 rounded-full cursor-pointer border-2 border-primary text-primary group-hover:text-white group-hover:bg-primary duration-300'><BiSupport size={30}/></div>
                        <div className='flex flex-col justify-center items-center'>
                        <span className='font-semibold uppercase max-2xl:text-sm text-center'>Uzmanlarla Birebir Görüşme</span>
                        <span className='text-black/50 font-medium max-2xl:text-sm text-center'>{settings[0]?.phone} (Whatsapp Destek)</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-start gap-8 my-8 group'>
                        <div className='p-4 rounded-full cursor-pointer border-2 border-primary text-primary group-hover:text-white group-hover:bg-primary duration-300'><BsClockFill size={30}/></div>
                        <div className='flex flex-col justify-center items-center'>
                        <span className='font-semibold uppercase max-2xl:text-sm text-center'>Hızlı Kargo</span>
                        <span className='text-black/50 font-medium max-2xl:text-sm text-center'>Standart ürünler 48 saate kargoda</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-start gap-8 my-8 group'>
                        <div className='p-4 rounded-full cursor-pointer border-2 border-primary text-primary group-hover:text-white group-hover:bg-primary duration-300'><BiHappyAlt size={30}/></div>
                        <div className='flex flex-col justify-center items-center'>
                        <span className='font-semibold uppercase max-2xl:text-sm text-center'>Mutlu Müşteriler</span>
                        <span className='text-black/50 font-medium max-2xl:text-sm text-center'>Siparişten teslimata kadar aktif iletişim</span>
                        </div>
                    </div>
                </div>
  )
}

export default Properties