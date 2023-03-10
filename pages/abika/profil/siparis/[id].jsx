/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const index = ({order}) => {

    const [shipping, setShipping] = useState(order.shipping ? order.shipping : "")
    const [shippingCode, setShippingCode] = useState(order.shipping_code ? order.shipping_code : "")
    const [currentStatus, setCurrentStatus] = useState(order.status)

    const handleShipping = async() => {
        if(shippingCode === "" || shipping === ""){
            toast.error("Kargo Bilgilerini Giriniz!")
        }else{
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/prorders/${order._id}`, {shipping: shipping, shipping_code: shippingCode})
        if (res.status === 200) {
            toast.success('İşlem Başarılı', {autoClose:1000})
        }else{
            toast.success('İşlem Başarısız!', {autoClose:1000})
        }
        }
    }

    const handleStatus = async() => {
        const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/prorders/${order._id}`, {status: currentStatus+1})
        if(res.status === 200){
            toast.success('İşlem Başarılı', {autoClose:1000})
            setCurrentStatus(currentStatus+1)
        }else{
            toast.success('İşlem Başarısız!', {autoClose:1000})
        }
    }

    const downloadFile = (fileName) => {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/download?fileName=${fileName}`;
        fetch(url)
          .then((response) => response.blob())
          .then((blob) => {
            // Blob'u kullanarak dosyayı indirme
            const downloadLink = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = downloadLink;
            a.download = fileName;
            a.click();
          });
      };
    

  return (
    <React.Fragment>
    <Head>
    <title>Sipariş Detayları</title>
    </Head>
    <section className='p-16 max-2xl:p-10 max-md:p-4'>
    <h1 className='uppercase font-bold border-b border-primary pb-2 text-xl max-2xl:text-base text-primary mb-4'>Sipariş Detayları</h1>

    <div className='flex gap-4 max-lg:flex-col'>
        <div className='w-2/3 max-lg:w-full'>
        <h4 className='text-primary font-medium my-4 text-lg max-2xl:text-base'>Ürünler</h4>
            <div className='flex items-center justify-center flex-col gap-4 w-full'>
                {order.products.map((product) => (
                <div key={product._id} className='bg-slate-200 p-4 w-full rounded-lg shadow-lg max-sm:flex-col flex items-center justify-between gap-6'>
                    <div className='rounded-md w-full  max-2xl:h-[90px] h-[120px] shadow-sm overflow-hidden'>
                        <Image src={`/uploads/${product.img[0]}`} alt='' priority width={1000} height={1000} className='w-full h-full object-cover hover:scale-110 duration-300'/>
                    </div>
                    <div className='flex flex-col gap-2 items-start h-full justify-start w-full'>
                        <h2 className='font-semibold text-sm max-2xl:text-xs'>Ürün Adı: <span>{product.title}</span></h2>
                        {product.height !== null || product.width !== null ? <h3 className='font-semibold text-sm max-2xl:text-xs'>
                            Ebat: <span> En: {product.width} cm X Boy: {product.height} cm</span></h3>: null }
                        {product.priceName && <h3 className='font-semibold text-sm max-2xl:text-xs'>Ürün Özelliği: <span>{product.priceName}</span></h3>}
                        {product.printName && <h3 className='font-semibold text-sm max-2xl:text-xs'>İmalat Sonrası: <span>{product.printName}</span></h3>}
                        {product.quantity && <h3 className='font-semibold text-sm max-2xl:text-xs'>Ürün Adedi: <span>{product.quantity} Adet</span></h3>}
                        {product.path === null && <h3 className='font-semibold text-sm max-2xl:text-xs'>Tasarım Desteği İstiyorum.</h3>}
                    </div>

                    <div className={`flex ${product.path === null && "hidden"} items-end justify-end w-full h-full`}>
                        {product.path && <button onClick={() => downloadFile(product.path)} className='button'>Tasarımı İndir</button>}
                    </div>
                </div>
                ))}
            </div>

            <h4 className='mt-8 text-primary font-medium text-lg max-2xl:text-base'>Sipariş Durumu</h4>
            <div className='flex mt-4 items-center justify-between gap-1 px-10 max-md:px-2'>
                    <div className='flex items-center justify-center flex-col gap-2'>
                    <div className={`w-[80px] max-md:w-[40px] max-md:h-[40px] ${currentStatus === 0 && "animate-pulse"} h-[80px] bg-primary rounded-full`}>
                        <Image alt='' src='/images/payment.png' width={100} height={100} className='w-full h-full object-contain p-4 max-md:p-1'/>
                    </div>
                    <span className='text-primary max-2xl:text-sm max-sm:text-[11px] text-center font-bold'>Sipariş Alındı</span>
                    </div>
                    <div className='flex items-center justify-center flex-col gap-2'>
                    <div className={`w-[80px] max-md:w-[40px] max-md:h-[40px] ${currentStatus === 1 && "animate-pulse"} h-[80px] bg-primary rounded-full`}>
                        <Image alt='' src='/images/hazir.png' width={100} height={100} className='w-full h-full object-contain p-4 max-md:p-1'/>
                    </div>
                    <span className='text-primary max-2xl:text-sm max-sm:text-[11px] text-center font-bold'>Sipariş Hazırlanıyor</span>
                    </div>
                    <div className='flex items-center justify-center flex-col gap-2'>
                    <div className={`w-[80px] max-md:w-[40px] max-md:h-[40px] ${currentStatus === 2 && "animate-pulse"} h-[80px] bg-primary rounded-full`}>
                        <Image alt='' src='/images/box.png' width={100} height={100} className='w-full h-full object-contain p-4 max-md:p-1'/>
                    </div>
                    <span className='text-primary max-2xl:text-sm max-sm:text-[11px] text-center font-bold'>Kargoya Verildi</span>
                    </div>
                    <div className='flex items-center justify-center flex-col gap-2'>
                    <div className={`w-[80px] max-md:w-[40px] max-md:h-[40px] ${currentStatus === 3 && "animate-pulse"} h-[80px] bg-primary rounded-full`}>
                        <Image alt='' src='/images/box1.png' width={100} height={100} className='w-full h-full object-contain p-4 max-md:p-1'/>
                    </div>
                    <span className='text-primary max-2xl:text-sm max-sm:text-[11px] text-center font-bold'>Teslim Edildi</span>
                    </div>
            </div>
                    <div className='w-full mt-6 flex items-center justify-end'>
                    <button onClick={handleStatus} disabled={currentStatus===3} className='button disabled:opacity-75'>{currentStatus === 3 ? "Tamamlandı" : "Bir Sonraki Aşama"}</button>
                    </div>

                    <h4 className='mt-8 text-primary font-medium text-lg max-2xl:text-base'>Kargo Bilgileri</h4>
                    <div className='flex items-center justify-center gap-4 mt-4'>
                        <input value={shipping} onChange={(e) => setShipping(e.target.value)} placeholder='Firma Adı' type="text" className='h-10 border-2 border-primary outline-none px-4 peer w-full' />
                        <input value={shippingCode} onChange={(e) => setShippingCode(e.target.value)} placeholder='Kargo Kodu' type="text" className='h-10 border-2 border-primary outline-none px-4 peer w-full' />
                    </div>
                    <div className='w-full mt-4 flex items-center justify-end'>
                    <button onClick={handleShipping} className='button'>Kargo Bilgilerini Gönder</button>
                    </div>
        </div>

        <div className='w-1/3 bg-slate-200 rounded-lg h-full p-6 mt-14 max-lg:w-full max-lg:mt-4'>
                <h5 className='text-center text-primary text-lg max-2xl:text-base font-semibold max-md:text-sm'>Adres ve İletişim Bilgileri</h5>

                <h6 className='mt-4 max-2xl:text-sm font-semibold'>İsim - Soyisim : <span>{order.customer}</span></h6>
                <h6 className='mt-4 max-2xl:text-sm font-semibold'>Telefon Numarası : <span>{order.phone}</span></h6>
                <h6 className='mt-4 max-2xl:text-sm font-semibold'>Adres : <span>{order.address}</span></h6>

                <h5 className='text-center text-primary text-lg max-2xl:text-base font-semibold max-md:text-sm mt-8'>Ödeme Bilgileri</h5>

                <h6 className='mt-4 font-semibold max-2xl:text-sm text-lg text-center'><span>{(order.total).toFixed(2)} TL</span></h6>
                <h6 className='mt-4 font-semibold max-2xl:text-sm text-center'>Ödeme Yöntemi : <span>{order.method === 0 ? "Kredi/Banka Kartı" : "EFT/Havale"}</span></h6>
                {order.method === 1 && <button onClick={() => downloadFile(order.dekont)} className='button mt-4 w-full'>Dekontu İndir</button>}
        </div>
    </div>
    </section>
    </React.Fragment>
  )
}

export async function getServerSideProps({params}) {
    const order = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/prorders/${params.id}`)

    return {
        props: {
            order: order ? order.data : null
        }
    }
}


export default index