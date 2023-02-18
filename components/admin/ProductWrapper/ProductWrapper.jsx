import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AiOutlinePoweroff, AiTwotoneEdit } from 'react-icons/ai'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { BsFillTrashFill } from 'react-icons/bs'
import { toast } from 'react-toastify'

const ProductWrapper = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`)
        setProducts(res?.data)
     } catch (err) {
        console.log(err);
      }
    }
      getProducts();
  }, [setProducts])

  const handleDelete = async (id) => {
    try {
      if (confirm("Bu Ürünü Silmek İstediğinize Emin Misiniz?")) {
        const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`)
        
        if(res.status === 200) {
          setProducts(products.filter((pro) => pro._id !== id));
          toast.success("Ürün Silme İşlemi Başarılı!");
        }
      }} catch (err) {
        console.log(err);
      }
    }

    //Ürün Aktifleştirme

    const handleActive = async (id) => {
      try {
        if (confirm("Ürünü Etkinleştirmek İstediğinize Emin Misiniz?")) {


          const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`, {isActive : true} )
          if (res.status === 200) {
            toast.success("Etkinleştirme İşlemi Başarılı!")
            /* setFiltered([res.data, ...filtered.filter((product) => product._id !== id)]) */
            setProducts([res.data, ...products.filter((product) => product._id !== id)])
          }
        }
      } catch (err) {
        console.log(err);
      }
    }

    const handleDeActive = async (id) => {
      try {
        if (confirm("Ürünü Etkisizleştirmek İstediğinize Emin Misiniz?")) {
          const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`, {isActive : false} )
          if (res.status === 200) {
            toast.success("Etkisizleştirme İşlemi Başarılı!")
            /* setFiltered([res.data, ...filtered.filter((product) => product._id !== id)]) */
            setProducts([res.data, ...products.filter((product) => product._id !== id)])
          }
        }
      } catch (err) {
        console.log(err);
      }
    }

    //Favori

    const handleFavori = async (id) => {
      try {
        if (confirm("Ürünü Etkisizleştirmek İstediğinize Emin Misiniz?")) {
          const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`, {favori : true} )
          if (res.status === 200) {
            toast.success("Etkisizleştirme İşlemi Başarılı!")
            /* setFiltered([res.data, ...filtered.filter((product) => product._id !== id)]) */
            setProducts([res.data, ...products.filter((product) => product._id !== id)])
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
    const handleDeFavori = async (id) => {
      try {
        if (confirm("Ürünü Etkisizleştirmek İstediğinize Emin Misiniz?")) {
          const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`, {favori : false} )
          if (res.status === 200) {
            toast.success("Etkisizleştirme İşlemi Başarılı!")
            /* setFiltered([res.data, ...filtered.filter((product) => product._id !== id)]) */
            setProducts([res.data, ...products.filter((product) => product._id !== id)])
          }
        }
      } catch (err) {
        console.log(err);
      }
    }



  return (
    <section className='w-full mx-auto'>

      <div className='grid grid-cols-3 place-content-center max-md:gap-4 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1'>
        
    {products.map((product) => (
      <div key={product._id} className={`w-full h-[400px] relative ${product.isActive === false && "opacity-50"} flex flex-col bg-gray-200 shadow-xl rounded-2xl`}>
      <div className='w-full h-[60%] rounded-2xl overflow-hidden relative cursor-pointer group'>
          <Image alt='' src={`/uploads/${product.img[0]}`} className='w-full h-full object-cover rounded-2xl group-hover:opacity-0 duration-500' priority width={1000} height={1000}/>
          <Image alt='' src={`/uploads/${product.img[1]}`} className='w-full h-full top-0 left-0 absolute object-cover rounded-2xl opacity-0 group-hover:opacity-100 duration-500' priority width={1000} height={1000}/>
          <span className='absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 gap-2 duration-500 flex items-center justify-center'>
              <button className='p-4 rounded-full bg-white flex items-center justify-center border border-primary hover:bg-primary hover:text-white duration-300'><AiTwotoneEdit size={22}/></button>
              <button onClick={() => handleDelete(product._id)} className='p-4 rounded-full bg-white flex items-center justify-center border border-primary hover:bg-primary hover:text-white duration-300'><BsFillTrashFill size={22}/></button>
              {product.isActive === false && <button onClick={() => handleActive(product._id)} className='p-4 rounded-full bg-white flex items-center justify-center border border-primary hover:bg-primary hover:text-white duration-300'><AiOutlinePoweroff size={22}/></button>}
              {product.isActive === true && <button onClick={() => handleDeActive(product._id)} className='p-4 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-primary duration-300'><AiOutlinePoweroff size={22}/></button>}
              {product.favori === true && <button onClick={() => handleDeFavori(product._id)} className='p-4 rounded-full bg-white text-red-500 flex items-center border border-red-500 justify-center hover:bg-red-500 hover:text-white duration-300'><MdFavorite size={22}/></button>}
              {product.favori === false && <button onClick={() => handleFavori(product._id)} className='p-4 rounded-full bg-white flex items-center justify-center border border-primary hover:bg-primary hover:text-white duration-300'><MdFavoriteBorder size={22}/></button>}
          </span>
      </div>
      <div className='w-full h-[40%] flex items-center justify-center flex-col gap-2 p-4 rounded-b-2xl'>
          <h2 className='font-bold text-lg max-2xl:text-base uppercase'>{product.title}</h2>
          <p className='whitespace-nowrap text-ellipsis max-2xl:text-sm overflow-hidden w-full text-black/50'>{product.desc}</p>
          {product.price ? <span className='font-bold max-2xl:text-sm'>{(product.properties[0]?.price)?.toFixed(2)}₺</span> : 
          <span className='font-medium max-2xl:text-sm'>M² Fiyatı: <span className='font-bold'>{(product.properties[0]?.price)?.toFixed(2)}₺</span></span>}
      </div>

      {product.favori && <span className='absolute top-4 right-4 bg-primary text-white text-xs p-2 font-semibold animate-pulse'>Öne Çıkan</span>}
  </div>
    ))}

      </div>
    </section>
  )
}

export default ProductWrapper