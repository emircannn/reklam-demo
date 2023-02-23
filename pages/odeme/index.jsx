/* eslint-disable react-hooks/rules-of-hooks */
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { BsUpload } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const index = ({userList}) => {
    
    const { data: session } = useSession();
    const user = userList?.find((user) => user?.email === session?.user?.email)

    const { push } = useRouter();
    const [selectedRadio, setSelectedRadio] = useState("0");
    const [progress, setProgress] = useState(0);
    const [file, setFile] = useState(null);
    const [settings, setSettings] = useState([])
    const [filePath, setFilePath] = useState(null);
    const [checkedPLT1, setCheckedPLT1] = useState(false);
    const [checkedPLT2, setCheckedPLT2] = useState(false);
    const [cartTotalEnd, setCartTotalEnd] = useState(0)

    const [name, setName] = useState(user?.name ? user?.name : "");
    const [email, setEmail] = useState(user?.email ? user?.email : "");
    const [phone, setPhone] = useState("");
    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");
    const [address, setAddress] = useState("");

    const cartItems = useSelector((state) =>  state.cartSlice.products)
    const cartTotal = useSelector((state) =>  state.cartSlice.total)

    useEffect(() => {
        if(session ===null) {
            push("/");
        }else{
            if(cartItems.length === 0 && cartTotalEnd < settings[0]?.minwage){
                push("/");
            }
        }
    }, [session, push, cartItems.length, cartTotalEnd, settings])

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

    useEffect(() => {
      const calculateTotal = async () => {
        if(cartTotal < settings[0]?.freeShipping){
          setCartTotalEnd(cartTotal + (cartItems.length > 0 ? settings[0]?.shippingWage : 0))
        }else{
          setCartTotalEnd(cartTotal)
        }
      }
      calculateTotal()
    }, [cartItems.length, cartTotal, settings])

    const handleOptionChange = (event) => {
        setSelectedRadio(event.target.value);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
      };

    const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) 
    {
        toast.error("Dekont Yükleyin")
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

  const handleChange1 = (e) => {
    const checked = e.target.checked;
    setCheckedPLT1(checked);
    
  };
  const handleChange2 = (e) => {
    const checked = e.target.checked;
    setCheckedPLT2(checked);
  };

  return (
    <React.Fragment>
        <Header/>
        <section className='min-h-[calc(100vh_-_92px)]  p-12 max-md:p-4 max-2xl:min-h-[calc(100vh_-_385px)] flex items-center justify-center flex-col w-[90%] mx-auto'>
            <div>
            <h1 className='uppercase font-bold text-xl max-2xl:text-base text-primary mb-4'>Ödeme</h1>
            <div className='w-full h-full max-lg:flex-col flex items-start justify-center gap-4'>
                <div className='w-2/3 bg-slate-200 max-lg:w-full p-4 h-full rounded-xl'>
                        <h2 className='uppercase font-bold text-lg max-2xl:text-sm text-center text-primary mb-4'>Adres ve İletişim Bilgileri</h2>

                        <div className='w-full flex flex-col items-start justify-center max-sm:px-2 px-8'>
                            
                            <h4 className='font-semibold text-primary max-2xl:text-sm mb-2'>İsim - Soyisim</h4>
                            <input value={name} placeholder="İsim Soyisim giriniz..." onChange={(e) => setName(e.target.value)} type="text" className='h-10 border-2 max-2xl:text-sm rounded-md border-primary outline-none px-4 peer w-full mx-auto'/>
                            
                            
                            <div className='flex items-start justify-center mt-4 gap-4 w-full'>
                                <div className='w-full'>
                                <h4 className='font-semibold text-primary max-2xl:text-sm mb-2'>Telefon Numarası</h4>
                                <input placeholder='Telefon numaranızı giriniz...' onChange={(e) => setPhone(e.target.value)} type="text" className='h-10 border-2 max-2xl:text-sm rounded-md border-primary outline-none px-4 peer w-full mx-auto'/>
                                </div>

                                <div className='w-full'>
                                <h4 className='font-semibold text-primary max-2xl:text-sm mb-2'>Email</h4>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email adresinizi giriniz...' type="text" className='h-10 border-2 max-2xl:text-sm rounded-md border-primary outline-none px-4 peer w-full mx-auto'/>
                                </div>
                            </div>

                            <div className='flex items-start justify-center mt-4 gap-4 w-full'>
                                <div className='w-full'>
                                <h4 className='font-semibold text-primary max-2xl:text-sm mb-2'>İl</h4>
                                <input placeholder='İl bilgisini giriniz...' onChange={(e) => setProvince(e.target.value)}  type="text" className='h-10 rounded-md max-2xl:text-sm border-2 border-primary outline-none px-4 peer w-full mx-auto'/>
                                </div>

                                <div className='w-full'>
                                <h4 className='font-semibold text-primary max-2xl:text-sm mb-2'>İlçe</h4>
                                <input placeholder='İlçe bilgisini giriniz...' onChange={(e) => setDistrict(e.target.value)}  type="text" className='h-10 border-2 max-2xl:text-sm rounded-md border-primary outline-none px-4 peer w-full mx-auto'/>
                                </div>
                            </div>

                            <div className='w-full mt-4'>
                                <h4 className='font-semibold max-2xl:text-sm text-primary mb-2'>Mahalle, Cadde/Sokak, Bina No</h4>
                                <textarea onChange={(e) => setAddress(e.target.value)} placeholder='Mahalle, Cadde/Sokak, Bina No gibi bilgileri giriniz...' type="text" className='h-16 max-2xl:text-sm rounded-md border-2 border-primary outline-none px-4 w-full mx-auto'/>
                            </div>

                            
                        <div className='w-full flex items-start justify-center flex-col'>
                        <div className='flex items-start flex-col justify-start gap-4 my-4 w-full'>
                        <label className='font-semibold border-2 rounded-md border-slate-400 p-4 w-full max-2xl:text-sm text-black/75' htmlFor="option1">
                            <input type="radio" name="option" value="0" onChange={handleOptionChange} checked={selectedRadio === "0"} id="option1">
                            </input> Kredi/Banka Kartı
                        </label>
                        <label className='font-semibold border-2 text-ellipsis whitespace-pre-line max-sm:text-[12px] !select-text rounded-md border-slate-400 p-4 w-full max-2xl:text-sm text-black/75' htmlFor="option2">
                            <input type="radio" name="option" value="1" onChange={handleOptionChange} checked={selectedRadio === "1"} id="option2"></input> EFT/Havale - Halk Bankası - TR330006100519786457841326</label>
                        </div>
                    
                            

                            {
                        selectedRadio === "1" && <form className='w-full' onSubmit={handleSubmit} encType="multipart/form-data">
                            <label htmlFor='design ' className='flex relative flex-col items-center justify-center w-full bg-slate-200 p-4 rounded-xl max-2xl:text-sm gap-2 font-bold text-black/75'>
                            <BsUpload size={30}/>
                            <span>{file ? file.name : `Dekontunuzu Yükleyin...`}</span>
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
                        </div>

                        </div>
                </div>

                <div className='w-1/3 max-lg:w-full bg-slate-200 rounded-xl p-6 h-full'>
                        <h4 className='text-center text-primary font-semibold text-lg max-2xl:text-sm'>Genel Toplam ({cartItems.length} Ürün)</h4>

                        <h5 className='text-center mt-4 font-semibold text-xl max-2xl:text-lg max-md:text-base'>{cartTotalEnd.toFixed(2)} TL</h5>

                        <div className='mt-6 flex flex-col gap-6'>
                        <label className=''>
                            <input type="checkbox" onChange={handleChange1} />
                            <span className='text-sm max-2xl:text-xs font-medium'> <span className='font-semibold text-primary cursor-pointer'>Ön Bilgilendirme Formunu</span> ve 
                            <span onClick={() => push("/kvkk/mesafeli-satis")} className='font-semibold text-primary cursor-pointer'> Mesafeli Satış Sözleşmesini</span> kabul ediyorum.</span>
                        </label>
                        <label className=''>
                            <input type="checkbox" onChange={handleChange2} />
                            <span className='text-sm max-2xl:text-xs font-medium'> <span className='font-semibold text-primary cursor-pointer'>Kullanıcı Sözleşmesi</span> ve 
                            <span onClick={() => push("/kvkk/gizlilik-sozlesmesi")} className='font-semibold text-primary cursor-pointer'> Gizlilik Sözleşmesini</span> Okudum ve kabul ediyorum.</span>
                        </label>
                        </div>

                        <button className='button w-full mt-6'>{selectedRadio === "1" ? 'Siparişi Tamamla' : "Güvenli Ödeme"}</button>
                </div>
            </div>
            </div>
        </section>
        <Footer/>
    </React.Fragment>
  )
}

export const getServerSideProps = async () => {
    const user = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`)
  
    return {
      props: {
        userList: user.data ? user.data : null,
      },
    }
  }

export default index