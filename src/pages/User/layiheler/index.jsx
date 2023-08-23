import './index.scss'
import { Helmet } from 'react-helmet'
import AqroInvest from './images/aqroinvest.jpg'
import CennetAqro from './images/banan.png'
import Bio from './images/biommc.jpg'
import TovuzAqro from './images/TovuzAqropark.jpg'
import Naxcivan from './images/naxcivan.png'
const Projects = () => {
  return (
    <section>
      <Helmet>
       <meta charset="utf-8" />
       <title> Layihələrimiz-LALETECH MMC | LALETECH MMC | Mühəndislik Şirkəti</title>
       </Helmet>

       <div className='project-title'>
        <h1>LAYİHƏLƏRİMİZ</h1>
       </div>

       <div>
        <p className='project-content'>
        Müştərilərimizlə əməkdaşlıq edərək, biz kənd təsərrüfatını daha davamlı, müxtəlif və daha müasir, yüksək keyfiyyətli texnologiya ilə təmin edə bilərik.
         Biz müştərilərin ehtiyaclarını başa düşürük, qabaqcıl texnologiya ilə cavab veririk və həmişə müştərilərimizin rifahını nəzərə alırıq.
         <br />
         Bəzi layihələrimizə nəzər salın:
        </p>
       </div>

        {/* PROJECTS */}
       <div className='all-projects' style={{margin:'100px 0 100px 0'}}>

        {/* PROJECT 1 */}
        <div className='projects' id='project-1'>
          <div><img className='project-image' id='project-image-1' src={AqroInvest} alt="" /></div>
          <div className='projects-content'>
            <h4 className='projects-title'>AQRO INVEST & ISTEHSALAT MMC</h4>
            <h1>KARTON QUTU FABRIKININ TAM QURULMASI</h1>
            <p>Azərbaycanda Aqro invest şirkətində dünya standartlarına cavab verən <b> 2.15 </b> enində <b> BÜZMƏLİ KARTON MAKİNASINI </b> uğurla Çalışdıraraq təhvil verdik</p>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className='projects' id='project-2'>
          <div className='projects-content'>
            <h4>CƏNNƏT AQRO MMC.</h4>
            <h1>Banan Saraltma Soyuducusunun Qurulması.</h1>
            <p>Azərbaycanda Cənnət Aqro MMC şirkətində dünya standartlarına cavab verən <b> BANAN SARALTMA SOYUDUCUSUNU </b> uğurla Çalışdıraraq təhvil verdik</p>
          </div>
          <div><img className='project-image' id='project-image-2' src={CennetAqro} alt="" /></div>
        </div>

        {/* PROJECT 3 */}
        <div className='projects' id='project-3'>
          <div><img className='project-image' id='project-image-3'  src={Bio} alt="" /></div>
          <div className='projects-content'>
            <h4>BİO MMC</h4>
            <h1>Karton Qutu və Qutu Yapışdırma Avadanlıqlarının Qurulması</h1>
            <p>Azərbaycanda BİO MMC şirkətində dünya standartlarına cavab verən <b> Büzməli karton -3 və 5 laylı | Karton qutular – 3 və 5 laylı, rəngli və rəngsiz</b>  <b> BÜZMƏLİ KARTON MAKİNASINI </b> uğurla Çalışdıraraq təhvil verdik</p>
          </div>
        </div>

        {/* PROJECT 4 */}
        <div className='projects' id='project-4'>
          <div className='projects-content'>
            <h4> TOVUZ AQROPARK</h4>
            <h1>Heyvandarlıq Kompleksinin Qurulması</h1>
            <p> Ən müasir ət kəsimi və baytarlıq məntəqələri  İstənilən şəxs istədiyi vaxt heyvanını gətirib burada kəsdirdikdən sonra baytarlıq sertifikatı ala biləcək. Bir sözlə, əhalini <b> EKOLOJI TƏMİZ MƏHSULLARI</b> ilə təmin etmək üçün bütün şərait yaradılır.</p>
          </div>
          <div> <img className='project-image' id='project-image-4' src={TovuzAqro} alt="" /></div>
        </div>




        {/* PROJECT 7 */}
        <div className='projects' id='project-7'>
          <div><img className='project-image' id='project-image-7' src={Naxcivan} alt="" /></div>
          <div className='projects-content'>
            <h4 className='projects-title'>NAXÇIVAN</h4>
            <h1>REGİONAL SOYUQ ANBARLAR</h1>
            <p>Azərbaycanda <b>NAXÇIVANDA</b> dünya standartlarına cavab verən <b> SOYUDUCULARI </b> uğurla Çalışdıraraq təhvil verdik</p>
          </div>
        </div>

       </div>

    </section>
  )
}

export default Projects
