/* eslint-disable react-hooks/rules-of-hooks */
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { BsFillCalculatorFill, BsBasket3Fill, BsTruck, BsClockFill, BsUpload } from 'react-icons/bs'
import { BiHappyAlt, BiSupport} from 'react-icons/bi'


const index = () => {

const images = [
        { id: 1, src: "/images/branda.jpg" },
        { id: 2, src: "/images/branda2.jpg" },
        { id: 3, src: "/images/branda3.jpg" }
    ];

    const fiyat = 40

    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [zoom, setZoom] = useState(false);
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [amount, setAmount] = useState(0)
    const [tab, setTab] = useState(0)
    const [selectedRadio, setSelectedRadio] = useState("");


    const handleOptionChange = (event) => {
        setSelectedRadio(event.target.value);
    };
    
    const calculate = () => {
            setAmount((fiyat*(width/100)*(height/100)))
    }

  return (
    <div>
        <Head>
        <title>Branda</title>
        </Head>
        <Header/>
        <section className=' w-[90%] mx-auto my-12 max-md:my-6'>

            <div className='flex gap-12 items-center min-h-[calc(100vh_-_150px)] justify-center max-md:flex-col'>
                <div className='w-1/2 max-md:w-full flex flex-col'>
                    <div className='w-full h-[500px] max-md:h-[300px] border-2 border-primary relative overflow-hidden'>
                        <Image alt='' src={selectedImage.src} onMouseEnter={() => setZoom(true)} 
                        onMouseLeave={() => setZoom(false)} priority width={1000} height={1000} 
                        className={`${ zoom ? "cursor-zoom-in" : "cursor-zoom-out"}  w-full h-full object-contain cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-150`}/>
                    </div>

                    <div className='w-full grid grid-cols-3 gap-4 my-4'>
                        {images.map((image) => (
                            <div key={image.id} className='w-full border-2 cursor-pointer overflow-hidden border-primary'>
                            <Image alt='' onClick={() => setSelectedImage(image)} src={image.src} priority width={1000} height={1000} className='w-full h-full hover:scale-105 duration-300 object-cover'/>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className='w-1/2 max-md:w-full'>
                    <h1 className='font-bold text-black uppercase text-2xl'>Branda</h1>

                    <p className='font-semibold text-black/50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum alias possimus molestias facilis dignissimos! Aliquam dicta ratione totam. Facere, at.</p>

                    <div className='mt-8'>
                        <h3 className='uppercase my-2 font-semibold text-xl'>Ürün Özelliği</h3>
                    <select className='outline-none px-4 py-2 bg-primary text-white font-semibold'>
                        <option value="">Vinil 240 gr.</option>
                        <option value="">Vinil 300 gr.</option>
                    </select>
                    </div>


                    <div className='mt-8'>
                        <h3 className='uppercase my-2 font-semibold text-xl'>Baskı Sonrası</h3>
                    <select className='outline-none px-4 py-2 bg-primary text-white font-semibold'>
                        <option value="">Herhangi Bir İşlem Olmasın</option>
                        <option value="">Kuş Gözü Açılsın</option>
                    </select>
                    </div>

                    <h4 className='!mt-8 font-medium text-xl'>M² Fiyatı: <span className='font-bold'>{fiyat}₺</span></h4>

                    <div className='flex items-center flex-1 justify-cente w-full gap-2 mt-8'>
                    <label className='relative block cursor-text'>
                        <input onChange={(e) => setWidth(e.target.value)} placeholder='En (cm)' type='number' className='h-12 w-full border-2 border-primary outline-none px-4 peer'/>
                    </label>

                            <span className='font-bold text-lg'>X</span>

                    <label className='relative block cursor-text'>
                        <input onChange={(e) => setHeight(e.target.value)} placeholder='Boy (cm)' type='number' className='h-12 w-full border-2 border-primary outline-none px-4 peer'/>
                    </label>
                    </div>
                    

                    <div className='mt-8'>
                        <span className='font-semibold text-xl uppercase'>Tutar: <span className='font-bold'>{amount.toFixed(2)}₺</span></span>
                    </div>

                    <div className='flex items-center justify-start gap-4 my-4'>
                    <label className='font-semibold text-black/75' htmlFor="option1"><input type="radio" name="option" value="0" onChange={handleOptionChange} checked={selectedRadio === "0"} id="option1"></input> Tasarım Desteği İstiyorum</label>
                    <label className='font-semibold text-black/75' htmlFor="option2"><input type="radio" name="option" value="1" onChange={handleOptionChange} checked={selectedRadio === "1"} id="option2"></input> Kendi Tasarımım Var.</label>
                    </div>

                    {
                        selectedRadio === "1" && <form >
                        <input type="file" className='opacity-0'/>
                        <button className='flex flex-col items-center justify-center w-full bg-slate-200 p-8 rounded-xl gap-4 font-bold text-black/75' type="submit"><BsUpload size={30}/> (.jpg, .png, .pdf, .psd, .eps, .tiff, .ai)</button>
                    </form>
                    }

                    <div className='flex items-center justify-center gap-4'>
                    <button onClick={calculate} className='button flex items-center justify-center gap-2 mt-4 w-full'>Hesapla <BsFillCalculatorFill/></button>
                    <button className='button flex items-center justify-center gap-2 mt-4 w-full'>Sepete Ekle <BsBasket3Fill/></button>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center flex-col pt-8 mt-4 border-t-2 w-[75%] max-md:w-full mx-auto border-t-primary'>
                <div className='flex items-center justify-center gap-2'>
                    <span onClick={() => setTab(0)} className={`font-semibold text-lg uppercase cursor-pointer ${tab === 0 && "bg-primary text-white"} duration-300 px-4 py-2`}>Açıklama</span>
                    <span onClick={() => setTab(1)} className={`font-semibold text-lg uppercase cursor-pointer ${tab === 1 && "bg-primary text-white"} duration-300 px-4 py-2`}>Teknik Bilgiler</span>
                </div>

                {tab === 0 && <div className='w-full mt-4 duration-300'>
                    <h3 className='font-bold my-2 uppercase text-xl max-md:text-base'>Lorem ipsum dolor sit amet.</h3>
                    <p className='text-black/50 font-medium max-md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptatibus! Blanditiis, amet deleniti, 
                        atque molestiae maiores, unde dolorem recusandae reiciendis libero culpa quam rem architecto?</p>
                </div>}

                {tab === 1 && 
                <div className='w-full mt-4 duration-300 flex items-center justify-start flex-col p-2'>
                    <div className='flex items-center justify-start w-full border-y border-x border-black/30'>
                    <h3 className='border-r-2 h-full p-2 border-black/30 max-md:text-sm font-bold'>Ürün Özelliği</h3>
                    <p className='font-semibold text-black/50 ml-2 max-md:text-xs'>Ürün Açıklaması Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='flex items-center justify-start w-full border-y border-x border-black/30'>
                    <h3 className='border-r-2 h-full p-2 border-black/30 max-md:text-sm font-bold'>Ürün Özelliği</h3>
                    <p className='font-semibold text-black/50 ml-2 max-md:text-xs'>Ürün Açıklaması Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>}


                <div className='w-full grid grid-cols-4 gap-2 max-md:grid-cols-2'>
                    <div className='flex flex-col items-center justify-start gap-8 my-8 group'>
                        <div className='p-4 rounded-full cursor-pointer border-2 border-primary text-primary group-hover:text-white group-hover:bg-primary duration-300'><BsTruck size={30}/></div>
                        <div className='flex flex-col justify-center items-center'>
                        <span className='font-semibold uppercase text-center'>Ücretsiz Kargo</span>
                        <span className='text-black/50 font-medium text-center'>500 TL üzeri kargo bedava</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-start gap-8 my-8 group'>
                        <div className='p-4 rounded-full cursor-pointer border-2 border-primary text-primary group-hover:text-white group-hover:bg-primary duration-300'><BiSupport size={30}/></div>
                        <div className='flex flex-col justify-center items-center'>
                        <span className='font-semibold uppercase text-center'>Uzmanlarla Birebir Görüşme</span>
                        <span className='text-black/50 font-medium text-center'>0552 577 93 32 (Whatsapp Destek)</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-start gap-8 my-8 group'>
                        <div className='p-4 rounded-full cursor-pointer border-2 border-primary text-primary group-hover:text-white group-hover:bg-primary duration-300'><BsClockFill size={30}/></div>
                        <div className='flex flex-col justify-center items-center'>
                        <span className='font-semibold uppercase text-center'>Hızlı Kargo</span>
                        <span className='text-black/50 font-medium text-center'>Standart ürünler 48 saate kargoda</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-start gap-8 my-8 group'>
                        <div className='p-4 rounded-full cursor-pointer border-2 border-primary text-primary group-hover:text-white group-hover:bg-primary duration-300'><BiHappyAlt size={30}/></div>
                        <div className='flex flex-col justify-center items-center'>
                        <span className='font-semibold uppercase text-center'>Mutlu Müşteriler</span>
                        <span className='text-black/50 font-medium text-center'>Siparişten teslimata kadar aktif iletişim</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default index