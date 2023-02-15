/* eslint-disable react-hooks/rules-of-hooks */
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Product from '@/components/Product/Product'
import axios from 'axios'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import OutsideClickHandler from 'react-outside-click-handler';

const index = ({productList, categoryList}) => {
  const [showCategories, setShowCategories] = useState(false)
  const [active, setActive] = useState(0);
  const [productLimit, setProductLimit] = useState(3);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setFilter(productList.filter((product) => product.category ===
    categoryList[active].title.toLowerCase()))
  }, [productList, active, categoryList])

  return (
    <div>
      <Head>
      <title>Ürünlerimiz</title>
      </Head>
        <Header/>
        <section className='min-h-[calc(100vh_-_349px)] w-[90%] mx-auto flex items-start justify-center my-16 gap-4 relative'>
          <div className='w-[20%] flex items-center justify-start flex-col p-2 gap-2 max-md:hidden'>
            <h3 className='font-bold uppercase text-lg text-primary border-b-2 border-primary p-2 mb-2'>Kategoriler</h3>
            {categoryList.map((category ,index) => (
                  <button key={category._id} onClick={() => {setActive(index), setProductLimit(3)}} 
                  className={`${active && "bg-primary text-white"} text-black hover:text-white font-bold uppercase text-center duration-300 bg-slate-200 w-full p-2 group 
                  hover:bg-primary cursor-pointer shadow-lg`}>{category.title}</button>
                ))}
          </div>

          <div onClick={() => setShowCategories(!showCategories)} className='fixed bottom-6 cursor-pointer left-6 bg-primary px-4 py-2 z-10 shadow-md group hover:bg-black duration-300 hidden max-md:flex rounded-full'>
            <h4 className='font-semibold uppercase text-white'>Kategoriler</h4>
          </div>

          {/* Modal Categories */}
          <OutsideClickHandler onOutsideClick={()=> setShowCategories(false)}>
          <div className={`fixed top-0 ${showCategories ? "left-0" : "left-[-100%]"} duration-500 h-full w-[300px] bg-white z-30 p-4`}>
          <h3 className='font-bold uppercase text-lg text-primary border-b-2 border-primary text-center p-2 mb-2'>Kategoriler</h3>
          {categoryList.map((category ,index) => (
                  <button key={category._id} onClick={() => {setActive(index), setProductLimit(3), setShowCategories(false)}} 
                  className={`${active && "bg-primary text-white"} text-black hover:text-white font-bold uppercase text-center duration-300 bg-slate-200 w-full p-2 group 
                  hover:bg-primary cursor-pointer shadow-lg`}>{category.title}</button>
                ))}

            <button onClick={() => setShowCategories(false)} className='bg-primary p-2 rounded-xl absolute top-2 right-2'><AiOutlineClose className='text-white' size={20}/></button>
          </div>
          </OutsideClickHandler>
          <div className={`fixed top-0 ${showCategories ? "right-0" : "right-[-100%]"} duration-500 h-full w-full bg-black/75 z-20`}>
          </div>

          

          <div className='w-[80%] max-md:w-full'>
          <h2 className='text-center font-bold text-xl uppercase text-primary border-b-2 border-primary p-2 mb-2'>Ürünlerimiz</h2>
          <div className='w-full grid grid-cols-3 gap-4  max-sm:grid-cols-1 max-md:grid-cols-2'>
          {filter.length > 0 && filter.slice(0, productLimit).map((product) => product.isActive === true && <Product key={product._id} product={product}/>)}
          </div>

          <div className='w-full mt-10 flex items-center justify-center'>
          {filter.length > 3 && <button onClick={() => setProductLimit(productLimit + 3)} className='button'>Daha Falza Gör</button>}
          </div>

          </div>
        </section>
        <Footer/>
    </div>
  )
}

export const getServerSideProps = async () => {
  
  const category = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
  const product = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`)

  return {
    props: {
      categoryList: category.data ? category.data : [],
      productList: product.data ? product.data : []
    }
  }
} 

export default index