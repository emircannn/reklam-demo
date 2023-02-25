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
                <h1 className='font-semibold text-xl max-2xl:text-lg text-primary'>Nasıl Alışveriş Yapacağım?</h1>

                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>Sitemizden alışveriş yapmak son derece kolay adımlardan oluşmaktadır. 
                Aşağıda sipariş aşamalarını görebilirsiniz.Seçtiğiniz ürüne tıkladığınızda, sizden üye bilgilerini isteyecektir. Eğer daha önce sitemize üye olmuşsanız, 
                üyelik bilgileriniz ile üye girişi yapın. Üye değilseniz ve arzu ederseniz yeni üyelik oluşturmak için yeni üyelik butonuna tıklayı acılan sayfada istenen kısa 
                bilgilerinizi girip şifrenizi oluşturun.Sitemizden satın almak istediğiniz ürünlerinin her birini "SEPETE EKLE" butonuna tıklayarak sepetinize ekleyin.Tüm ürünleri 
                ekledikten sonra sitemizin her sayfasının en üstte sağ tarafında yer alan "SEPETİNİZ" butonuna tıklayarak sepetinize gidin.Sepetinizi kontrol edin, arzu ederseniz 
                ürün adetlerini güncelleyin ve "SİPARİŞİ TAMAMLA" butonuna tıklayın.</p>

                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>"ÖDEME " bölümünden ödeme tercihinizi seçin. Ürünlerinizin size en kolay ve sorunsuz şekilde ulaşabilmesi için sizden istenen 
                teslimat ve fatura bilgilerini eksiksiz olarak girin.Sitemizde 128 bit SSL güvenlik sağlanmıştır. Bu sayede ödeme sayfamızda güvenle kredi kartı, ya da havale ile ödeme yapabilirsiniz. 
                Arzu ettiğiniz ödeme şeklini seçtikten ve gerekli bilgileri doldurduktan sonra "SİPARİŞİ TAMAMLA" butonuna tıklayın. Alışverişinizin tamamlandığına dair onay mesajını gördüğünüzde 
                alışverişiniz tamamlanmış olacak. Artık ürünlerinizin tedarik süreci başladı...</p>

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