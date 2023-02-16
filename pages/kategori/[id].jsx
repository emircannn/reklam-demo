/* eslint-disable react-hooks/rules-of-hooks */
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Product from '@/components/Product/Product'
import axios from 'axios'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

const index = ({category, products}) => {

  const [filter, setFilter] = useState([])

  useEffect(() => {
    setFilter(products.filter((product) => product.category.toLowerCase() === category.title.toLowerCase()))
  }, [products, category])
  

  return (
    <React.Fragment>
        <Head>
      <title>Ürünlerimiz</title>
      </Head>
        <Header/>
        <section className='min-h-[calc(100vh_-_409px)] w-[90%] mx-auto flex flex-col items-center justify-start py-10 gap-4 relative'>

        <h2 className='text-center font-bold text-2xl max-2xl:text-lg uppercase text-primary border-b-2 border-primary p-2 mb-4 w-full'>{category.title}</h2>

        <div className='w-full grid grid-cols-4 gap-4  max-sm:grid-cols-1 max-md:grid-cols-2'>
        {filter.length > 0 && filter.map((product) => product.isActive === true && <Product key={product._id} product={product}/>)}
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
        products: products.data ? products.data : null,
      },
    }
  }


export default index