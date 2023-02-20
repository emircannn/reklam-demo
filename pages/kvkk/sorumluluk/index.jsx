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
                <h1 className='font-semibold text-xl max-2xl:text-lg text-primary'>Sınırlı Sorumluluk</h1>

                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>Site’nin kullanılması, Sitede sunulan ve sağlanan veri ve bilgilerin kullanımı, bu veri ve bilgiler esasında 
                yapılan davranışlar veya Site’ye erişim sebebiyle maruz kalınabilecek herhangi türden bilgisayar virüsleri, trojan ve benzeri kötü amaçlı yazılımlar (malware) da dahil ve 
                fakat bunlarla sınırlı olmamak üzere, kullanıcıların ve/veya diğer üçüncü kişilerin herhangi bir sebepten ötürü uğrayabilecekleri her türlü ve tüm doğrudan ve dolaylı zarar, 
                ziyan, hasar ve/veya kayıplar ile ilgili Firma Adı’nın hiçbir hukuki veya cezai sorumluluğu bulunmamaktadır. Kullanıcılar, yukarıda anılan zararlar sebebiyle Firma Adı’den her 
                ne isim altında olursa olsun herhangi bir talep veya iddiada bulunmayacaklarını peşinen kabul, beyan ve taahhüt etmektedir.</p>

                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>Kullanıcıların ve/veya başkaca üçüncü kişilerin sürekli bir şekilde ve ayıpsız faaliyette bulunacağı hususunda Firma Adı 
                herhangi bir taahhüt veya garanti vermemektedir.</p>

                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>Firma Adı, kullanıcılara veya üçüncü kişilere karşı Sitede sunulan ve yayınlanan bilgi ve verilerin içeriği, doğruluğu, 
                yeterliliği ve eksiksizliği hususunda herhangi bir bir taahhütte bulunmamakta veya bir garanti vermemektedir. Firma Adı, bannerlar vasıtasıyla, veya başkaca bir şekilde adresi verilen, 
                reklamı yapılan veya paylaşılan internet sitelerinin içeriğinden veya bu sitelerde sunulan hizmet ve faaliyetlerden dolayı hiçbir şekilde sorumlu tutulamaz.Site’nin kullanılması, 
                Site’ye giriş veya erişim yapılması sırasında Kullanıcılar, Firma Adı’nin ve üçüncü kişilerin yasal haklarını göz önünde bulundurmak ve bu hakları ihlal etmemek ile yükümlüdür.</p>
                
                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>Kullanıcılar, herhangi bir üçüncü kişinin yasal hakkının ihlal edilmesi sebebiyle doğacak zararlardan tamamen kendilerinin 
                sorumlu olduklarını ve Firma Adı’nin bu zararlardan sorumlu tutulamayacağını peşinen kabul, beyan ve taahhüt etmektedir.</p>

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