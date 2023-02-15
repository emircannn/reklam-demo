import Image from 'next/image';
import React from 'react'

const Hero = () => {


  return (
        <div className='w-full h-[calc(100vh_-_89px)] overflow-x-hidden relative'>
           <Image src='/images/hero.jpg' alt='' width={5000} height={5000} priority className='w-full h-full object-cover'/>

           <div className='top-0 left-0 absolute h-full w-full bg-black/40'>
              <div className='h-full w-1/2 flex flex-col px-32 max-lg:px-12 max-xl:px-16 max-xl:w-2/3 items-start justify-center max-lg:gap-4 gap-8 max-lg:w-full'>
                <h2 className='text-white font-bold text-4xl max-lg:text-2xl uppercase tracking-wide stroke-black'>Demo Matbaa & Reklam Sitesi</h2>
                <p className='text-white/80 font-semibold max-lg:text-sm text-lg'>Firmamız, Tabela Reklam ve Baskı Hizmetleri konusunda uzman bir ekibe sahiptir. 
                Size en kaliteli ve en etkileyici tabela reklamlarını sunmak için tasarım ve baskı aşamalarında en son teknolojileri kullanıyoruz. Aynı zamanda, baskı hizmetleri 
                konusunda da geniş bir yelpazeye sahibiz ve müşterilerimize her türlü baskı ihtiyacını karşılamaya hazırız. İster büyük format baskı, ister offset baskı, ister dijital baskı olsun, 
                her zaman en iyi sonuçları sunmayı hedefliyoruz. Bize güvenebilir ve mükemmel sonuçlar için bizimle çalışabilirsiniz.</p>
                <button className='button'>İletişime Geç</button>
              </div>
           </div>
        </div>
  )
}

export default Hero