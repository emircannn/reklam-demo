/* eslint-disable react-hooks/rules-of-hooks */
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { BsFillCalculatorFill, BsBasket3Fill, BsTruck, BsClockFill, BsUpload } from 'react-icons/bs'
import { BiHappyAlt, BiSupport} from 'react-icons/bi'
import axios from 'axios'
import { AiOutlineArrowRight } from 'react-icons/ai'


const index = ({product}) => {

    const [price, setPrice] = useState(product.properties[0].price);
    const [afprint, setAfprint] = useState(product.afterprint[0]?.afprice);
    const [wage, setWage] = useState(price)
    const [selectedImage, setSelectedImage] = useState(product.img[0]);
    const [zoom, setZoom] = useState(false);
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [amount, setAmount] = useState(0)
    const [tab, setTab] = useState(0)
    const [selectedRadio, setSelectedRadio] = useState("0");


    const handleOptionChange = (event) => {
        setSelectedRadio(event.target.value);
    };
    
    const calculate = () => {
        if(product.price){
            setWage(price + (afprint ? afprint : 0))  
        }else{
            setAmount(price*(width/100)*(height/100) + (afprint)) 
        }
    }


  return (
    <div>
        <Head>
        <title>{product.title}</title>
        </Head>
        <Header/>
        <section className=' w-[90%] mx-auto my-12 max-md:my-6'>

            <div className='flex gap-12 items-center min-h-[calc(100vh_-_150px)] justify-center max-md:flex-col'>
                <div className='w-1/2 max-md:w-full flex flex-col'>
                    <div className='w-full h-[500px] max-2xl:h-[400px] max-md:h-[300px] border-2 border-primary relative overflow-hidden'>
                        <Image alt='' src={`/uploads/${selectedImage}`} onMouseEnter={() => setZoom(true)} 
                        onMouseLeave={() => setZoom(false)} priority width={1000} height={1000} 
                        className={`${ zoom ? "cursor-zoom-in" : "cursor-zoom-out"}  w-full h-full object-contain cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-150`}/>
                    </div>

                    <div className='w-full grid grid-cols-3 gap-4 my-4'>
                        {product.img.map((image, index) => (
                            <div key={index} className={`w-full ${image && "border-2 border-primary"} cursor-pointer overflow-hidden `}>
                            {image && <Image alt={image} onClick={() => setSelectedImage(image)} src={`/uploads/${image}`} priority width={1000} height={1000} className='w-full h-full hover:scale-105 duration-300 object-cover'/>}
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className='w-1/2 max-md:w-full'>

                    <h3 className='uppercase font-bold text-slate-400 text-sm flex items-center gap-2'>{product.category} <AiOutlineArrowRight size={15}/> {product.title}</h3>

                    <h1 className='font-bold text-black uppercase max-2xl:text-lg text-2xl'>{product.title}</h1>

                    <p className='font-semibold max-2xl:text-sm text-black/50'>{product.desc}</p>

                    <div className='mt-8'>
                        <h3 className='uppercase max-2xl:text-base my-2 font-semibold text-xl'>Ürün Özelliği</h3>
                    <select onChange={(e) => setPrice(parseInt(e.target.value))} className='outline-none px-4 py-2 bg-primary text-white font-semibold'>
                        {product.properties.map((prop) => (<option key={prop._id} value={prop.price}>{prop.name}</option>))}
                    </select>
                    </div>


                    {product.afterprint.length > 0 && <div className='mt-8'>
                        <h3 className='uppercase max-2xl:text-base my-2 font-semibold text-xl'>İmalat Sonrası</h3>
                    <select onChange={(e) => setAfprint(parseInt(e.target.value))} className='outline-none px-4 py-2 max-2xl:text-sm bg-primary text-white font-semibold'>
                    {product.afterprint.map((print) => (<option key={print._id} value={print.afprice}>{print.afname} - {print.afprice} TL</option>))}
                    </select>
                    </div>}

                    {product.price ? <h4 className='!mt-8 font-medium max-2xl:text-base text-xl'>Fiyatı: <span className='font-bold'>{price}₺</span></h4> : <h4 className='!mt-8 font-medium max-2xl:text-base text-xl'>M² Fiyatı: <span className='font-bold'>{price}₺</span></h4>}

                    {product.price ? null : <div className='flex items-center flex-1 justify-cente w-full gap-2 mt-8'>
                    <label className='relative block cursor-text'>
                        <input onChange={(e) => setWidth(e.target.value)} placeholder='En (cm)' type='number' className='h-12 w-full border-2 border-primary outline-none px-4 peer'/>
                    </label>

                            <span className='font-bold text-lg'>X</span>

                    <label className='relative block cursor-text'>
                        <input onChange={(e) => setHeight(e.target.value)} placeholder='Boy (cm)' type='number' className='h-12 w-full border-2 border-primary outline-none px-4 peer'/>
                    </label>
                    </div>}
                    

                    {product.afterprint.length > 0 && product.price === false ? <div className='mt-8'>
                        <span className='font-semibold text-xl max-2xl:text-sm uppercase'>Tutar: <span className='font-bold'>{product.price ? wage : amount}₺</span></span>
                    </div> : null }

                    { product.isDesign === false &&
                        <div className='flex items-center justify-start gap-4 my-4'>
                        <label className='font-semibold max-2xl:text-sm text-black/75' htmlFor="option1"><input type="radio" name="option" value="0" onChange={handleOptionChange} checked={selectedRadio === "0"} id="option1"></input> Tasarım Desteği İstiyorum</label>
                        <label className='font-semibold max-2xl:text-sm text-black/75' htmlFor="option2"><input type="radio" name="option" value="1" onChange={handleOptionChange} checked={selectedRadio === "1"} id="option2"></input> Kendi Tasarımım Var.</label>
                        </div>
                    }

                    {
                        selectedRadio === "1" && <form >
                        <input type="file" className='opacity-0'/>
                        <button className='flex flex-col items-center justify-center w-full bg-slate-200 p-8 rounded-xl gap-4 font-bold text-black/75' type="submit"><BsUpload size={30}/> (.jpg, .png, .pdf, .psd, .eps, .tiff, .ai)</button>
                    </form>
                    }

                    <div className='flex items-center justify-center gap-4'>
                     {product.afterprint.length > 0 && product.price === false ? <button onClick={calculate} className='button flex items-center justify-center gap-2 mt-4 w-full'>Hesapla <BsFillCalculatorFill/></button> : null}
                    <button className='button flex items-center justify-center gap-2 mt-4 w-full'>Sepete Ekle <BsBasket3Fill/></button>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center flex-col pt-8 mt-4 border-t-2 w-[75%] max-md:w-full mx-auto border-t-primary'>
                <div className='flex items-center justify-center gap-2'>
                    <span onClick={() => setTab(0)} className={`font-semibold text-lg max-2xl:text-base uppercase cursor-pointer ${tab === 0 && "bg-primary text-white"} duration-300 px-4 py-2`}>Açıklama</span>
                    <span onClick={() => setTab(1)} className={`font-semibold text-lg max-2xl:text-base uppercase cursor-pointer ${tab === 1 && "bg-primary text-white"} duration-300 px-4 py-2`}>Teknik Bilgiler</span>
                </div>

                {tab === 0 && <div className='w-full mt-4 duration-300'>
                    {product.prodetails.map((detail) => (
                        <div key={detail._id} className='w-full'>
                        <h3 className='font-bold my-2 uppercase text-xl max-2xln:text-base'>{detail.dtitle}</h3>
                        <p className='text-black/50 font-medium max-2xl:text-sm'>{detail.dparagraph}</p>
                        </div>
                    ))}
                </div>}

                {tab === 1 && 
                <div className='w-full mt-4 duration-300 flex items-center justify-start flex-col p-2'>
                    {product.info.map((info) => (
                        <div key={info._id} className='flex items-center justify-start w-full border-y border-x border-black/30'>
                        <h3 className='border-r-2 h-full p-2 border-black/30 max-2xl:text-sm font-bold'>{info.ititle}</h3>
                        <p className='font-semibold text-black/50 ml-2 max-2xl:text-xs'>{info.iparagraph}</p>
                        </div>
                    ))}
                </div>}


                <div className='w-full grid grid-cols-4 gap-2 max-md:grid-cols-2'>
                    <div className='flex flex-col items-center justify-start gap-8 my-8 group'>
                        <div className='p-4 rounded-full cursor-pointer border-2 border-primary text-primary group-hover:text-white group-hover:bg-primary duration-300'><BsTruck size={30}/></div>
                        <div className='flex flex-col justify-center items-center'>
                        <span className='font-semibold max-2xl:text-sm uppercase text-center'>Ücretsiz Kargo</span>
                        <span className='text-black/50 max-2xl:text-sm font-medium text-center'>500 TL üzeri kargo bedava</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-start gap-8 my-8 group'>
                        <div className='p-4 rounded-full cursor-pointer border-2 border-primary text-primary group-hover:text-white group-hover:bg-primary duration-300'><BiSupport size={30}/></div>
                        <div className='flex flex-col justify-center items-center'>
                        <span className='font-semibold uppercase max-2xl:text-sm text-center'>Uzmanlarla Birebir Görüşme</span>
                        <span className='text-black/50 font-medium max-2xl:text-sm text-center'>0552 577 93 32 (Whatsapp Destek)</span>
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
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/${params.id}`)
  
    return {
      props: {
        product: res.data ? res.data : null,
      },
    }
  }

export default index