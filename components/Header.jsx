/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { useState } from 'react'
import {ImSearch, ImCart} from 'react-icons/im'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import {AiOutlineClose, AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import Link from 'next/link'
import { BsFillTrashFill } from 'react-icons/bs'
import OutsideClickHandler from 'react-outside-click-handler';
import Search from './Search'
import { useSession } from 'next-auth/react'

const Header = () => {

  const [menu, setMenu] = useState(false)
  const [cart, setCart] = useState(false)
  const [search, setSearch] = useState(false)
  const {data: session} = useSession()

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
          <span className='absolute top-[-14px] right-[-14px] bg-primary text-white font-bold text-xs rounded-full w-5 h-5 flex items-center justify-center'>1</span>
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

      <div className={`fixed top-0 ${cart ? 'left-0' : "left-[-100%]"} duration-300 w-full h-full bg-black/70 z-20`}></div>
      <OutsideClickHandler onOutsideClick={()=> setCart(false)}>
      <div className={`fixed top-0 ${cart ? 'right-0' : "right-[-100%]"} duration-500 max-md:w-[300px] w-[450px] h-full bg-white z-30`}>

      <div className='flex flex-col h-full items-center w-full p-2 relative'>
        <h4 className='text-start p-2 w-full uppercase font-semibold border-b border-gray-300'>Alışveriş Sepeti</h4>

        <div className='w-full !h-full flex flex-col items-start justify-between'>
        <div className='my-4 bg-slate-200 rounded-xl w-full p-2 flex items-center justify-center gap-2'>
          <div className='w-[30%] h-[100px]'>
            <Image alt='' src="/images/matbaa2.jpg" width={500} height={500} className='w-full h-full object-cover rounded-xl'/>
          </div>

          <div className='w-[70%] flex items-start justify-start flex-col'>
            <h2 className='font-bold'>Branda</h2>
            <span className='text-xs font-medium'>'Kuş Gözü Branda'</span>
            <span className='text-xs font-medium'>En: 250 cm X Boy: 100 cm</span>
            <span className='text-sm font-bold'>Fiyat: 400₺</span>
            <div className='flex items-center justify-between w-full mt-2'>
            <span className='flex items-center justify-center gap-4 bg-white px-4 py-2 rounded-full text-primary font-bold'>
              <AiOutlineMinus/> 1 <AiOutlinePlus/>
            </span>
            <span className='mr-4 duration-300 cursor-pointer hover:text-primary'><BsFillTrashFill size={20}/></span>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col items-center justify-center gap-4 border-t p-2 border-gray-300'>
          <div className='flex items-center justify-between w-full'>
          <h4 className='text-lg font-semibold uppercase'>Toplam:</h4>
          <span className='text-lg font-bold'>400.00₺</span>
          </div>
          <span className='text-xs font-bold uppercase text-black/60'>Fiyatlarımıza KDV Dahildir.</span>
          <button className='button w-full !uppercase'>Siparişi Tamamla</button>
        </div>
        </div>
        
        <button onClick={() => setCart(false)} className='bg-primary p-2 absolute top-2 right-2'><AiOutlineClose className='text-white' size={20}/></button>
      </div>
      </div>
      </OutsideClickHandler>

      {search && <Search setSearch={setSearch}/>}
    </header>
  )
}

export default Header