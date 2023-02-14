import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hesap from '@/components/profil/Hesap';
import axios from 'axios'
import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { AiFillHome } from 'react-icons/ai';
import { BsBoxArrowRight } from 'react-icons/bs';
import { GiCardboardBoxClosed } from 'react-icons/gi';
import { toast } from 'react-toastify';

const Index = ({user}) => {
    const { data: session } = useSession();
    const [tabs, setTabs] = useState(0);
    const { push } = useRouter();
    
  
    const handleSignOut = () => {
      if (confirm("Çıkış Yapmak İstediğinize Emin Misiniz?")) {
        signOut({ redirect: false });
        push("/oturum/giris");
        toast.success("Çıkış İşlemi Başarılı!")
      }
    };

    useEffect(() => {
        if(!session) {
            push("/oturum/giris");
        }
    }, [session, push])

  return (
    <React.Fragment>
        <Head>
        <title>{user.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header/>
        <section className='min-h-[calc(100vh_-_405px)] flex max-md:flex-col'>

        <div className='border lg:w-80 w-100 flex-shrink-0'>
        <div className='flex flex-col px-10 py-5 items-center gap-2 border border-b-0'>
        <Image priority className='w-[120px]' alt='' src="/images/admin.png" width={500} height={500}/>
            <span className='font-bold text-2xl uppercase'>{user.name}</span>
        </div>
        <ul>
                <li onClick={()=> setTabs(0)} className={`border font-semibold justify-center w-full p-3 flex gap-3 items-center cursor-pointer 
                hover:bg-primary hover:text-white duration-300 ${tabs === 0 && "bg-primary text-white"}`}>
                    <AiFillHome size={20}/>
                    <button>Hesap</button>
                </li>
                <li onClick={()=> setTabs(2)} className={`border font-semibold justify-center w-full p-3 flex gap-3 items-center cursor-pointer 
                hover:bg-primary hover:text-white duration-300 ${tabs === 1 && "bg-primary text-white"}`}>
                    <GiCardboardBoxClosed size={20}/>
                    <button>Siparişlerim</button>
                </li>
                <li onClick={handleSignOut} className={`border font-semibold justify-center w-full p-3 flex gap-3 items-center cursor-pointer 
                hover:bg-primary hover:text-white duration-300`}>
                    <BsBoxArrowRight size={20}/>
                    <button>Çıkış</button>
                </li>
            </ul>

        </div>
            {tabs === 0 && <Hesap user={user}/>}
        </section>
        <Footer/>
    </React.Fragment>
  )
}


export async function getServerSideProps({params}) {
    const user = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/${params.id}`)

    return {
        props: {
            user: user ? user.data : null
        }
    }
}

export default Index