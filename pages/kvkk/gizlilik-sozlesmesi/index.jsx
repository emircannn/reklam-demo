/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const index = () => {

    const [settings, setSettings] = useState([])

    useEffect(() => {
      const getSettings = async() => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/settings`)
            setSettings(res.data)
        } catch (err) {
            console.log(err)
        }
      }
      getSettings()
    }, [])
    

  return (
    <React.Fragment>
        <Header/>
        <section className='min-h-[calc(100vh_-_409px)]'>
            <div className='w-[90%] mx-auto flex flex-col p-8 h-full'>
                <h1 className='font-semibold text-xl max-2xl:text-lg text-primary'>Gizlilik Sözleşmesi</h1>

                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>Firma Adı kredi kartı işlemleriniz, öncelikle sitemiz için haberleşmede her aşama güvenlik altına alınmıştır. 
                    Site-Ziyaretçi Haberleşme Güvenliği Sitemizin sipariş sayfalarında site ile ziyaretçi arasındaki haberleşme 128 bit SSL standartında gerçekleşmektedir. 
                    Bu nitelikteki sayfalara eriştiğinizde tarayıcının sağ alt köşesinde kilit işareti de yer almaktadır.</p>
                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>Site-Banka Haberleşme Güvenliği Kredi kartı bilgilerinin siteden bankaya aktarılması ile ilgili güvenlik, 
                PAYTR'nin sunduğu maksimum güvenlik ile gerçekleşmektedir. Söz konusu güvenliğin çok sayıda bileşenin yanında, CVV2 / CVC2 kodu da çalıntı kart bilgileri ile alışverişe karşı önlem olarak 
                ornek.com'da kullanılmaktadır.</p>

                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>Site içi Veri Güvenliği Güvenli ortamda yapacağınız işlemlerde, sizin kredi kart bilgilerinize, 
                PAYTR ve sizin haricinizde hiçbir kurum ve kuruluş tarafından ulaşılamaz. Kredi kartı işlem sayfası kart bilgilerini doğrudan banka POS sistemine iletmekte ve işlem sonucunu, PAYTR tarafından cevaplanmaktadır. 
                Online işlemin güvenlik yapısı sebebiyle aktarılan kredi kart bilgilerine dmngida.com dahi erişememektedir.</p>

                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>Firma Adı</p>

                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>{settings[0]?.address}</p>
                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>{settings[0]?.phone}</p>
                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>{settings[0]?.email}</p>
            </div>
        </section>
        <Footer/>
    </React.Fragment>
  )
}

export default index