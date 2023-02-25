/* eslint-disable react-hooks/rules-of-hooks */
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BsFillCalculatorFill, BsBasket3Fill, BsTruck, BsUpload } from 'react-icons/bs'
import axios from 'axios'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { addProduct } from '@/redux/cartSlice'
import { useDispatch } from 'react-redux'
import Properties from '@/components/UI/Properties'
import { toast } from 'react-toastify'


const index = ({product, category}) => {

    const {push} = useRouter()
    const dispatch = useDispatch()
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

    const [price, setPrice] = useState(product.properties[0]?._id);
    const [afprint, setAfprint] = useState(product.afterprint[0]?._id);
    const [wage, setWage] = useState(price.price)
    const [selectedImage, setSelectedImage] = useState(product.img[0]);
    const [zoom, setZoom] = useState(false);
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [amount, setAmount] = useState(0)
    const [tab, setTab] = useState(0)
    const [selectedRadio, setSelectedRadio] = useState("0");
    const [file, setFile] = useState(null);
    const [filePath, setFilePath] = useState(null);
    const [progress, setProgress] = useState(0);


    const handleOptionChange = (event) => {
        setSelectedRadio(event.target.value);
    };
    
    const calculate = () => {
        if(product.price){
            setWage(priceName.price + (printName ? printName.afprice : 0) + (selectedRadio === "0" ? settings[0]?.designWage : 0))  
        }else{
            if (height < 0 || width < 0){
                toast.error("Geçersiz Ebat Bilgisi!", {autoClose: 1000})
                return
            }
            else{
                setAmount(priceName.price*(width/100)*(height/100) + (printName.afprice) + (selectedRadio === "0" ? settings[0]?.designWage : 0)) 
            }
        }
    }

    const currentCategory = category.find((c) => c.title.toLowerCase() === product.category)
    const priceName = product.properties.find((p) => p._id == price)
    const printName = product.afterprint.find((p) => p._id == afprint)

    const handleAdd = () => {
        if(product.price === false){
            if(height === 0 && width === 0){
                toast.error("Lütfen Ebat Bilgilerini Girin!", {autoClose: 1000})
                return
            }else if (height < 0 || width < 0){
                toast.error("Geçersiz Ebat Bilgisi!", {autoClose: 1000})
                return
            }
            else if(product.isDesign === false && selectedRadio === "1"){
                if(filePath === null){
                    toast.error("Lütfen Tasarımınızı Yükleyin!", {autoClose: 1000})
                    return
                } else{
                    dispatch(addProduct({...product, quantity : 1, 
                        width: width ? parseInt(width) : null, 
                        height: height ? parseInt(height) : null, 
                        cartprice: priceName ? priceName.price : null, 
                        afprint : printName ? printName.afprice : null, 
                        selectedRadio : selectedRadio === "0" ? settings[0]?.designWage : 0,
                        priceName: priceName ? priceName.name : null, 
                        printName: printName ? printName.afname : null,
                        id: Date.now(),
                        path: filePath
                    }))
                }
            } else{
                dispatch(addProduct({...product, quantity : 1, 
                    width: width ? parseInt(width) : null, 
                    height: height ? parseInt(height) : null, 
                    cartprice: priceName ? priceName.price : null, 
                    afprint : printName ? printName.afprice : null, 
                    selectedRadio : selectedRadio === "0" ? settings[0]?.designWage : 0,
                    priceName: priceName ? priceName.name : null, 
                    printName: printName ? printName.afname : null,
                    id: Date.now(),
                    path: filePath
                }))
            }
        } 
        else {
            if(product.isDesign === false && selectedRadio === "1"){
                if(filePath === null){
                    toast.error("Lütfen Tasarımınızı Yükleyin!", {autoClose: 1000})
                    return
                } else{
                    dispatch(addProduct({...product, quantity : 1, 
                        width: width ? parseInt(width) : null, 
                        height: height ? parseInt(height) : null, 
                        cartprice: priceName ? priceName.price : null, 
                        afprint : printName ? printName.afprice : null, 
                        selectedRadio : selectedRadio === "0" ? settings[0]?.designWage : 0,
                        priceName: priceName ? priceName.name : null, 
                        printName: printName ? printName.afname : null,
                        id: Date.now(),
                        path: filePath
                    }))
                }
            } else{
                dispatch(addProduct({...product, quantity : 1, 
                    width: width ? parseInt(width) : null, 
                    height: height ? parseInt(height) : null, 
                    cartprice: priceName ? priceName.price : null, 
                    afprint : printName ? printName.afprice : null, 
                    selectedRadio : selectedRadio === "0" ? settings[0]?.designWage : 0,
                    priceName: priceName ? priceName.name : null, 
                    printName: printName ? printName.afname : null,
                    id: Date.now(),
                    path: filePath
                }))
            }
        }
    }


    /* Tasarim Alma */

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
      };

    const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) 
    {
        toast.error("Tasarımınızı Yükleyin")
            return
    };

    const formData = new FormData();
        formData.append('file', file);

    try {
        const uploadResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/orders`, formData, {
            onUploadProgress: (progressEvent) => {
                const percentage = parseInt(
                  Math.round((progressEvent.loaded * 100) / progressEvent.total)
                );
                setProgress(percentage);
              },
          });
        setFilePath(uploadResponse.data.path) 

    } catch (err) {
        toast.error(err.response.data.message);
        console.log(err)
    }
  };

  return (
    <React.Fragment>
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

                    <h3 className='uppercase font-bold text-slate-400 text-sm max-md:text-xs flex items-center gap-2'><span onClick={() => push(`/kategori/${currentCategory._id}`)} className='hover:text-primary duration-300 cursor-pointer'>{product.category}</span> 
                    <AiOutlineArrowRight size={15}/> {product.title}</h3>

                    <h1 className='font-bold text-black uppercase max-2xl:text-lg text-2xl'>{product.title}</h1>

                    <p className='font-semibold max-2xl:text-sm text-black/50'>{product.desc}</p>

                    <div className='mt-8'>
                        <h3 className='uppercase max-2xl:text-base my-2 font-semibold text-xl'>Ürün Özelliği</h3>
                    <select onChange={(e) => setPrice(e.target.value)} className='outline-none px-4 py-2 bg-primary text-white font-semibold'>
                        {product.properties.map((prop) => (<option key={prop._id} value={prop._id}>{prop.name}</option>))}
                    </select>
                    </div>


                    {product.afterprint.length > 0 && <div className='mt-8'>
                        <h3 className='uppercase max-2xl:text-base my-2 font-semibold text-xl'>İmalat Sonrası</h3>
                    <select onChange={(e) => setAfprint(e.target.value)} className='outline-none px-4 py-2 max-2xl:text-sm bg-primary text-white font-semibold'>
                    {product.afterprint.map((print) => (<option key={print._id} value={print._id}>{print.afname} - {print.afprice} TL</option>))}
                    </select>
                    </div>}

                    {product.price ? <h4 className='!mt-8 font-medium max-2xl:text-base text-xl'>Fiyatı: <span className='font-bold'>{(priceName.price).toFixed(2)}₺</span></h4> : 
                    <h4 className='!mt-8 font-medium max-2xl:text-base text-xl'>M² Fiyatı: <span className='font-bold'>{(priceName.price).toFixed(2)}₺</span></h4>}

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
                        <span className='font-semibold text-xl max-2xl:text-sm uppercase'>Tutar: <span className='font-bold'>{product.price ? wage.toFixed(2) : amount.toFixed(2)}₺</span></span>
                    </div> : null }

                    { product.isDesign === false &&
                        <div className='flex items-center justify-start gap-4 my-4'>
                        <label className='font-semibold max-2xl:text-sm text-black/75' htmlFor="option1">
                            <input type="radio" name="option" value="0" onChange={handleOptionChange} checked={selectedRadio === "0"} id="option1">
                            </input> Tasarım Desteği İstiyorum - {settings[0]?.designWage}₺
                        </label>
                        <label className='font-semibold max-2xl:text-sm text-black/75' htmlFor="option2"><input type="radio" name="option" value="1" onChange={handleOptionChange} checked={selectedRadio === "1"} id="option2"></input> Kendi Tasarımım Var.</label>
                        </div>
                    }

                    {
                        selectedRadio === "1" && <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <label htmlFor='design ' className='flex relative flex-col items-center justify-center w-full bg-slate-200 p-4 rounded-xl gap-2 font-bold text-black/75'>
                            <BsUpload size={30}/>
                            <span>{file ? file.name : `(.jpg, .jpeg, .png, .pdf, .eps, .tiff, .zip(.ai, .psd)) - Max. 100 MB`}</span>
                            <div className="relative w-full h-3 bg-gray-300 rounded-full overflow-hidden">
                                <div
                                    className="absolute top-0 left-0 h-full bg-primary"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                            <input onClick={()=> setProgress(0)} id='design' name='file' onChange={handleFileChange} type="file" className='opacity-0 absolute top-0 bottom-0 right-0 left-0'/>
                            </label>
                        {file && <button type='submit' className='button w-full mt-2' >Yükle</button>}
                        </form>
                    }

                    <div className='flex items-center justify-center gap-4'>
                     {product.afterprint.length > 0 && product.price === false ? <button onClick={calculate} className='button flex items-center justify-center gap-2 mt-4 w-full'>Hesapla <BsFillCalculatorFill/></button> : null}
                    <button onClick={() => {handleAdd(), setProgress(0)}} className='button flex items-center justify-center gap-2 mt-4 w-full'>Sepete Ekle <BsBasket3Fill/></button>
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
                        <Properties/>
            </div>
        </section>
        <Footer/>
    </React.Fragment>
  )
}

export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/${params.id}`)
    const category = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
  
    return {
      props: {
        product: res.data ? res.data : null,
        category: category.data ? category.data : null,
      },
    }
  }

export default index