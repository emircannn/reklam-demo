/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { useEffect, useState } from 'react'
import {ImSearch, ImCart} from 'react-icons/im'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import {AiOutlineClose, AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import Link from 'next/link'
import { BsFillTrashFill } from 'react-icons/bs'
import OutsideClickHandler from 'react-outside-click-handler';
import Search from './UI/Search'
import { useSession } from 'next-auth/react'
import Cart from './UI/Cart'
import { useSelector } from 'react-redux'

const Header = () => {

  const [menu, setMenu] = useState(false)
  const [cart, setCart] = useState(false)
  const [search, setSearch] = useState(false)
  const {data: session} = useSession()

  const cartLength = useSelector((state) => state.cartSlice.products.length)

  return (
    <header className='border-b border-black/10 rounded-b-2xl sticky top-0 z-20 bg-white shadow-lg'>
      <div className='w-[90%] mx-auto py-6 flex items-center justify-between'>
        <Link href='/'>
        <div className='w-[150px] cursor-pointer hover:scale-105 duration-300 bg-black rounded-2xl px-4 py-2'>
          {/* <Image alt='logo' src="/images/logo.png" width={500} height={500} priority/> */}
          <h2 className='uppercase font-bold tracking-wider text-white text-xl text-center'>Logo</h2>
        </div>
        </Link>

        <nav className='max-md:hidden'>
          <ul className='flex items-center justify-center gap-4 font-medium'>
            <Link href='/'>
            <li className='cursor-pointer hover:text-primary max-2xl:text-base duration-300'>Ana Sayfa</li>
            </Link>
            <Link href='/urunlerimiz'>
            <li className='cursor-pointer hover:text-primary max-2xl:text-base duration-300'>Ürünlerimiz</li>
            </Link>
            <Link href='/hakkimizda'>
            <li className='cursor-pointer hover:text-primary max-2xl:text-base duration-300'>Hakkımızda</li>
            </Link>
            <Link href='/iletisim'>
            <li className='cursor-pointer hover:text-primary max-2xl:text-base duration-300'>İletişim</li>
            </Link>
            <button onClick={() => setSearch(true)} className='cursor-pointer hover:text-primary duration-300'><ImSearch/></button>
          </ul>
        </nav>

        <div className='flex items-center justify-center gap-8 max-md:gap-4'>
          <button onClick={()=> setCart(true)} className='cursor-pointer hover:text-primary duration-300 relative'><ImCart/> 
          <span className='absolute top-[-14px] right-[-14px] bg-primary text-white font-bold text-xs rounded-full w-5 h-5 flex items-center justify-center'>{cartLength}</span>
          </button>
          <button onClick={() => setSearch(true)} className='cursor-pointer hover:text-primary duration-300 hidden max-md:flex'><ImSearch/></button>
          <Link href='/oturum/giris'>
          <button className='button max-md:hidden'>{session ? "Profil" : 'Giriş Yap'}</button>
          </Link>
          <button onClick={()=> setMenu(true)} className='button hidden max-md:flex'><HiOutlineMenuAlt3 size={20}/></button>
        </div>
      </div>

      {/* Modal Menu */}

      <div className={`fixed top-0 ${menu ? 'left-0' : "left-[-100%]"} duration-300 w-full h-full bg-black/70 z-20`}></div>
      <OutsideClickHandler onOutsideClick={()=> setMenu(false)}>
      <div className={`fixed top-0 ${menu ? 'right-0' : "right-[-100%]"} duration-500 w-[300px] h-full bg-white z-30`}>

      <div className='flex flex-col items-center w-full p-2 relative'>
      <div className='w-full flex items-center justify-center cursor-pointer bg-black py-4'>
          {/* <Image alt='logo' src="/images/logo.png" className='w-[120px]' width={500} height={500} priority/> */}
          <h2 className='uppercase font-bold tracking-wider text-white text-xl text-center'>Logo</h2>
      </div>

      <nav className='mt-32'>
          <ul className='flex items-center flex-col justify-center gap-8 text-lg'>
            <Link href='/'>
            <li className='cursor-pointer uppercase font-bold hover:text-primary max-2xl:text-sm duration-300'>Ana Sayfa</li>
            </Link>
            <Link href='/urunlerimiz'>
            <li className='cursor-pointer uppercase font-bold hover:text-primary max-2xl:text-sm duration-300'>Ürünlerimiz</li>
            </Link>
            <Link href='/hakkimizda'>
            <li className='cursor-pointer uppercase font-bold hover:text-primary max-2xl:text-sm duration-300'>Hakkımızda</li>
            </Link>
            <Link href='/iletisim'>
            <li className='cursor-pointer uppercase font-bold hover:text-primary max-2xl:text-sm duration-300'>İletişim</li>
            </Link>
          </ul>
        </nav>

        <Link href='/oturum/giris'>
        <button className='button mt-12'>Giriş Yap</button>
        </Link>
        
        <button onClick={() => setMenu(false)} className='bg-primary p-2 absolute top-2 right-2'><AiOutlineClose className='text-white' size={20}/></button>
      </div>
      </div>
      </OutsideClickHandler>

      {/* Modal Cart */}

     {cart && <Cart cart={cart} setCart={setCart}/>}

      {search && <Search setSearch={setSearch}/>}
    </header>
  )
}

export default Header