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
                <h1 className='font-semibold text-xl max-2xl:text-lg text-primary'>Mesafeli Satış Sözleşmesi</h1>

                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>1- Taraflar 1.1. Satıcı Bundan sonra DMN Gıda Doğal Ürünler ( ornek.com ) olarak anılacaktır.Adı : {settings[0]?.address} Tel : {settings[0]?.phone} Email : {settings[0]?.email} 1.2. Alıcı Adı – soyadı/TC.NoAdresi Telefon E-mail</p>

                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>Madde 2- Konu İşbu sözleşmenin konusu, ALICI’nın SATICI’ya ait https://www.ornek.com internet sitesinden elektronik ortamda 
                siparişini ( e-ticaret )yaptığı aşağıda nitelikleri ve satış ücreti belirtilen ürünün satışı ve teslimi ile ilgili olarak 4077 sayılı Tüketicilerin Korunması Hakkındaki 
                Kanun ve Mesafeli Sözleşmelere Dair Yönetmelik hükümleri gereğince tarafların hak ve yükümlülüklerinin saptanmasıdır.Alıcı, https://www.ornek.com.trnın isim, unvan, açık 
                adres, telefon ve diğer erişim bilgileri , satışa konu malın temel nitelikleri, vergiler dahil olmak üzere satış fiyatı , ödeme sekli, teslimat koşulları ve masrafları vs. 
                satışa konu mal ile ilgili tüm ön bilgiler ve “cayma” hakkının kullanılması ve bu hakkın nasıl kullanılacağı , şikayet ve itirazlarını iletebilecekleri resmi makamlar vs. 
                konusunda açık , anlaşılır ve internet ortamına ( eticaret sitesinde ) uygun şekilde https://www.ornek.com tarafından bilgilendirildiğini , bu ön bilgileri elektronik ortamda 
                teyit ettiğini ve sonrasında mal sipariş verdiğini is bu sözleşme hükümlerince kabul ve beyan eder.https://www.ornek.com.tr sitesinde yer alan ön bilgilendirme ve alıcı 
                tarafından verilen sipariş üzerine düzenlenen fatura is bu sözleşmenin ayrılmaz parçalarıdır.</p>

                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>Madde 3- Sözleşme Konusu Ürün/Ödeme/Teslimat BilgileriElektronik ortamda alınan ürün/ürünlerin cinsi ve türü, miktarı, 
                marka/modeli, satış bedeli, ödeme şekli, teslim alacak kişi, teslimat adresi, fatura bilgileri, kargo ücreti aşağıda belirtildiği gibidir.Fatura edilecek kişi ile sözleşmeyi 
                yapan kişi aynı olmak zorundadır.Aşağıda yer alan bilgiler doğru ve eksiksiz olmalıdır. Bu bilgilerin doğru olmadığı veya noksan olduğu durumlardan doğacak zararları tamamıyla 
                karşılamayı alıcı kabul eder ve ayrıca bu durumdan oluşabilecek her türlü sorumluluğu alıcı kabul eder.SATICI gerekli gördüğü durumlarda, ALICI’nın vermiş olduğu bilgiler 
                gerçekle örtüşmediğinde, siparişi durdurma hakkını saklı tutar. SATICI siparişte sorun tespit ettiği durumlarda ALICI’nın vermiş olduğu telefon, e-posta ve posta adreslerinden 
                ALICI’ya ulaşamadığı takdirde siparişin yürürlüğe koyulmasını 15 (on beş) gün süreyle dondurur. ALICI’nın bu süre zarfında SATICI ile konuyla ilgili olarak iletişime geçmesi 
                beklenir. Bu süre içerisinde ALICI’dan herhangi bir cevap alınamazsa SATICI, her iki tarafın da zarar görmemesi için siparişi iptal eder.Alınan Ürün /Ürünler Adı , 
                kodu : ; … adet</p>

                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>Toplam Satış Bedeli : …. -TL Ödeme Şekli : Kredi Kartı/Banka Havalesi (EFT)Teslim Edilecek Kişi :Telefon numarası :
                Teslim Edilecek Adres :Fatura Edilecek Kişi/Kurum :Fatura Adresi :Vergi Dairesi :Vergi Sicil Numarası :Kargo Ücreti : … -TL</p>

                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>Madde 4- Sözleşme Tarihi ve Mücbir NedenlerSözleşme tarihi, alıcı tarafından siparişin verildiği tarihtir. Sözleşmenin 
                imzalandığı tarihte mevcut olmayan veya öngörülmeyen, tarafların kontrolleri dışında gelişen, ortaya çıkmasıyla taraflardan birinin ya da her ikisinin de sözleşme ile 
                yüklendikleri borç ve sorumluluklarını kısmen ya da tamamen yerine getirmelerini ya da bunları zamanında yerine getirmelerini olanaksızlaştıran durumlar, mücbir sebep 
                (Doğal afet, savaş, terör, ayaklanma, değişen mevzuat hükümleri, el koyma veya grev, lokavt, üretim ve iletişim tesislerinde önemli ölçüde arıza vb.) olarak kabul edilecektir. 
                Mücbir sebep şahsında gerçekleşen taraf, diğer tarafa durumu derhal ve yazılı olarak bildirecektir. Mücbir sebebin devamı esnasında tarafların edimlerini yerine getirememelerinden 
                dolayı herhangi bir sorumlulukları doğmayacaktır. İşbu mücbir sebep durumu 30 (otuz ) gün süreyle devam ederse, taraflardan her birinin, tek taraflı olarak fesih hakkı doğmuş olacaktır.</p>

                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>Madde 5- https://www.ornek.com 'un Hak ve Yükümlülükleri 5.1. https://www.ornek.com, 4077 sayılı Tüketicilerin Korunması Hakkındaki 
                Kanun ve Mesafeli Sözleşmelere Dair Yönetmelik hükümleri uyarınca sözleşmede kendisine yüklenen edimleri mücbir haller dışında eksiksiz yerine getirmeyi kabul ve taahhüt eder.5.2. 18 
                (on sekiz) yaşından küçük kişiler https://www.ornek.com' dan alışveriş yapamaz. https://www.ornek.com, alıcının sözleşmede belirttiği yaşının doğru olduğunu esas alacaktır. 
                Ancak alıcının yaşını yanlış yazmasından dolayı https://www.ornek.com a hiçbir şekilde sorumluluk yüklenemeyecektir.</p>

                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>5.2. Sistem hatalarından meydana gelen fiyat yanlışlıklarından https://www.ornek.com'a sorumlu değildir. Buna istinaden https://www.ornek.com.tr, 
                internet sitesindeki sistemden, dizayndan veya yasa dışı yollarla internet sitesine yapılabilecek müdahaleler sebebiyle ortaya çıkabilecek tanıtım, fiyat hatalarından sorumlu değildir. 
                Sistem hatalarına dayalı olarak alıcı https://www.ornek.com'dan hak iddiasında bulunamaz. 5.3. https://www.ornek.com dan kredi kartı (Visa, MasterCard , vs. ) ya da banka havalesi ile 
                alışveriş yapılabilir. Sipariş tarihinden itibaren bir hafta içinde havalesi yapılmayan siparişler iptal edilir. Siparişlerin işleme alınma zamanı, siparişin verildiği an değil, 
                kredi kartı hesabından gerekli tahsilatın yapıldığı ya da havalenin (EFT’nin) banka hesaplarına ulaştığı belirlenen andır. Ödemeli gönderi ya da posta çeki gibi müşteri hizmetleri ile 
                görüşülmeden gerçekleştirilen ödeme yöntemleri kabul edilmez. Madde 6- Alıcının Hak ve Yükümlülükleri 6.1. Alıcı, sözleşmede kendisine yüklenen edimleri mücbir sebepler dışında eksiksiz 
                yerine getirmeyi kabul ve taahhüt eder.</p>

                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>6.2. Alıcı, sipariş vermekle birlikte iş sözleşme hükümlerini kabul etmiş sayıldığını ve sözleşmede belirtilen ödeme şekline 
                uygun ödemeyi yapacağını kabul ve taahhüt eder.</p>

                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>6.3. Alıcı, https://www.ornek.com internet sitesinden https://www.ornek.com un isim, unvan, açık adres, telefon ve diğer 
                erişim bilgileri , satışa konu malın temel nitelikleri, vergiler dahil olmak üzere satış fiyatı , ödeme sekli, teslimat koşulları ve masrafları vs. satışa konu mal ile ilgili 
                tüm ön bilgiler ve “cayma” hakkının kullanılması ve bu hakkın nasıl kullanılacağı , şikayet ve itirazlarını iletebilecekleri resmi makamlar vs. konusunda açık , anlaşılır ve 
                internet ortamına uygun şekilde bilgi sahibi olduğunu bu ön bilgileri elektronik ortamda teyit ettiğini kabul ve beyan eder.</p>

                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>6.4. Bir önceki maddeye bağlı olarak Alıcı, ürün sipariş ve ödeme koşullarının, ürün kullanım talimatlarının , 
                olası durumlara karşı alınan tedbirlerin ve yapılan uyarıların olduğu https://www.ornek.com sipariş/ödeme/kullanım prosedürü bilgilerini okuyup bilgi sahibi olduğunu ve 
                elektronik ortamda gerekli teyidi verdiğini beyan eder.</p>

                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>6.5. Alıcı, aldığı ürünü iade etmek istemesi durumunda ne surette olursa olsun ürüne ve ambalajına zarar vermemeyi, 
                iade anında fatura aslını ve irsaliyesini iade etmeyi kabul ve taahhüt eder.</p>

                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>Madde 7- Sipariş/Ödeme ProsedürüSipariş: Alışveriş sepetine eklenen ürünlerin KDV dahil TL tutarı 
                (Taksitli işlemlerde toplam taksit tutarları) alıcı tarafından onaylandıktan sonra, ilgili banka kartının posu üzerinden işleme alınır. Bu nedenle siparişler, sevk edilmeden önce 
                müşteriye sipariş onay maili gönderilir. Sipariş Onay maili gönderilmeden sevkiyat yapılmaz.Süreçteki herhangi bir aksama durumu ya da kredi kartı ile ilgili ortaya çıkabilecek 
                problemler alıcıya sözleşmede belirttiği telefon/faks/e-mail yollarından biri veya bir kaçı kullanılmak sureti ile bildirilir. Gerekirse alıcıdan bankası ile görüşmesi istenebilir.
                Siparişlerin işleme alınma zamanı, siparişin verildiği an değil, kredi kartı hesabından gerekli tahsilatın yapıldığı ya da havalenin (EFT’ nin) https://www.ornek.com hesaplarına 
                ulaştığının belirlendiği andır.İstisnai olarak haklı bir nedenle sözleşme konusu malın tedarik edilemeyeceğinin anlaşılması ve/veya stok problemi ile karşılaşılması durumunda alıcı 
                hemen açık ve anlaşılır bir şekilde bilgilendirilip onay vermesi durumunda alıcıya eşit kalitede ve fiyatta başka bir mal gönderilebilir ya da alıcının arzusu ve seçimi doğrultusunda ; 
                yeni başka bir ürün gönderilebilir, ürünün stoklara girmesi ya da teslime engel diğer engelin ortadan kalkması beklenebilir ve/veya sipariş iptal edilebilir.Sözleşme konusu malın teslim yükümlülüğünün 
                yerine getirilmesinin imkânsızlaştığı hâllerde alıcı bu durumdan haberdar edilerek ödemiş olduğu toplam bedel ve varsa onu borç altına sokan her türlü belge en geç on gün içinde kendisine 
                iade edilerek sözleşme iptal edilir. Böyle bir durumda alıcının https://www.ornek.com dan ilave herhangi bir maddi ve manevi zarar talebi olmayacaktır. Ödeme: https://www.ornek.com ‘da, 
                internet ortamında kredi kartı bilgilerini kullanmak istemeyen alıcılara nakit havale ile sipariş imkanları sunulmuştur. Havale ile ödemede alıcı kendisine en uygun bankayı seçip 
                havalesini yapabilir. Eğer EFT yapılmışsa hesaba geçme tarihi dikkate alınacaktır. Havale ve/veya EFT yaparken “Gönderen Bilgileri”nin Fatura Bilgileri ile aynı olması ve sipariş 
                numarasının yazılması gereklidir. Ürünün tesliminden sonra Alıcı’ya ait kredi kartının Alıcı’nın kusurundan kaynaklanmayan bir şekilde yetkisiz kişilerce haksız veya hukuka aykırı 
                olarak kullanılması nedeni ile ilgili banka veya finans kuruluşun ürün bedelini https://www.ornek.com ’a ödememesi halinde, Alıcı’nın kendisine teslim edilmiş ürünü 10 gün içinde 
                https://www.ornek.com ’ye göndermesi zorunludur. Bu tür durumlarda nakliye giderleri Alıcı’ya aittir.Alıcı kredi kartı ile ödeme yapmayı tercih etmiş ise ALICI, ilgili faiz oranlarını 
                ve temerrüt faizi ile ilgili bilgileri bankasından ayrıca teyit edeceğini, yürürlükte bulunan mevzuat hükümleri gereğince faiz ve temerrüt faizi ile ilgili hükümlerin Banka ve ALICI 
                arasındaki “Kredi Kartı Sözleşmesi” kapsamında uygulanacağını kabul, beyan ve taahhüt eder.</p>

                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>Madde 8- Sevkiyat/Teslimat ProsedürüSevkiyat:Sipariş onayı mailinin gönderilmesiyle birlikte, ürün/ürünler 
                https://www.ornek.com un anlaşmalı olduğu kargo Şirketine verilir.Teslimat: Ürün/ürünler https://www.ornek.com un anlaşmalı olduğu kargo ile alıcının adresine teslim edilecektir. 
                Teslimat süresi, Sipariş onayı mailinin gönderilmesinden ve sözleşmenin kurulmasından itibaren 30 gündür. Alıcıya önceden yazılı olarak veya bir sürekli veri taşıyıcısıyla bildirilmek 
                koşuluyla bu süre en fazla on gün uzatılabilir. Ürünler, Kargo şirketlerinin adres teslimatı yapmadığı bölgelere telefon ihbarlı olarak gönderilir.Kargo Şirketinin haftada bir gün 
                teslimat yaptığı bölgelerde, sevk bilgilerindeki yanlışlık ve eksiklik olduğu hallerde, bazı sosyal olaylar ve doğal afetler gibi durumlarda belirtilen gün süresinde sarkma olabilir. 
                Bu sarkmalardan dolayı alıcı https://www.ornek.com'un herhangi bir sorumluluk yükleyemez. Ürün, Alıcı’dan başka bir kişi/kuruluşa teslim edilecek ise, teslim edilecek kişi/kuruluşun 
                teslimatı kabul etmemesinden, sevk bilgilerindeki yanlışlık ve/veya Alıcının yerinde olmamasından doğabilecek ekstra kargo bedellerinden https://www.ornek.com'un sorumlu değildir. 
                Belirtilen günler içeriğinde ürün/ürünler müşteriye ulaşmadıysa teslimat problemleri müşteri hizmetlerine iletişim info@dmngida.com e-mail adresi kullanılmak sureti ile derhal 
                bildirilmelidir.Zarar görmüş paket durumunda; Zarar görmüş paketler teslim alınmayarak Kargo Şirketi yetkilisine tutanak tutturulmalıdır. Eğer Kargo Şirketi yetkilisi paketin hasarlı 
                olmadığı görüşünde ise, paketin orada açılarak ürünlerin hasarsız teslim edildiğini kontrol ettirme ve durumun yine bir tutanakla tespit edilmesini isteme hakkı alıcıda vardır. 
                Paket Alıcı tarafından teslim alındıktan sonra Kargo Şirketinin görevini tam olarak yaptığı kabul edilmiş olur. Paket kabul edilmemiş ve tutanak tutulmuş ise, durum, tutanağın Alıcı’da 
                kalan kopyasıyla birlikte en kısa zamanda https://www.ornek.com.tr Müşteri Hizmetlerine bildirilmelidir.</p>

                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>Madde 9- Ürün İade ve Cayma Hakkına İlişkin ProsedürüÜrün İade:Alıcı malı teslim aldıktan sonra yedi gün içerisinde 
                herhangi bir gerekçe göstermeksizin ve cezai şart ödemeksizin sözleşmeden cayma hakkına sahiptir. 385 sayılı vergi usul kanunu genel tebliği uyarınca iade işlemlerinin yapılabilmesi 
                için alıcının mal ile birlikte teslim edilen https://www.ornek.com a ait 2 adet faturanın alt kısmındaki iade bölümlerini eksiksiz ve doğru şekilde doldurduktan sonra imzalayarak 
                bir nüshasını ürün ile birlikte https://www.ornek.com ya göndermesi diğer nüshasını da uhdesinde tutması gerekmektedir.Cayma hakkı süresi alıcıya malın teslim edildiği günden 
                itibaren başlar. İade edilen ürün veya ürünlerin geri gönderim bedeli alıcı tarafından karşılanmalıdır.Alıcının istekleri ve/veya açıkça onun kişisel ihtiyaçları doğrultusunda 
                hazırlanan mallar için cayma hakkı söz konusu değildir.Alıcının cayma hakkını kullanması halinde https://www.ornek.com.tr, cayma bildirimini içeren faturanın ürünle birlikte 
                kendisine ulaşmasından itibaren en geç on gün içerisinde almış olduğu toplam bedeli ve varsa tüketiciyi borç altına sokan her türlü belgeyi tüketiciye hiçbir masraf yüklemeden 
                iade edecektir.Teslim alınmış olan malın değerinin azalması veya iadeyi imkânsız kılan bir nedenin varlığı cayma hakkının kullanılmasına engel değildir. Ancak değer azalması veya 
                iadenin imkânsızlaşması tüketicinin kusurundan kaynaklanıyorsa https://www.ornek.com a malın değerini veya değerindeki azalmayı tazmin etmesi gerekir. Sehven alınan her ürün için 
                de genel iade süresi 7 gündür. Bu süre içerisinde, Ambalajı açılmış, kullanılmış, tahrip edilmiş vesaire şekildeki ürünlerin iadesi kabul edilmez. İade, orijinal ambalaj ile 
                yapılmalıdır.Sehven alınan üründe ve ambalajında herhangi bir açılma, bozulma, kırılma, tahrip, yırtılma, kullanılma ve sair durumlar tespit edildiği hallerde ve ürünün alıcıya 
                teslim edildiği andaki hali ile iade edilememesi durumunda ürün iade alınmaz ve bedeli iade edilmez. Ürün iadesi için, durum öncelikli olarak müşteri hizmetlerine iletilmelidir. 
                Ürünün iade olarak gönderilme bilgisi, https://www.ornek.com.tr tarafından müşteriye iletilir. Bu görüşmeden sonra ürün iade ile ilgili bilgileri içeren fatura ile birlikte 
                alıcı adresine teslimatı yapan Kargo şirketi kanalıyla https://www.ornek.com a ulaştırmalıdır. https://www.ornek.com 'a ulaşan iade ürün iş bu sözleşmede belirtilen koşulları 
                sağladığı takdirde iade olarak kabul edilir, geri ödemesi de alıcı kredi kartına/hesabına yapılır. Ürün iade edilmeden bedel iadesi yapılmaz. Kredi Kartına yapılan iadelerin kredi 
                kartı hesaplarına yansıma süresi ilgili bankanın tasarrufundadır. Alışveriş kredi kartı ile ve taksitli olarak yapılmışsa, kredi kartına iade prosedürü şu şekilde uygulanacaktır: 
                Alıcı ürünü kaç taksit ile satın alma talebini iletmiş ise, Banka alıcıya geri ödemesini taksitle yapmaktadır. https://www.ornek.com, bankaya ürün bedelinin tamamını tek seferde 
                ödedikten sonra, Banka poslarından yapılan taksitli harcamaların alıcının kredi kartına iadesi durumunda konuya müdahil tarafların mağdur duruma düşmemesi için talep edilen iade 
                tutarları,yine taksitli olarak hamil taraf hesaplarına Banka tarafından aktarılır.Alıcının satış iptaline kadar ödemiş olduğu taksit tutarları, eğer iade tarihi ile kartın hesap 
                kesim tarihleri çakışmazsa her ay karta 1(bir) iade yansıyacak ve alıcı iade öncesinde ödemiş olduğu taksitleri satışın taksitleri bittikten sonra, iade öncesinde ödemiş olduğu 
                taksit sayısı kadar ay daha alacak ve mevcut borçlarından düşmüş olacaktır.Kart ile alınmış mal ve hizmetin iadesi durumunda https://www.ornek.com, Banka ile yapmış olduğu sözleşme
                gereği alıcıya nakit para ile ödeme yapamaz. Üye işyeri yani https://www.ornek.com, bir iade işlemi söz konusu olduğunda ilgili yazılım aracılığı ile iadesini yapacak olup, 
                üye işyeri yani https://www.ornek.com ilgili tutarı Bankaya nakden veya mahsuben ödemekle yükümlü olduğundan yukarıda detayları belirtilen prosedür gereğince alıcıya nakit 
                olarak ödeme yapılamamaktadır. Kredi kartına iade, alıcının Bankaya bedeli tek seferde ödemesinden sonra, Banka tarafından yukarıdaki prosedür gereğince yapılacaktır.</p>

                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>Madde 10-GarantiKullanma talimatına uygun şekilde kullanılan ve temizliği yapılan ürünler her türlü 
                üretim hatasına karşı aşağıda belirtilen şartlar dahilinde 2 yıl garantilidir: https://www.ornek.com'un garanti sorumluluğu yalnızca 4077 sayılı kanun kapsamına giren 
                tüketiciler için geçerlidir. Ticari nitelikteki işler için Türk Ticaret Kanununu hükümleri geçerli olacaktır.</p>

                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>Madde 11- GizlilikAlıcı tarafından iş bu sözleşmede belirtilen bilgiler ile ödeme yapmak amacı ile 
                https://www.ornek.com'un bildirdiği bilgiler https://www.ornek.com tarafından 3. şahıslarla paylaşılmayacaktır.https://www.ornek.com bu bilgileri sadece idari/ yasal 
                zorunluluğun mevcudiyeti çerçevesinde açıklayabilecektir. Araştırma ehliyeti belgelenmiş her türlü adli soruşturma dahilinde https://www.ornek.com kendisinden istenen bilgiyi
                elinde bulunduruyorsa ilgili makama sağlayabilir.Kredi Kartı bilgileri kesinlikle saklanmaz,Kredi Kartı bilgileri sadece tahsilat işlemi sırasında ilgili bankalara güvenli 
                bir şekilde iletilerek provizyon alınması için kullanılır ve provizyon sonrası sistemden silinir.Alıcıya ait e-posta adresi, posta adresi ve telefon gibi bilgiler yalnızca 
                https://www.ornek.com tarafından standart ürün teslim ve bilgilendirme prosedürleri için kullanılır. Bazı dönemlerde kampanya bilgileri, yeni ürünler hakkında bilgiler, 
                promosyon bilgileri alıcıya onayı sonrasında gönderilebilir.</p>

                <p className='font-medium max-2xl:text-sm text-slate-700 mt-4'>Madde 12- Uyuşmazlık Durumunda Yetkili Mahkeme ve İcra Daireleriİşbu sözleşmenin uygulanmasından kaynaklanan uyuşmazlık halinde, 
                Sanayi ve Ticaret Bakanlığınca her yıl Aralık ayında ilan edilen değere kadar Tüketici Hakem Heyetleri ile Alıcı’nın veya https://www.ornek.com' un yerleşim yerindeki Tüketici 
                Mahkemeleri yetkilidir.Siparişin gerçekleşmesi durumunda Alıcı işbu sözleşmenin tüm koşullarını kabul etmiş sayılır. dmngida.com online shop sitesinden aldığınız ürünü, teslimat 
                tarihinden itibaren 14 iş günü içerisinde faturanız ile iade edebilir. aynı tutarda başka bir ürün ile değişim yapabilirsiniz.</p>

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