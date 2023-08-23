import './index.scss'
import { Helmet } from 'react-helmet'
import service1 from './images/ekinservis.jpg'
import service2 from './images/ekinservis2.jpg'
import ekin from './images/ekinmakinabg.png'
import PRODUCTS from '../products/products'


const Service = () => {
  return (
    <section className='service-section'>
      <Helmet>
       <meta charset="utf-8" />
       <title> Servislər-LALETECH MMC | LALETECH MMC | Mühəndislik Şirkəti</title>
       </Helmet>

       {/* SERVICES */}
       <div className='section-div'>
        <div className='service-parent-div'>
          <div className='ekin-title'>
           <h1 className='service-title'>SERVİS</h1>
           <img className='ekin-log' src={ekin} alt="" /> 
          </div>
       <div className='service-div'>
        <img className='service-img' id='service-1-img' src={service1} alt="" />
        <p>
        <b>LALETECH MMC</b> böyük əhəmiyyət verdiyi <b>texniki xidmət</b> sahəsində 
        mütəxəssis heyəti və təcrübəli işçiləri ilə <b>müştəri məmnuniyyətini</b> hər zaman ön planda tutur.
        <br />
        <br />
        <b>Təcrübəsi</b> ilə sektorda dürüst və prinsipial fəaliyyət göstərən, müştərilərinə həll yönümlü yanaşma ilə yanaşan şirkətimiz 
        öz strukturu daxilində verdiyi təlimlərlə heyətini daim yeniləşdirir. Sektorun <b>dəyişməsini və innovativ</b> ruhunu yaxından izləyir.
         Fəxrlə bildirmək istərdik ki,  tərəfdaşımız olan <b>Ekin Makina</b> şirkətinin mühəndisləri ilə nəhəng heyətimizi tamamlamışıq və sizə xidmət etmək üçün 
         lazım olan bütün infrastruktura malikik.
        </p>
       </div>
       <div className='service-div-2'>
        <p>
         <b>Mexanika, Hidravlika, Elektrik və Elektronika,</b> Bir sözlə, <b>Injeksiyon  maşınında</b> lazım ola biləcək bütün məsələlərdə tam xidmət göstərmək qabiliyyətimiz
         bütün müştərilər tərəfindən təqdir olunur. Bu sahədə üzərimizə götürdüyümüz missiyanı ən uğurlu şəkildə yerinə yetirmək üçün bütün lazımi araşdırmaları
          <b> tam və əksiksiz</b> şəkildə həyata keçirməyə davam edirik.
        </p>
        <img className='service-img' src={service2} alt="" />
       </div>
        </div>
       <PRODUCTS/>
       </div>

    </section>
  )
}

export default Service
