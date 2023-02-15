import Categories from '@/components/Categories'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ProductWrapper from '@/components/Product/ProductWrapper'
import Seo from '@/components/Seo'
import React from 'react'
import Header from '../../components/Header'

const Home = ({categoryList, productList}) => {
  return (
    <React.Fragment>
        <Header/>
        <main>
        <Hero/>
        <Categories categoryList={categoryList}/>
        <ProductWrapper productList={productList}/>
        <Seo/>
        </main>
        <Footer/>
    </React.Fragment>
  )
}

export default Home