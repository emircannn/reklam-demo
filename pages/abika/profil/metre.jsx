/* eslint-disable react-hooks/rules-of-hooks */
import Image from 'next/image'
import React, { useState } from 'react'

const metre = () => {

  const [ImageUrl, setImageUrl] = useState('')
  const [image, setImage] = useState([])

  const getImage = async (e) => {
    setImage(e.target.files[0])
    const url = URL.createObjectURL(e.target.files[0])
    setImageUrl(url);
  }

    console.log(image?.name)

  return (
    <div className='p-16'>
        <h1 className='font-bold text-2xl tracking-wide text-primary border-b-2 border-primary'>M² Fiyatlı Ürün Ekleme</h1>
        <div className='mt-8 flex gap-8 max-md:flex-col'>
            <div className='w-1/2 max-md:w-full'>
            <h2 className='font-bold text-2xl tracking-wide text-primary'>Başlık</h2>
            <input type='text' placeholder='Ürün Başlığı...' className="h-12 border-2 mt-4 border-primary outline-none px-4 peer w-full"/>

            <h2 className='font-bold text-2xl tracking-wide mt-4 text-primary'>Kısa Açıklama</h2>
            <textarea type='text' placeholder='Ürün Başlığı...' className="h-12 border-2 mt-4 border-primary outline-none px-4 peer w-full"/>

            <h2 className='font-bold text-2xl tracking-wide mt-4 text-primary'>Ürün Özelliği</h2>

            <div className='flex flex-col items-center justify-center gap-4 w-full'>
            <div className='flex items-center justify-center gap-4 w-full'>
            <input type='text' placeholder='Ürün Özelliği...' className="h-12 border-2 mt-4 border-primary outline-none px-4 peer w-full"/>
            <input type='text' placeholder='M² Fiyatı...' className="h-12 border-2 mt-4 border-primary outline-none px-4 peer w-full"/>
            </div>
            <button className='button w-full mb-4'>Ekle</button>

            <h4 className='font-semibold text-xl hover:text-primary duration-300 cursor-pointer'>Ürün Özelliği - <span className='font-bold'>M² Fiyatı : 40 TL</span></h4>
            </div>

            <h2 className='font-bold text-2xl tracking-wide mt-4 text-primary'>Baskı Sonrası</h2>

            <div className='flex flex-col items-center justify-center gap-4 w-full'>
            <div className='flex items-center justify-center gap-4 w-full'>
            <input type='text' placeholder='Baskı Özelliği...' className="h-12 border-2 mt-4 border-primary outline-none px-4 peer w-full"/>
            <input type='text' placeholder='Fiyatı...' className="h-12 border-2 mt-4 border-primary outline-none px-4 peer w-full"/>
            </div>
            <button className='button w-full mb-4'>Ekle</button>

            <h4 className='font-semibold text-xl hover:text-primary duration-300 cursor-pointer'>Baskı Özelliği - <span className='font-bold'>Baskı Fiyatı : 40 TL</span></h4>
            </div>

            </div>

            <div className='w-1/2 max-md:w-full'>
            <h2 className='font-bold text-2xl tracking-wide text-primary'>Resim</h2>
            <div className='flex items-center justify-between mt-4'>
            <label className='flex flex-col items-center justify-center gap-4'>
            <Image alt='' className='w-[200px] object-cover h-[150px] rounded-md shadow-md border border-primary' width={500} height={500} src={ImageUrl ? ImageUrl : '/images/upload.jpg'} />
            <input className='hidden' type='file' id='image' name='image' onChange={getImage}/>
            <span className='button'>Kapak Resimi Ekle</span>
            </label>

            <label className='flex flex-col items-center justify-center gap-4'>
            <Image alt='' className='w-[200px] object-cover h-[150px] rounded-md shadow-md border border-primary' width={500} height={500} src={ImageUrl ? ImageUrl : '/images/upload.jpg'} />
            <input className='hidden' type='file' id='image' name='image' onChange={getImage}/>
            <span className='button'>2. Resmi Ekle</span>
            </label>

            <label className='flex flex-col items-center justify-center gap-4'>
            <Image alt='' className='w-[200px] object-cover h-[150px] rounded-md shadow-md border border-primary' width={500} height={500} src={ImageUrl ? ImageUrl : '/images/upload.jpg'} />
            <input className='hidden' type='file' id='image' name='image' onChange={getImage}/>
            <span className='button'>3. Resmi Ekle</span>
            </label>
            </div>
            </div>
        </div>
    </div>
  )
}

export default metre