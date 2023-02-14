import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
    <>
        <Header/>
            <section className='min-h-[calc(100vh_-_349px)] w-[90%] mx-auto'>
                <div className='w-full flex items-center justify-center max-xl:flex-col'>
                    <div className='w-1/2 max-xl:w-full'>
                <h1 className='font-bold text-primary tracking-wide text-4xl mb-8 uppercase'>Hakkımızda</h1>
                        <p className='font-semibold text-slate-700'>
                        DMN Web, reklamcılık ve tabela imalatı alanında uzun yıllardır faaliyet göstermekte olan bir şirkettir. Müşterilerimize en kaliteli hizmeti sunmak ve onların taleplerini en hızlı ve etkili şekilde yerine getirmek için ekibimizle birlikte çalışıyoruz.

Reklamcılık alanında, müşterilerimize reklam panoları, afişler, neon tabelalar, görsel reklamlar ve diğer tüm reklam ürünlerini üretiyor ve uyguluyoruz. Tabela imalatı konusunda ise, müşterilerimize en modern ve kaliteli tabelaları sunuyoruz. İşletmelerin görsel kimliklerini yansıtmak ve müşterilerine dikkat çekmek amacıyla, her bir tabelamızı özel olarak tasarlıyor ve üretiyoruz.

Bizimle çalışmak isteyen müşterilerimize, en hızlı ve etkili hizmeti sunmak için öncelikli olarak müşteri memnuniyetini ön planda tutuyoruz. Her bir projede, müşterilerimizin beklentilerini karşılamak ve onların ihtiyaçlarına en uygun çözümler sunmak için çalışıyoruz.

Ekibimiz, uzman ve deneyimli reklamcı ve tabela imalatçılarından oluşmaktadır. Her bir çalışanımız, sektörde uzun yıllardır faaliyet göstermiş ve müşterilerimize en kaliteli hizmeti sunma konusunda kendilerini ispatlamıştır.

Biz, reklamcılık ve tabela imalatı konularında en iyiyi sunmak için buradayız ve müşterilerimize en kaliteli hizmeti sunma konusunda söz veriyoruz.
                        </p>
                    </div>

                    <div className='w-1/2 max-xl:w-full'>
                        <Image alt='' src='/images/hakkimizda.gif' width={2000} height={2000} className='w-full h-full object-contain'/>
                    </div>
                </div>
            </section>
        <Footer/>
    </>
  )
}

export default index