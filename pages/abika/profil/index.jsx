import Image from 'next/image'
import {BiCategory, BiSupport} from 'react-icons/bi'
import {RxExit} from 'react-icons/rx'
import { useState } from 'react'
import Head from "next/head";
import axios from 'axios'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { FaBox } from 'react-icons/fa'
import { FiClipboard } from 'react-icons/fi'
import Product from '@/components/admin/Product';
import Categories from '@/components/admin/Categories';


const Profil = () => {

    const {push} = useRouter()

    const [tab, setTab] = useState(0)

    const signOutAdmin = async () => {
        if (confirm("Çıkış Yapmak İstediğinize Emin Misiniz?")) {
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin`)

            if(res.status === 200) {
                push("/abika")
                toast.success("Çıkış İşlemi Başarılı!");
            }

        } catch (err) {
            console.log(err)
        }
    }
}

  return (

    <main className='min-h-screen flex max-md:flex-col'>
        <div className='w-[20%] max-lg:w-[30%] max-md:w-full flex flex-col items-center justify-start md:border-x border-primary/25'>
        <Head>
        <title>Admin Profil</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
            <div className='w-full flex items-center justify-center flex-col mt-16'>
            <Image priority className='w-[120px]' alt='' src="/images/admin.png" width={500} height={500}/>
            <span className='font-bold text-2xl uppercase'>Admin</span>
            </div>

            <ul className='flex items-center justify-center flex-col w-full mt-8'>
                <li onClick={() => setTab(0)} className={`bg-primary text-white w-full items-center justify-center flex p-2 select-none gap-2 cursor-pointer border-white border-y hover:bg-black duration-300 ${tab === 0 && "bg-dark"}`}>
                    <FiClipboard size={20}/>
                    <button className='uppercase font-medium text-lg'>Ürünler</button>
                    </li>
                <li onClick={() => setTab(1)} className={`bg-primary text-white w-full items-center justify-center flex p-2 select-none gap-2 cursor-pointer border-white border-y hover:bg-black duration-300 ${tab === 1 && "bg-black"}`}>
                    <BiCategory size={20}/>
                    <button className='uppercase font-medium text-lg'>Kategoriler</button>
                    </li>
                <li onClick={() => setTab(2)} className={`bg-primary text-white w-full items-center justify-center flex p-2 select-none gap-2 cursor-pointer border-white border-y hover:bg-black duration-300 ${tab === 2 && "bg-black"}`}>
                    <FaBox size={20}/>
                    <button className='uppercase font-medium text-lg'>Siparişler</button>
                    </li>
                <li onClick={signOutAdmin} className={`bg-primary text-white w-full items-center justify-center flex p-2 select-none gap-2 cursor-pointer border-white border-y hover:bg-black duration-300 ${tab === 6 && "bg-black"}`}>
                    <RxExit size={20}/>
                    <button className='uppercase font-medium text-lg'>Çıkış</button>
                  </li>
            </ul>
        </div>

        <div className='w-[80%] max-md:w-full max-lg:w-[70%]'>
            {tab === 0 && <Product/>}
            {tab === 1 && <Categories/>}
            
        </div>

    </main>
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
export default Profil