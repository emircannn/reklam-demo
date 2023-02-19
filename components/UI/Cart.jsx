import { deleteProduct, descrease, increase } from '@/redux/cartSlice'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import OutsideClickHandler from 'react-outside-click-handler'
import { useDispatch, useSelector } from 'react-redux'

const Cart = ({setCart, cart}) => {

    const [settings, setSettings] = useState([])
    const dispatch = useDispatch()

    const cartItems = useSelector((state) => state.cart.products)
    const cartTotal = useSelector((state) => state.cart.total)

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
    <>
    <div className={`fixed top-0 ${cart ? 'left-0' : "left-[-100%]"} duration-300 w-full h-full bg-black/70 z-20`}></div>
      <OutsideClickHandler onOutsideClick={()=> setCart(false)}>
      <div className={`fixed top-0 ${cart ? 'right-0' : "right-[-100%]"} duration-500 max-md:w-[300px] w-[550px] max-2xl:w-[450px] h-full bg-white z-30`}>

      <div className='flex flex-col h-full items-center w-full p-2 relative'>
        <h3 className='text-start p-2 w-full uppercase font-semibold border-b border-gray-300'>Alışveriş Sepeti</h3>

        <div className='w-full !h-full flex flex-col items-start justify-between overflow-hidden'>
        <div className='w-full h-full overflow-y-auto'>
        {cartItems.length > 0 ? cartItems.map((item, index)=> (
          <div key={index} className='my-4 bg-slate-200 rounded-xl shadow-xl w-full p-2 flex items-center justify-center gap-2'>
          <div className='w-[30%] h-[100px]'>
            <Image alt='' src={`/uploads/${item.img[0]}`} width={500} height={500} className='w-full h-full object-cover rounded-xl'/>
          </div>

          <div className='w-[70%] flex items-start justify-start flex-col'>
            <h2 className='font-bold whitespace-nowrap text-ellipsis max-md:text-sm overflow-hidden w-full'>{item.title}</h2>
            {item.priceName && <span className='text-xs font-semibold'>{item.priceName} - {item.cartprice}₺ {item.quantity > 1 && `x ${item.quantity}`}</span>}
            {item.printName && <span className='text-xs font-semibold'>{item.printName} - {item.afprint}₺ {item.quantity > 1 && `x ${item.quantity}`}</span>}
            {item.isDesign === false && <span className='text-xs font-semibold'>{item.selectedRadio === 0 ? "Kendi Tasarımım Var." : "Tasarım Desteği İstiyorum"} - {settings[0]?.designWage}₺</span>}
            {item.price === false ? <span className='text-xs font-semibold'>En: {item.width} cm X Boy: {item.height} cm</span> : null}
            <div className='flex items-center justify-between w-full mt-2'>
            <span className='text-sm font-bold'>Fiyat: {item.price === true ? item.cartprice + item.afprint +  (item.isDesign ? 0 : item.selectedRadio) : 
            item.cartprice*(item.width/100 )*(item.height/100) +item.afprint + (item.isDesign ? 0 : item.selectedRadio)}₺</span>
            <span className='flex items-center justify-center gap-4 bg-white max-2xl:px-3 max-2xl:py-1 px-4 py-2 rounded-full text-primary font-bold'>
              {item.quantity > 1 ? <AiOutlineMinus onClick={()=> dispatch(descrease(item))}  size={18} className='cursor-pointer hover:text-black duration-300 font-bold'/> : 
              <BsFillTrashFill onClick={()=> dispatch(deleteProduct(item))} size={18} className='cursor-pointer hover:text-black duration-300'/>} 
              {item.quantity} 
               <AiOutlinePlus onClick={() => dispatch(increase(item))} size={18} className='cursor-pointer hover:text-black duration-300 font-bold'/>
            </span>
            
            </div>
          </div>
        </div>
        )): <p className='w-full mt-8 font-bold text-lg text-center h-fit'>Sepetiniz Boş!</p>}
        </div>

        <div className='w-full flex flex-col items-center justify-center gap-2 border-t p-2 border-gray-300'>
          <div className='flex items-center justify-between w-full'>
          <h6 className='text-lg font-semibold uppercase'>Toplam:</h6>
          <span className='text-lg font-bold max-2xl:text-base max-md:text-sm'>{cartTotal.toFixed(2)}₺</span>
          </div>
          <div className='flex items-center justify-between w-full'>
          {settings[0]?.minwage > cartTotal && <span className='text-lg font-semibold uppercase max-2xl:text-base max-md:text-sm'>{cartTotal === 0 ? "Min. Sepet Tutarı" : "Eksik Sepet Tutarı:"}</span>}
          { cartTotal < settings[0]?.minwage && <span className='text-lg font-bold max-2xl:text-base max-md:text-sm'>{(settings[0]?.minwage - cartTotal).toFixed(2)} ₺</span>}
          </div>
          <span className='text-xs font-bold uppercase text-black/60'>{settings[0]?.freeShipping.toFixed(2)}₺ Üzeri Kargo Bedava.</span>
          <span className='text-xs font-bold uppercase text-black/60'>Fiyatlarımıza KDV Dahildir.</span>
          <button className='button w-full !uppercase'>Siparişi Tamamla</button>
        </div>
        </div>
        
        <button onClick={() => setCart(false)} className='bg-primary p-2 absolute top-2 right-2'><AiOutlineClose className='text-white' size={20}/></button>
      </div>
      </div>
      </OutsideClickHandler></>
  )
}

export default Cart