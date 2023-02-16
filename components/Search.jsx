import axios from 'axios';
import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import OutsideClickHandler from 'react-outside-click-handler';
import { PropagateLoader } from 'react-spinners';

const Search = ({setSearch}) => {
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const {push} = useRouter();
    
    useEffect(() => {
        const getProducts = async () => {
          try {
            const res = await axios.get(
              `${process.env.NEXT_PUBLIC_API_URL}/products`
            );
            setProducts(res.data);
            setFiltered(res.data.slice(0, 5));
          } catch (err) {
            console.log(err);
          }
        };
        setTimeout(() => {
          getProducts();
        }, 2000);
      }, []);

      const handleSearch = (e) => {
        const searchFilter = products
          .filter((product) =>
            product.title.toLowerCase().includes(e.target.value.toLowerCase()) || product.category.toLowerCase().includes(e.target.value.toLowerCase())
          )
          .slice(0, 5);
        setFiltered(searchFilter);
      };
  return (
    <div className='fixed top-0 left-0 bg-black/75 w-full h-full flex items-center justify-center p-28 max-md:p-4'>
    <OutsideClickHandler onOutsideClick={()=> setSearch(false)}>
    <div className='bg-white min-h-[400px] min-w-[600px] max-md:min-w-[100px] max-md:min-h-[200px] p-10 relative flex items-center justify-between flex-col'>
        <div className='w-full flex justify-between items-center border-b-2 pb-2 border-slate-400'>
        <h4 className='font-bold text-primary uppercase text-2xl'>Arama</h4>
        <span onClick={() => setSearch(false)} className='hover:rotate-180 cursor-pointer duration-300'><AiOutlineClose size={25}/></span>
        </div>

        <input placeholder='Arama' onChange={handleSearch} type='text' className='h-12 w-full border-2 border-slate-400 focus:border-primary outline-none px-4 peer my-6'/>

        {products.length > 0 ? <div className='h-full w-full grid grid-cols-5 gap-4 max-lg:grid-cols-3 max-xl:grid-cols-4 max-md:hidden'>
                {filtered.length > 0 ? filtered.map((product) =>(
                    <div onClick={async() => {await push(`/urun/${product._id}`), setSearch(false)}} key={product._id} className='flex items-center justify-start gap-4 flex-col'>
                    <div className='h-[200px] w-full rounded-2xl overflow-hidden'>
                    <Image alt={product.title} src={`/uploads/${product.img[0]}`} priority width={500} height={500} className='w-full h-full hover:scale-110 duration-300 cursor-pointer rounded-2xl object-cover'/>
                    </div>
                    <h3 className='font-bold uppercase text-primary text-lg tracking-wider'>{product.title}</h3>
                </div>
                )) : <span className='text-center font-medium text-primary mt-2'>Hiç Ürün Bulunamadı!</span>}
        </div> : <PropagateLoader className='mx-auto max-md:hidden' color='#814cda'/>}

        {products.length > 0 ? <div className='hidden max-md:grid grid-cols-1 w-full h-full gap-4'>
                {filtered.length > 0 ? filtered.map((product) => (
            <div onClick={async() => {await push(`/urun/${product._id}`), setSearch(false)}} key={product._id} className='flex items-center justify-between gap-2 bg-slate-200 p-2 rounded-2xl w-[450px] max-sm:w-[270px]'>
                    <div className='w-1/3 h-[100px] max-sm:h-[75px] rounded-2xl overflow-hidden'>
                    <Image alt={product.title} src={`/uploads/${product.img[0]}`} width={500} height={500} className='w-full h-full object-cover'/>
                </div>
                <h3 className='w-2/3 font-semibold text-xs'>{product.title}</h3>
            </div>
                )): <span className='text-center font-medium text-primary mt-2'>Hiç Ürün Bulunamadı!</span>}
        </div> : <PropagateLoader className='mx-auto !hidden !max-md:flex' color='#814cda'/>}
    </div>
    </OutsideClickHandler>
    </div>
  )
}

export default Search