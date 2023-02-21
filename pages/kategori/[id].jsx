/* eslint-disable react-hooks/rules-of-hooks */
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Product from '@/components/Product/Product'
import axios from 'axios'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import OutsideClickHandler from 'react-outside-click-handler'

const index = ({category, productList}) => {

  const [showCategories, setShowCategories] = useState(false)
  const [showAll, setShowAll] = useState(true)
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setFilter(productList.filter((product) => product.subcategory === category.subtitle[active].toLowerCase() && category.title.toLowerCase() === product.category ))
  }, [productList, active, category.subtitle, category.title])

  const allProducts = productList.filter((product) => product.category === category.title.toLowerCase())

  return (
    <React.Fragment>
        <Head>
      <title>{category.title}</title>
      </Head>
        <Header/>
        <section className='min-h-[calc(100vh_-_409px)] w-[90%] mx-auto flex flex-col my-4 items-center justify-start py-10 gap-4 relative'>

        <h2 className='text-center font-bold text-2xl max-2xl:text-lg uppercase text-primary border-b-2 border-primary p-2 mb-4 w-full'>{category.title}</h2>

        <div className='w-full flex gap-8'>
        <div className='w-[20%] flex items-center justify-start flex-col p-2 gap-2 max-md:hidden'>
            <h3 className='font-bold uppercase text-lg text-primary border-b-2 border-primary p-2 mb-2'>Alt Kategoriler</h3>
            <button onClick={() => setShowAll(true)} className={`${showAll ? "bg-primary text-white" : "text-black bg-slate-200"} max-2xl:text-sm hover:text-white font-semibold uppercase text-center duration-300 w-full p-2 group hover:bg-primary cursor-pointer shadow-lg`}>Hepsi</button>
            {category.subtitle.map((category ,index) => (
                  <button key={index} onClick={() => {setActive(index), setShowAll(false)}} 
                  className={`${index === active && !showAll ? "bg-primary text-white" : "text-black bg-slate-200"}  max-2xl:text-sm hover:text-white font-semibold uppercase text-center duration-300 w-full p-2 group 
                  hover:bg-primary cursor-pointer shadow-lg`}>{category}</button>
                ))}
          </div>

          <div onClick={() => setShowCategories(!showCategories)} className='fixed bottom-6 cursor-pointer left-6 bg-primary px-4 py-2 z-10 shadow-md group hover:bg-black duration-300 hidden max-md:flex rounded-full'>
            <h4 className='font-semibold uppercase text-white'>Kategoriler</h4>
          </div>

          {/* Modal Categories */}
          <OutsideClickHandler onOutsideClick={()=> setShowCategories(false)}>
          <div className={`fixed top-0 ${showCategories ? "left-0" : "left-[-100%]"} duration-500 h-full w-[300px] bg-white z-30 p-4`}>
          <button onClick={() => {setShowAll(true), setShowCategories(false)}} className={`${showAll ? "bg-primary text-white" : "text-black bg-slate-200"} mt-12 max-2xl:text-sm hover:text-white font-semibold uppercase text-center duration-300 w-full p-2 group hover:bg-primary cursor-pointer shadow-lg`}>Hepsi</button>
          {category.subtitle.map((category ,index) => (
                  <button key={index} onClick={() => {setActive(index), setShowCategories(false), setShowAll(false)}} 
                  className={`${index === active && !showAll ? "bg-primary text-white" : "text-black bg-slate-200"}  max-2xl:text-sm hover:text-white font-semibold uppercase text-center duration-300 w-full p-2 group 
                  hover:bg-primary cursor-pointer shadow-lg my-2`}>{category}</button>
                ))}

            <button onClick={() => setShowCategories(false)} className='bg-primary p-2 rounded-xl absolute top-2 right-2'><AiOutlineClose className='text-white' size={20}/></button>
          </div>
          </OutsideClickHandler>
          <div className={`fixed top-0 ${showCategories ? "right-0" : "right-[-100%]"} duration-500 h-full w-full bg-black/75 z-20`}>
          </div>

          {showAll && <div className='w-full grid grid-cols-3 gap-4  max-sm:grid-cols-1 max-md:grid-cols-2'>
          {allProducts.length > 0 && allProducts.map((product) => product.isActive === true && <Product key={product._id} product={product}/>)}
          </div>}

          {!showAll && 
          <div className='w-full grid grid-cols-3 gap-4  max-sm:grid-cols-1 max-md:grid-cols-2'>
          {filter.length > 0 && filter.map((product) => product.isActive === true && <Product key={product._id} product={product}/>)}
          </div>}
        </div>
        

        </section>
        <Footer/>
    </React.Fragment>
  )
}

export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories/${params.id}`)
    const products = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`)
  
    return {
      props: {
        category: res.data ? res.data : null,
        productList: products.data ? products.data : null,
      },
    }
  }


export default index