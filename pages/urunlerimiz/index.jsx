/* eslint-disable react-hooks/rules-of-hooks */
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Product from '@/components/Product/Product'
import axios from 'axios'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
import OutsideClickHandler from 'react-outside-click-handler';

const index = ({productList, categoryList}) => {
  const [showCategories, setShowCategories] = useState(false)
  const [showAll, setShowAll] = useState(true)
  const [active, setActive] = useState(0);
  const [subactive, setSubActive] = useState(0);
  const [productLimit, setProductLimit] = useState(3);
  const [filter, setFilter] = useState([]);
  const [subcategory, setSubcategory] = useState(false);
  const [subproducts, setSubProducts] = useState([]);

  useEffect(() => {
    setFilter(productList.filter((product) => product.category === categoryList[active].title.toLowerCase()))
  }, [productList, active, categoryList])

  useEffect(() => {
    setSubProducts(productList.filter((product) => product.subcategory === categoryList[active]?.subtitle[subactive]?.toLowerCase() && product.category === categoryList[active]?.title.toLowerCase()))
  }, [productList, subactive, categoryList, active])

  return (
    <div>
      <Head>
      <title>Ürünlerimiz</title>
      </Head>
        <Header/>
        <section className='min-h-[calc(100vh_-_349px)] w-[90%] mx-auto flex items-start justify-center my-16 gap-4 relative'>
          <div className='w-[20%] flex items-center justify-start flex-col p-2 gap-4 max-md:hidden'>
            <h3 className='font-bold uppercase text-lg max-2xl:text-sm text-center text-primary border-b-2 border-primary p-2 mb-2'>Kategoriler</h3>
            <button onClick={() => {setShowAll(true), setSubcategory(false)}} className={`${showAll ? "bg-primary text-white" : "text-black bg-slate-200"} max-2xl:text-sm hover:text-white font-semibold uppercase text-center duration-300 w-full p-2 group hover:bg-primary cursor-pointer shadow-lg`}>Hepsi</button>
            {categoryList.map((category ,index) => (
              <div className='w-full group duration-300' key={category._id}>
                  <button  onClick={() => {setActive(index), setProductLimit(3), setShowAll(false), setSubcategory(false)}} 
                  className={`${index === active && !showAll ? "bg-primary text-white" : "text-black bg-slate-200"}  max-2xl:text-sm hover:text-white font-semibold uppercase text-center duration-300 w-full p-2 group 
                  hover:bg-primary cursor-pointer shadow-lg`}>{category.title}</button>

                  { category.subtitle.map((c, i) => (
                    <button key={i} onClick={() => {setSubActive(i), setActive(index), setSubcategory(true), setShowAll(false)}}  className='bg-slate-300 text-black
                       max-2xl:text-xs border hover:text-white font-semibold uppercase text-center transition-all duration-300 w-full p-2 group 
                    hover:bg-primary cursor-pointer shadow-lg flex text-sm'>{c}</button> 
                  ))}
              </div>
                ))}
          </div>

          <div onClick={() => setShowCategories(!showCategories)} className='fixed bottom-6 cursor-pointer left-6 bg-primary px-4 py-2 z-10 shadow-md group hover:bg-black duration-300 hidden max-md:flex rounded-full'>
            <h4 className='font-semibold uppercase text-white'>Kategoriler</h4>
          </div>

          {/* Modal Categories */}
          <OutsideClickHandler onOutsideClick={()=> setShowCategories(false)}>
          <div className={`fixed top-0 ${showCategories ? "left-0" : "left-[-100%]"} duration-500 h-full w-[300px] bg-white z-30 p-4`}>
          <button onClick={() => {setShowAll(true), setShowCategories(false), setSubcategory(false)}} className={`${showAll ? "bg-primary text-white" : "text-black bg-slate-200"} mt-12 max-2xl:text-sm hover:text-white font-semibold uppercase text-center duration-300 w-full p-2 group hover:bg-primary cursor-pointer shadow-lg`}>Hepsi</button>
          {categoryList.map((category ,index) => (
              <div className='w-full group duration-300' key={category._id}>
                  <button  onClick={() => {setActive(index), setProductLimit(3), setShowAll(false), setSubcategory(false), setShowCategories(false)}} 
                  className={`${index === active && !showAll ? "bg-primary text-white" : "text-black bg-slate-200"}  max-2xl:text-sm hover:text-white font-semibold uppercase text-center duration-300 w-full p-2 group 
                  hover:bg-primary cursor-pointer shadow-lg`}>{category.title}</button>

                  { category.subtitle.map((c, i) => (
                    <button key={i} onClick={() => {setSubActive(i), setActive(index), setSubcategory(true), setShowAll(false), setShowCategories(false)}}  className='bg-slate-300 text-black
                       max-2xl:text-xs border hover:text-white font-semibold uppercase text-center transition-all duration-300 w-full p-2 group 
                    hover:bg-primary cursor-pointer shadow-lg flex text-sm'>{c}</button> 
                  ))}
              </div>
                ))}

            <button onClick={() => setShowCategories(false)} className='bg-primary p-2 rounded-xl absolute top-2 right-2'><AiOutlineClose className='text-white' size={20}/></button>
          </div>
          </OutsideClickHandler>
          <div className={`fixed top-0 ${showCategories ? "right-0" : "right-[-100%]"} duration-500 h-full w-full bg-black/75 z-20`}>
          </div>

          

          <div className='w-[80%] max-md:w-full'>
          <h2 className='text-center font-bold text-xl max-2xl:text-lg uppercase text-primary border-b-2 border-primary p-2 mb-2'>Ürünlerimiz</h2>
          {showAll && <div className='w-full grid grid-cols-3 gap-4  max-sm:grid-cols-1 max-md:grid-cols-2'>
          {productList.length > 0 && productList.map((product) => product.isActive === true && <Product key={product._id} product={product}/>)}
          </div>}

          {showAll ===false && subcategory === false &&
          <div className='w-full grid grid-cols-3 gap-4  max-sm:grid-cols-1 max-md:grid-cols-2'>
          {filter.length > 0 && filter.slice(0, productLimit).map((product) => product.isActive === true && <Product key={product._id} product={product}/>)}
          </div>}

          {showAll ===false && subcategory === true &&
          <div className='w-full grid grid-cols-3 gap-4  max-sm:grid-cols-1 max-md:grid-cols-2'>
          {subproducts.length > 0 && subproducts.map((product) => product.isActive === true && <Product key={product._id} product={product}/>)}
          </div>}

          {showAll === false && subcategory === false && <div className='w-full mt-10 flex items-center justify-center'>
          {filter.length > 3 && <button onClick={() => setProductLimit(productLimit + 3)} className='button'>Daha Falza Gör</button>}
          </div>}

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