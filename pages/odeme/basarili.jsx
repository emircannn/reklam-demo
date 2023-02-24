/* eslint-disable react-hooks/rules-of-hooks */
import { useSession } from 'next-auth/react';
import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const basarili = () => {

    const { data: session } = useSession();
    const { push } = useRouter();

    useEffect(() => {
        if(session ===null) {
            push("/")
        }
    }, [session, push])
  return (
    <section className='w-full h-screen flex items-center justify-center flex-col gap-4'>
        <h1 className='text-primary font-semibold uppercase text-xl text-center max-2xl:text-lg tracking-widest'>Siparişiniz Başarıyla oluştutuldu.</h1>
        <h1 className='text-primary font-semibold uppercase text-xl text-center max-2xl:text-lg tracking-widest'>Siparişlerinize, Profilinizden ulaşabilirsiniz.</h1>
        <div className='w-full h-1/2'>
        <Image alt='' src='/images/order.gif' width={2000} height={2000} className='object-contain w-full h-full'/>
        </div>

        <button onClick={() => push('/')} className='button !uppercase !2xl:text-xl !max-2xl:text-sm'>Ana Sayfaya Dön</button>
    </section>
  )
}

export default basarili