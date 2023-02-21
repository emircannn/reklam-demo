/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import Head from 'next/head'
import React, { useState } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { toast } from 'react-toastify'

const index = ({category}) => {

    const [subtitle, setSubTitle] = useState(category.subtitle)
    const [subtitleInput, setSubTitleInput] = useState("")

    const handleAdd = async(id) => {
          if (subtitleInput !== "") {
            setSubTitle((prev) => [...prev, subtitleInput]);
            setSubTitleInput("")
          }else{
            toast.error("Bir Şeyler Yazın!")
          }
      };

      

    const handleUpload = async(id) => {
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`, {subtitle: subtitle},)

            if (res.status === 200) {
                toast.success("Alt Kategoriler Başarıyla Güncellendi", {autoClose: 1000});
            }
        } catch (error) {
            console.log(error)
        }
    };

  return (
    <React.Fragment>
        <Head>
        <title>{category.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <section className='w-[90%] mx-auto p-16'>
            <h1 className='text-center font-semibold text-primary text-2xl max-2xl:text-lg uppercase border-b-2 border-primary'>{category.title}</h1>

            <div className='flex items-center justify-center w-full gap-4 mt-8'>
            <input type='text' value={subtitleInput} onChange={(e) => setSubTitleInput(e.target.value)} placeholder='Alt Kategori Ekle...' className="h-10 border-2 border-primary outline-none px-4 peer w-full"/>
            <button onClick={handleAdd} className='button'>Ekle</button>
            </div>

            <h2 className='mt-12 font-semibold text-primary text-xl max-2xl:text-base uppercase '>Alt Kategoriler</h2>
            <div className='mt-6 flex flex-col w-full gap-4'>
                {subtitle.length > 0 ? subtitle.map((sub, index) => (
                <div key={index} className='flex items-center justify-between border-b border-slate-400 w-full p-2'>
                    <span className='font-bold uppercase text-lg max-2xl:text-sm '>{sub}</span>
                    <BsFillTrashFill onClick={() => {if(confirm('Silmek İstediğinize Emin Misiniz?')){setSubTitle(subtitle.filter((_,i) => i !== index))}}} 
                    className='text-primary hover:text-black duration-300 cursor-pointer' size={20}/>
                </div>
                )) : <h3 className='font-medium'>Henüz Alt Kategori Eklemediniz</h3>}
            </div>

            {subtitle.length>0 && <button onClick={() => handleUpload(category._id)} className='button mt-4'>Yükle</button>}
        </section>
    </React.Fragment>
  )
}

export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories/${params.id}`)
  
    return {
      props: {
        category: res.data ? res.data : null,
      },
    }
  }


export default index
