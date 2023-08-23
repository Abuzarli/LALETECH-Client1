import PRODUCTS from '../products/products'
import './index.scss'
import { Helmet } from "react-helmet"
import servis from './images/servis.jpg'


const Xidmet = () => {
  return (
    <section className="section-xidmet"> 
      <Helmet>
       <meta charset="utf-8" />
       <title> Xidmətlərimiz-LALETECH MMC | LALETECH MMC | Mühəndislik Şirkəti</title>
       </Helmet>
       <div className='xidmet-title'></div>
       <div className="xidmet">
        <div>
        <h1>XİDMƏTLƏRİMİZ</h1>
        <ul>
         <li><b>–Kənd Təsərrüfatının İnkişafı istehsal Olunan Müasir Texnologiyaların Tətbiqi </b> </li>
         <li><b>–Müasir Layihələrin Tətbiqi Həyata Keçirilməsi</b></li>
         <li><b>–Quraşdırdığımız Avadanlıqların Köməkçi Qurğular və Xammal ilə Təmini</b></li>
         <li><b>–Quraşdırdığımız Avadanlıqlara Texniki dəstək və servis xidməti</b></li>
         <li><b>–Soyuq Hava Deposunun Layihələndirilməsi Tam Tikilib Təhvil Verilməsi</b></li>
         <li><b>–Müasir Bağların Qurulması Bağların Üzərinin Tüllə Örtülməsi</b></li>
         <li><b>–Qablaşdırma Avadanlıqlarının Qurulması</b></li>
         <li><b>–Meyvə Çeşidlənməsi Üçün istifadə Olunan Qurğuların Quraşdırılması</b></li>
         <li><b>–Avtokar,Viol Ağac İpi,Karton Kleyi,Karton Makina Qəlibi Plastik Yeşik </b>
          <br />
           <b>Makina Qəlibi Qurğuları Ehtiyat Hissələrinin Təmini Və Servis</b>
         </li>
        </ul>    
        <img className='xidmet-img' src={servis} alt="" /> 
        </div>
           <PRODUCTS/>
       </div>
    </section>
  )
}

export default Xidmet
