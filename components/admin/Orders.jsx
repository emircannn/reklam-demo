import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Orders = () => {

    const [orders, setOrders] = useState([])
    const {push} = useRouter()

    useEffect(() => {
      const getOrders = async () => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/prorders`)
        setOrders(res.data)
      }
      getOrders()
    }, [])

    
    

  return (
    <section className='md:p-8 lg:mt-0 mt-5 max-md:px-4 flex-1 relative'>
        <h1 className='font-bold text-primary text-2xl border-b-2 border-primary'>Siparişler</h1>

        {orders.length > 0 ? 
        <div className='mt-5 grid grid-cols-2 max-lg:grid-cols-1 gap-2'>
            {orders.sort((a,b) => {return new Date(b.createdAt) - new Date(a.createdAt)}).map((order) => (
            <div key={order._id} className='bg-slate-200 p-4 rounded-lg shadow-lg flex items-center justify-between gap-6'>
                <div className='rounded-md w-[250px] max-2xl:w-[180px] max-2xl:h-[90px] h-[120px] shadow-sm overflow-hidden'>
                    <Image src={`/uploads/${order.products[0]?.img[0]}`} alt='' priority width={1000} height={1000} className='w-full h-full object-cover hover:scale-110 duration-300'/>
                </div>
                <div className='flex flex-col gap-2 items-start w-full h-full justify-center'>
                    <h2 className='font-semibold text-sm max-2xl:text-xs'>Sipariş Kodu: <span>{(order._id).slice(0,8)}...</span></h2>
                    <h3 className='font-semibold text-sm max-2xl:text-xs'>Müşteri Adı: <span>{order.customer}</span></h3>
                    <h3 className='font-semibold text-sm max-2xl:text-xs'>Sipariş Tutarı: <span>{(order.total).toFixed(2)}</span> TL</h3>
                    <h3 className='font-semibold text-sm max-2xl:text-xs'>Sipariş Durumu: <span>{order.status === 0 && "Sipariş Alındı" || order.status === 1 && "Sipariş Hazırlanıyor"
                    || order.status === 2 && "Kargoya Verildi" || order.status === 3 && "Teslim Edildi" }</span></h3>
                </div>
                <div className='h-full flex items-end justify-end'>
                    <button onClick={() => push(`/abika/profil/siparis/${order._id}`)} className='button'>Detaylar</button>
                </div>
            </div>
            ))}    
        </div> : <div className='w-full mt-8'><h2 className='font-bold text-center text-primary text-xl max-2xl:text-base'>Henüz Bir Siparişiniz Yok...</h2></div>}
    </section>
  )
}

export default Orders