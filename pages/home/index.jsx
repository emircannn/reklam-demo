import Categories from '@/components/Categories'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ProductWrapper from '@/components/Product/ProductWrapper'
import Seo from '@/components/Seo'
import React from 'react'
import Header from '../../components/Header'

const Home = () => {
  return (
    <>
        <Header/>
        <main>
        <Hero/>
        <Categories/>
        <Seo/>
        <ProductWrapper/>
        </main>
        <Footer/>
    </>
  )
}

export default Home