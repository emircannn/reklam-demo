import Image from 'next/image'
import React from 'react'

const Categories = () => {



  return (
    <div className='w-[90%] mx-auto my-12 max-md:my-6'>
        <h2 className='font-bold uppercase text-2xl border-b-4 border-primary mb-8'>Kategoriler</h2>
            <div className='grid grid-cols-5 gap-4 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2'>
            <div className='w-full flex items-center justify-center flex-col group cursor-pointer'>
                <div className='h-[300px] max-md:h-[250px] w-full shadow-lg overflow-hidden rounded-2xl'>
                    <Image src='/images/is1.webp' width={500} height={500} alt='' priority className='w-full h-full rounded-2xl group-hover:scale-110 duration-500 object-cover'/>
                </div>
                <h3 className='my-4 font-bold tracking-wide uppercase group-hover:text-primary duration-300'>İş Güvenliği Levhaları</h3>
            </div>
            <div className='w-full flex items-center justify-center flex-col group cursor-pointer'>
                <div className='h-[300px] max-md:h-[250px] w-full shadow-lg overflow-hidden rounded-2xl'>
                    <Image src='/images/is2.jpg' width={500} height={500} alt='' priority className='w-full h-full rounded-2xl group-hover:scale-110 duration-500 object-cover'/>
                </div>
                <h3 className='my-4 font-bold tracking-wide uppercase group-hover:text-primary duration-300'>Ahşap Kumabara</h3>
            </div>
            <div className='w-full flex items-center justify-center flex-col group cursor-pointer'>
                <div className='h-[300px] max-md:h-[250px] w-full shadow-lg overflow-hidden rounded-2xl'>
                    <Image src='/images/is3.webp' width={500} height={500} alt='' priority className='w-full h-full rounded-2xl group-hover:scale-110 duration-500 object-cover'/>
                </div>
                <h3 className='my-4 font-bold tracking-wide uppercase group-hover:text-primary duration-300'>Plexi Tabela</h3>
            </div>
            <div className='w-full flex items-center justify-center flex-col group cursor-pointer'>
                <div className='h-[300px] max-md:h-[250px] w-full shadow-lg overflow-hidden rounded-2xl'>
                    <Image src='/images/is4.jpg' width={500} height={500} alt='' priority className='w-full h-full rounded-2xl group-hover:scale-110 duration-500 object-cover'/>
                </div>
                <h3 className='my-4 font-bold tracking-wide uppercase group-hover:text-primary duration-300'>Işıklı Tabela</h3>
            </div>
            <div className='w-full flex items-center justify-center flex-col group cursor-pointer'>
                <div className='h-[300px] max-md:h-[250px] w-full shadow-lg overflow-hidden rounded-2xl'>
                    <Image src='/images/is5.jpg' width={500} height={500} alt='' priority className='w-full h-full rounded-2xl group-hover:scale-110 duration-500 object-cover'/>
                </div>
                <h3 className='my-4 font-bold tracking-wide uppercase group-hover:text-primary duration-300'>Branda</h3>
            </div>
            </div>
    </div>
  )
}

export default Categories