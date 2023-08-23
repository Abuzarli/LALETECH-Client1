import './index.scss'
import { Helmet } from 'react-helmet'
import PRODUCTS from '../products/products'
const About = () => {
  return (
       <section className='about-us'>
        <Helmet>
         <meta charset="utf-8" />
         <title>Haqqımızda-LALETECH MMC | LALETECH MMC | Mühəndislik Şirkəti</title>
        </Helmet>


      <div className='title'>
      <h1 className='about-title'>HAQQIMIZDA</h1>
      </div>
      <h1 className='bizkimik'>BİZ KİMİK?</h1>
      <div className='about'>
        <p className='about-content'>
          LALETECH-MMC şirkəti olaraq fəaliyyətimiz dünyada inkişaf edən
          texnologiyanın Kənd təsərrüfatının inkişafına tətbiqində mühəndislik etməkdir.
          Ölkə rəhbərliyinin Kənd Təssərrüfatına göstərdiyi böyük diqqət və dəstəyi
          nəticəsində kənd təsərrüfatı sahələri sürətlə genişlənir.Bu zaman kənd təsərrüfatının
          artım templərinə cavab verən, effektivliyi təmin edəcək müasir texnika və texnologiyaların 
          tətbiqinə zərurət yaranır
          Biz LALETECH-MMC şirkəti olaraq Layihələndirmə,müasir texnologiyanın araşdırılması, qurulması, 
          istehsal prosesinin düzgün idarə olunması, Xammal təminatı və servis həyata keçirməkdəyik.
          <br />
          
         <div className='direction'><span className='main-dir'><b>Əsas istiqamətlərimiz</b></span></div> 
    
          <ul className='about-list'>
          <li>Plastik Qablaşdırma</li>
            <li>Karton Qablaşdırma</li>
            <li>Heyvandarlıq kompleksləri</li>
            <li>Meyvə tərəvəz bağları
              və Soyuducu anbarların qurulmasıdır.
            </li>
          </ul>
          <br />
          Bununla yanaşı bu sahələrdə lazım olan köməkçi qurğuların təmin olunması da fəaliyyətimizə daxildir.
          <br />
          LALETECH-MMC şirkəti olaraq bu günə qədər böyük və kiçik həcmli
          <br />
          <ul >
            <li>6 Karton Fabrikasının</li>
            <li>2 Plastik Fabrikasının</li>
            <li>1 Heyvandarlıq Kompleksinin</li>
            <li>2 Soyuducu anbarın</li>
          </ul>
          <br />
          Tam qurulması,Layihələndirilməsi,avadanlıqların təmin olunması və servis
          uğurla Həyata keçirilmişdir
          Hal-hazırda LALETECH-MMC şirkəti olaraq 60-dan çox firmaya servis həyata keçirməkdəyik
          Arzumuz yeni-yeni müştərilərimizə keyfiyyətli xidmətlərimizlə 
          onların rəğbətini qazanmaqdır
        </p>
        <PRODUCTS/>
      </div>

    </section>
  )
}

export default About
