import Image from 'next/image'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import OutsideClickHandler from 'react-outside-click-handler';

const Search = ({setSearch}) => {
  return (
    <div className='fixed top-0 left-0 bg-black/75 w-full h-full flex items-center justify-center p-28 max-md:p-4'>
    <OutsideClickHandler onOutsideClick={()=> setSearch(false)}>
    <div className='bg-white w-full h-full p-10 relative flex items-center justify-between flex-col'>
        <div className='w-full flex justify-between items-center border-b-2 pb-2 border-slate-400'>
        <h4 className='font-bold text-primary uppercase text-2xl'>Arama</h4>
        <span onClick={() => setSearch(false)} className='hover:rotate-180 cursor-pointer duration-300'><AiOutlineClose size={25}/></span>
        </div>

        <input placeholder='Arama' type='text' className='h-12 w-full border-2 border-slate-400 focus:border-primary outline-none px-4 peer my-6'/>

        <div className='h-full w-full grid grid-cols-5 gap-4 max-lg:grid-cols-3 max-xl:grid-cols-4 max-md:hidden'>
                <div className='flex items-center justify-start gap-4 flex-col'>
                    <div className='h-[200px] w-full rounded-2xl overflow-hidden'>
                    <Image alt='' src='/images/matbaa.jpg' priority width={500} height={500} className='w-full h-full hover:scale-110 duration-300 cursor-pointer rounded-2xl object-cover'/>
                    </div>
                    <h3 className='font-bold uppercase text-primary text-lg tracking-wider'>Ürün İsmi</h3>
                </div>
                <div className='flex items-center justify-start gap-4 flex-col'>
                    <div className='h-[200px] w-full rounded-2xl overflow-hidden'>
                    <Image alt='' src='/images/matbaa.jpg' priority width={500} height={500} className='w-full h-full hover:scale-110 duration-300 cursor-pointer rounded-2xl object-cover'/>
                    </div>
                    <h3 className='font-bold uppercase text-primary text-lg tracking-wider'>Ürün İsmi</h3>
                </div>
                <div className='flex items-center justify-start gap-4 flex-col'>
                    <div className='h-[200px] w-full rounded-2xl overflow-hidden'>
                    <Image alt='' src='/images/matbaa.jpg' priority width={500} height={500} className='w-full h-full hover:scale-110 duration-300 cursor-pointer rounded-2xl object-cover'/>
                    </div>
                    <h3 className='font-bold uppercase text-primary text-lg tracking-wider'>Ürün İsmi</h3>
                </div>
                <div className='flex items-center justify-start gap-4 flex-col'>
                    <div className='h-[200px] w-full rounded-2xl overflow-hidden'>
                    <Image alt='' src='/images/matbaa.jpg' priority width={500} height={500} className='w-full h-full hover:scale-110 duration-300 cursor-pointer rounded-2xl object-cover'/>
                    </div>
                    <h3 className='font-bold uppercase text-primary text-lg tracking-wider'>Ürün İsmi</h3>
                </div>
                <div className='flex items-center justify-start gap-4 flex-col'>
                    <div className='h-[200px] w-full rounded-2xl overflow-hidden'>
                    <Image alt='' src='/images/matbaa.jpg' priority width={500} height={500} className='w-full h-full hover:scale-110 duration-300 cursor-pointer rounded-2xl object-cover'/>
                    </div>
                    <h3 className='font-bold uppercase text-primary text-lg tracking-wider'>Ürün İsmi</h3>
                </div>
        </div>

        <div className='hidden max-md:grid grid-cols-1 w-full h-full gap-4'>
            <div className='flex items-center justify-between gap-2 bg-slate-200 p-2 rounded-2xl w-[450px] max-sm:w-[270px]'>
                <div className='w-1/3 h-[100px] max-sm:h-[75px] rounded-2xl overflow-hidden'>
                    <Image alt='' src='/images/matbaa.jpg' width={500} height={500} className='w-full h-full object-cover'/>
                </div>
                <h3 className='w-2/3'>Ürün İsmi</h3>
            </div>
        </div>
    </div>
    </OutsideClickHandler>
    </div>
  )
}

export default Search