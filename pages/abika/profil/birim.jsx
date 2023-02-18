/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const birim = () => {

  const router = useRouter()

  const [ImageUrl, setImageUrl] = useState('')
  const [ImageUrl2, setImageUrl2] = useState('')
  const [ImageUrl3, setImageUrl3] = useState('')
  const [image, setImage] = useState([])
  const [image2, setImage2] = useState([])
  const [image3, setImage3] = useState([])


  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState("ahşap kumbaralar")
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [propertie, setPropertie] = useState("")
  const [properties, setProperties] = useState([])
  const [print, setPrint] = useState("")
  const [afterprint, setAfterprint] = useState([])
  const [detail, setDetail] = useState("")
  const [prodetails, setProdetails] = useState([])
  const [tech, setTech] = useState("")
  const [info, setInfo] = useState([])
  const [isDesign, setIsDesign] = useState("0")

  const [success, setSuccess] = useState(false)

  const handlePrices = (e) => {
    if (propertie) {
      if (propertie.name && propertie.price) {
        setProperties((prev) => [...prev, propertie]);
      }
    }
  };

  const handlePrint = (e) => {
    if (print) {
      if (print.afname && print.afprice) {
        setAfterprint((prev) => [...prev, print]);
      }
    }
  };

  const handleDetail = (e) => {
    if (detail) {
      if (detail.dtitle && detail.dparagraph) {
        setProdetails((prev) => [...prev, detail]);
      }
    }
  };
  const handleInfo = (e) => {
    if (tech) {
      if (tech.ititle && tech.iparagraph) {
        setInfo((prev) => [...prev, tech]);
      }
    }
  };

  const getImage = async (e) => {
    setImage(e.target.files[0])
    const url = URL.createObjectURL(e.target.files[0])
    setImageUrl(url);
  }
  const getImage2 = async (e) => {
    setImage2(e.target.files[0])
    const url2 = URL.createObjectURL(e.target.files[0])
    setImageUrl2(url2);
  }
  const getImage3 = async (e) => {
    setImage3(e.target.files[0])
    const url3 = URL.createObjectURL(e.target.files[0])
    setImageUrl3(url3);
  }

  useEffect(() => {
    const getCategories = async () => {
      try {
          const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
          setCategories(res?.data)
      } catch (err) {
          console.log(err);
      }
    }
    getCategories()
  }, [])

  const sendServer = async () => {
    const body = new FormData()
    body.append('file', image)
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/upload`,body)
  }

  const sendServer2 = async () => {
    const body = new FormData()
    body.append('file', image2)
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/upload`,body)
  }

  const sendServer3 = async () => {
    const body = new FormData()
    body.append('file', image3)
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/upload`,body)
  }

  const handleCreate = async () => {

    try {
      const newProduct = {
        img: [image.name,image2.name ? image2.name : null,image3.name ? image3.name : null],
        title,
        desc,
        category: category.toLowerCase(),
        info,
        prodetails,
        afterprint,
        properties,
        isActive: true,
        favori: false,
        price: true,
        isDesign: isDesign === "0" ? true : false,
      };

      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/products`,newProduct);

      if (res.status === 200) {
        toast.success("Ürün Başarıyla Yüklendi", {autoClose: 1000});
        sendServer()
        sendServer2() 
        sendServer3()
        setSuccess(true)
        setTimeout(() =>{setSuccess(false)}, 1500)
        setTimeout(() =>{router.reload()}, 1500)
      }
    } catch (err) {
      console.log(err);
      toast.error("Ürün Yüklemesi Başarısız!");
    }
  };


  return (
    <div className='p-16 max-md:p-8 max-sm:p-4 relative'>
      <Head>
        <title>Ürün Ekleme</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <h1 className='font-bold text-2xl tracking-wide text-primary border-b-2 border-primary'>Birim Fiyatlı Ürün Ekleme</h1>
        <div className='mt-8 flex gap-8 max-md:flex-col'>

          {/* Sol Taraf */}
            <div className='w-1/2 max-md:w-full'>

            <h2 className='font-bold text-2xl max-2xl:text-lg tracking-wide text-primary'>Resim</h2>
            <div className='flex items-center justify-between flex-wrap gap-4 max-lg:justify-center mt-4'>
            <label className='flex flex-col items-center justify-center gap-4'>
            <Image alt='' className='w-[200px] max-2xl:w-[150px] object-cover h-[150px] rounded-md shadow-md border border-primary' width={500} height={500} src={ImageUrl ? ImageUrl : '/images/upload.jpg'} />
            <input className='hidden' type='file' id='image' name='image' onChange={getImage}/>
            <span className='button'>Kapak Resimi</span>
            </label>

            <label className='flex flex-col items-center justify-center gap-4'>
            <Image alt='' className='w-[200px]  max-2xl:w-[150px] object-cover h-[150px] rounded-md shadow-md border border-primary' width={500} height={500} src={ImageUrl2 ? ImageUrl2 : '/images/upload.jpg'} />
            <input className='hidden' type='file' id='image' name='image' onChange={getImage2}/>
            <span className='button'>2. Resmi Ekle</span>
            </label>

            <label className='flex flex-col items-center justify-center gap-4'>
            <Image alt='' className='w-[200px] max-2xl:w-[150px] object-cover h-[150px] rounded-md shadow-md border border-primary' width={500} height={500} src={ImageUrl3 ? ImageUrl3 : '/images/upload.jpg'} />
            <input className='hidden' type='file' id='image' name='image' onChange={getImage3}/>
            <span className='button'>3. Resmi Ekle</span>
            </label>
            </div>

            <h2 className='font-bold text-2xl max-2xl:text-lg mt-4 tracking-wide text-primary'>Başlık</h2>
            <input type='text' onChange={(e) => setTitle(e.target.value)} placeholder='Ürün Başlığı...' className="h-12 border-2 mt-4 border-primary outline-none px-4 peer w-full"/>

            <h2 className='font-bold text-2xl tracking-wide mt-4 text-primary'>Kısa Açıklama</h2>
            <textarea type='text' onChange={(e) => setDesc(e.target.value)} placeholder='Kısa Açıklama...' className="h-12 border-2 mt-4 border-primary outline-none px-4 peer w-full"/>

            <h2 className='font-bold text-2xl max-2xl:text-lg tracking-wide mt-4 text-primary'>Ürün Özelliği</h2>

            <div className='flex flex-col items-center justify-center gap-4 w-full'>
            <div className='flex items-center justify-center gap-4 w-full'>
            <input onChange={(e) =>setPropertie({ ...propertie, [e.target.name]: e.target.value })} type='text' placeholder='Örnek 1 Adet' 
            name='name' className="h-12 border-2 mt-4 border-primary outline-none px-4 peer w-full"/>

            <input type='number' placeholder='Fiyatı...' onChange={(e) =>setPropertie({ ...propertie, [e.target.name]: e.target.value })} 
            name='price' className="h-12 border-2 mt-4 border-primary outline-none px-4 peer w-full"/>
            </div>
            <button onClick={handlePrices} className='button w-full mb-4'>Ekle</button>

            {properties.map((item, index) => (
              <h4 onClick={() => {
                setProperties(properties.filter((_,i) => i !== index))
            }} key={index} className='font-semibold text-xl max-2xl:text-base hover:text-primary duration-300 cursor-pointer'>{item.name} - <span >Fiyatı : {item.price} TL</span></h4>
            ))}
            </div>

            <h2 className='font-bold text-2xl max-2xl:text-lg tracking-wide mt-4 text-primary'>İmalat Sonrası</h2>

            <div className='flex flex-col items-center justify-center gap-4 w-full'>
            <div className='flex items-center justify-center gap-4 w-full'>
            <input type='text' onChange={(e) =>setPrint({ ...print, [e.target.name]: e.target.value })}  name='afname' placeholder='Baskı Özelliği...' className="h-12 border-2 mt-4 border-primary outline-none px-4 peer w-full"/>

            <input type='number' onChange={(e) =>setPrint({ ...print, [e.target.name]: e.target.value })}  name='afprice' placeholder='Fiyatı...' className="h-12 border-2 mt-4 border-primary outline-none px-4 peer w-full"/>
            </div>
            <button  onClick={handlePrint} className='button w-full mb-4'>Ekle</button>

            {afterprint.map((item, index) => (
              <h4 onClick={() => {
                setAfterprint(afterprint.filter((_,i) => i !== index))
            }} key={index} className='font-semibold max-2xl:text-base text-xl hover:text-primary duration-300 cursor-pointer'>{item.afname} - <span className='font-bold'>Fiyatı : {item.afprice} TL</span></h4>
            ))}
            </div>

            <h2 className='font-bold text-2xl max-2xl:text-lg tracking-wide mt-4 text-primary'>Hazır Tasarım</h2>

            <div className='mt-2'>
              <select className='w-full p-2 outline-none mt-1 bg-primary text-white' onChange={(e) => setIsDesign(e.target.value)} name="" id="">
                <option value="0">Evet</option>
                <option value="1">Hayır</option>
              </select>
            </div>

            </div>


            {/* Sag Taraf */}
            <div className='w-1/2 max-md:w-full'>

            <h2 className='font-bold max-2xl:text-lg text-2xl tracking-wide text-primary'>Kategori Seç</h2>

            <div className='flex flex-col text-sm text-white'>
                  <span className='font-semibold'>Ürün Kategorisi</span>
                  <select className=' w-full p-2 
                  outline-none mt-1 bg-primary text-white' 
                  name="" id="" onChange={(e) => setCategory(e.target.value)}>
                      {categories.length > 0 && categories.map((c) =>(
                          <option key={c._id} value={c.title.toLowerCase()}>{c.title}</option>
                      ))}
                  </select>
            </div>
            
            <h2 className='font-bold max-2xl:text-lg text-2xl tracking-wide mt-4 text-primary'>Detaylar</h2>
            <div className='mt-4'>
            <input type='text'name='dtitle' onChange={(e) =>setDetail({ ...detail, [e.target.name]: e.target.value })}  placeholder='Detay Başlğı...' className="h-12 border-2 border-primary outline-none px-4 peer w-full"/>
            <textarea type='text' name='dparagraph' onChange={(e) =>setDetail({ ...detail, [e.target.name]: e.target.value })}  placeholder='Detay Açıklaması...' className="h-16 border-2 mt-4 border-primary outline-none px-4 peer w-full"/>
            <button onClick={handleDetail} className='button w-full'>Detay Ekle</button>

            {prodetails.map((item, index) =>(
              <div onClick={() => {
                setProdetails(prodetails.filter((_,i) => i !== index))
            }} key={index} className='cursor-pointer hover:text-primary duration-300'>
              <h3 className='font-bold max-2xl:text-base text-2xl tracking-wide mt-4'>{item.dtitle}</h3>
              <p className='mt-2 max-2xl:text-base font-medium'>{item.dparagraph}</p>
              </div>
            ))}

            </div>

            <h2 className='font-bold max-2xl:text-lg text-2xl tracking-wide mt-6 text-primary'>Teknik Bilgiler</h2>
            <div className='mt-6'>
            <input type='text' name='ititle' onChange={(e) =>setTech({ ...tech, [e.target.name]: e.target.value })} placeholder='Teknik Bilgi Başlğı...' className="h-12 border-2 border-primary outline-none px-4 peer w-full"/>
            <textarea type='text' name='iparagraph' onChange={(e) =>setTech({ ...tech, [e.target.name]: e.target.value })} placeholder='Teknik Bilgi Açıklaması...' className="h-16 border-2 mt-4 border-primary outline-none px-4 peer w-full"/>
            <button onClick={handleInfo} className='button mt-2 w-full'>Teknik Bilgi Ekle</button>

            {info.map((item, index) =>(
              <div onClick={() => {
                setInfo(info.filter((_,i) => i !== index))
            }} key={index} className='cursor-pointer hover:text-primary duration-300'>
              <h3 className='font-bold text-2xl max-2xl:text-base tracking-wide mt-4'>{item.ititle}</h3>
              <p className='mt-2 max-2xl:text-base font-medium'>{item.iparagraph}</p>
              </div>
            ))}

            </div>


            <button onClick={handleCreate} className='mt-8 w-full button'>Ürünü Oluştur</button>

            </div>
        </div>

        {success && <div className='bg-white fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center'>
            <Image alt='' src='/images/success.gif' width={750} height={750} />
        </div>}
    </div>
  )
}

export const getServerSideProps = async (contex) => {

  const myCookie = contex.req?.cookies || "";
  if (myCookie.token !== process.env.ADMIN_TOKEN) {
    return {
      redirect: {
        destination: "/abika",
        permament: false,
      }
    }
  }

  return {
    props : {
  
    }
  }
}

export default birim