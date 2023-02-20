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
                <h1 className='font-semibold text-xl max-2xl:text-lg text-primary'>Ödeme, Teslimat, iptal ve İade</h1>

                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>www.ornek.com da isterseniz kredi kartınızla alışveriş yapabilirsiniz. Seçtiğiniz Firma Adı Ürünlerini, 
                sepetinize doldurduktan sonra, sepet ödeme sayfasında ödeme türünü seçerek alışverişinizi bitirebilirsiniz. Kredi Kartı ile ödeme sitemizin güvenliği 128 bit SSL sertifikalı 
                olup Bankalar tarafından kontrol edilmiş ve onaylanmıştır. Kredi kartı bilgileriniz kesinlikle sistemimizde tutulmamaktadır. Kredi kartı aracılığı ile gerçekleştirilen ödeme 
                PAYTR güvenliği E-Ticaret sistemi aracılığı ile online olarak gerçekleştirilmektedir. Sitemizde gıda ürünleri ile ilgili yasa gereği taksitlendirme yapılamamaktadır. 
                Sistem herhangi bir sorun nedeni ile işlemi gerçekleştiremiyorsa ödeme sayfası ekranında bilgilendirileceksiniz. </p>

                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>Teslimat Sitemize verilen siparişler farklı şehirlerden de olsa tek bir kargo ile gönderilir ve ortalama 1-3 iş günü 
                içerisinde kargoya verilmektedir. Bu süre sipariş verdiğiniz bölgenin, kargo süreleri ve mevsim koşulları nedeni ile nadiren de olsa değişiklik gösterebilir. Siparişinizde yer alan 
                tüm ürünler tek bir kargo ile gönderilmektedir. Belirtilen adreste, herhangi bir hata gerçekleştiğinde, teslimatı gerçekleşemeyen siparişiniz ile ilgili sizlerle bağlantı kurulmaktadır. 
                Teslimatın gerçekleşmesi konusunda gerek siz müşterilerimize gerekse kredi kartı sistemini kullandığımız bankaya karşı sorumluluğumuz söz konusudur. Alışverişleriniz her yönden güvence 
                altındadır. Güvenle alışveriş yapabilirsiniz. Neden kapıda ödeme yok ? Bizim için ürünlerimizin size mükemmel şekilde ulaşması çok önemlidir. Gıda ürünlerinde uzun süreli kargo 
                beklemelerinin yaşanması, ürün kalitesini olumsuz etkilemektedir.</p>

                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>Maalesef kapıda ödeme sisteminde ödeme için alıcının müsait olmaması veya adreste bizzat bulunmaması gibi 
                nedenlerle kargoların teslim edilememesi sonucu ortaya çıkabilmektedir. Bildiğiniz gibi tüm ürünlerimiz size özel gönderilir. Firma Adı olarak sizlere  taze ürün ulaştırma 
                gayretimize ve misyonumuza engel olabileceği endişelerimizden ötürü kapıda ödeme sistemi kullanamıyoruz. İade Gelen ürün öncelikle Firma Adı tarafından incelenir. Yukarıdaki 
                şartlara uygun ise iade işlemi başlatılır. İade onaylandığında, yasal süre olan 10 iş günü içerisinde ürün ücreti kredi kartınıza iade edilir. Bu süre Firma Adı'nın iade 
                ettiğiniz ürünü teslim almasıyla başlar. İade talebiniz onaylandığında ve kredi kartınıza ürün tutarı iade edildiğinde tarafınıza mail ile bilgilendirme yapılmaktadır. 
                İptal Siparişleriniz kargoya verilmeden iptal edebilirsiniz. Bunun için iletişim formundan mail atmanız yeterlidir.</p>

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