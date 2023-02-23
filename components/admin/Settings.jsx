import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Settings = () => {

    const router = useRouter()

    const [settings, setSettings] = useState([])
    const [shippingWage, setShippingWage] = useState(0)
    const [designWage, setDesignWage] = useState(0)
    const [freeShipping, setFreeShipping] = useState(0)
    const [minwage, setMinwage] = useState(0)
    const [address, setAddres] = useState("")
    const [email, SetEmail] = useState("")
    const [phone, setPhone] = useState("")
    
    useEffect(() => {
      const getSettings = async() => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/settings`)
            setSettings(res.data)
        } catch (err) {
            console.log(err)
        }
      }
      getSettings()
    }, [])

    const handleMinwage = async(id) => {
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/settings/${id}`, {minwage: minwage})
            if(res.status === 200) {
                toast.success("Min. Sepet Tutarı Ayarlandı!")
                setSettings([res.data, ...settings.filter((setting) => setting._id !== id)])
                router.reload()
            }
        } catch (err) {
            console.log(err)
        }
    }
    const handleShipping = async(id) => {
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/settings/${id}`, {shippingWage: shippingWage})
            if(res.status === 200) {
                toast.success("Kargo Fiyatı Ayarlandı!")
                setSettings([res.data, ...settings.filter((setting) => setting._id !== id)])
                router.reload()
            }
        } catch (err) {
            console.log(err)
        }
    }
    const handleDesign = async(id) => {
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/settings/${id}`, {designWage: designWage})
            if(res.status === 200) {
                toast.success("Tasarım Fiyatı Ayarlandı!")
                setSettings([res.data, ...settings.filter((setting) => setting._id !== id)])
                router.reload()
            }
        } catch (err) {
            console.log(err)
        }
    }
    const handleFreeShipping = async(id) => {
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/settings/${id}`, {freeShipping: freeShipping})
            if(res.status === 200) {
                toast.success("Ücretsiz Kargo Fiyatı Ayarlandı!")
                setSettings([res.data, ...settings.filter((setting) => setting._id !== id)])
                router.reload()
            }
        } catch (err) {
            console.log(err)
        }
    }
    const handleAddres = async(id) => {
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/settings/${id}`, {address: address})
            if(res.status === 200) {
                toast.success("Adres Ayarlandı!")
                setSettings([res.data, ...settings.filter((setting) => setting._id !== id)])
                router.reload()
            }
        } catch (err) {
            console.log(err)
        }
    }
    const handlePhone = async(id) => {
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/settings/${id}`, {phone: phone})
            if(res.status === 200) {
                toast.success("Telefon Numarası Ayarlandı!")
                setSettings([res.data, ...settings.filter((setting) => setting._id !== id)])
                router.reload()
            }
        } catch (err) {
            console.log(err)
        }
    }
    const handleEmail = async(id) => {
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/settings/${id}`, {email: email})
            if(res.status === 200) {
                toast.success("Email Ayarlandı!")
                setSettings([res.data, ...settings.filter((setting) => setting._id !== id)])
                router.reload()
            }
        } catch (err) {
            console.log(err)
        }
    }
    

  return (
    <section className='md:p-8 lg:mt-0 mt-5 max-md:px-4 flex-1 relative'>
         <h2 className='font-bold text-primary text-2xl max-2xl:lg border-b-2 border-primary'>Ayarlar</h2>

    {settings.slice(0,1).map((setting) => (
        <div key={setting._id} className='mt-8'>

        <h3 className='text-lg max-2xl:text-sm font-semibold mb-2 text-primary'>Kargo Ücreti</h3>
        <div className='flex items-center justify-center w-full gap-4'>
        <input onChange={(e) => setShippingWage(e.target.value)} placeholder={setting.shippingWage} type="number" className="h-10 w-full border-2 border-primary outline-none px-4 peer"/>
        <button onClick={() => handleShipping(setting._id)} className='button w-full'>Güncelle</button>
        </div>
        <h3 className='text-lg max-2xl:text-sm font-semibold my-2 text-primary'>Tasarım Ücreti</h3>
        <div className='flex items-center justify-center w-full gap-4'>
        <input onChange={(e) => setDesignWage(e.target.value)} placeholder={setting.designWage} type="number" className="h-10 w-full border-2 border-primary outline-none px-4 peer"/>
        <button onClick={() => handleDesign(setting._id)} className='button w-full'>Güncelle</button>
        </div>
        <h3 className='text-lg max-2xl:text-sm font-semibold my-2 text-primary'>Ücretsiz Kargo Min. Tutarı</h3>
        <div className='flex items-center justify-center w-full gap-4'>
        <input onChange={(e) => setFreeShipping(e.target.value)}  placeholder={setting.freeShipping} type="number" className="h-10 w-full border-2 border-primary outline-none px-4 peer"/>
        <button onClick={() => handleFreeShipping(setting._id)} className='button w-full'>Güncelle</button>
        </div>
        <h3 className='text-lg max-2xl:text-sm font-semibold my-2 text-primary'>Min. Sepet Tutarı</h3>
        <div className='flex items-center justify-center w-full gap-4'>
        <input onChange={(e) => setMinwage(e.target.value)} placeholder={setting.minwage} type="number" className="h-10 w-full border-2 border-primary outline-none px-4 peer"/>
        <button onClick={() => handleMinwage(setting._id)} className='button w-full'>Güncelle</button>
        </div>
        <h3 className='text-lg max-2xl:text-sm font-semibold my-2 text-primary'>Adres Bilgileri</h3>
        <div className='flex items-center justify-center w-full gap-4'>
        <input onChange={(e) => setAddres(e.target.value)} placeholder={setting.address} type="text" className="h-10 w-full border-2 border-primary outline-none px-4 peer"/>
        <button onClick={() => handleAddres(setting._id)} className='button w-full'>Güncelle</button>
        </div>
        <h3 className='text-lg max-2xl:text-sm font-semibold my-2 text-primary'>Telefon Numarası</h3>
        <div className='flex items-center justify-center w-full gap-4'>
        <input onChange={(e) => setPhone(e.target.value)} placeholder={setting.phone} type="text" className="h-10 w-full border-2 border-primary outline-none px-4 peer"/>
        <button onClick={() => handlePhone(setting._id)} className='button w-full'>Güncelle</button>
        </div>
        <h3 className='text-lg max-2xl:text-sm font-semibold my-2 text-primary'>Email</h3>
        <div className='flex items-center justify-center w-full gap-4'>
        <input onChange={(e) => SetEmail(e.target.value)} placeholder={setting.email} type="email" className="h-10 w-full border-2 border-primary outline-none px-4 peer"/>
        <button onClick={() => handleEmail(setting._id)} className='button w-full'>Güncelle</button>
        </div>

    </div>
    ))}
        
    </section>
  )
}

export default Settings