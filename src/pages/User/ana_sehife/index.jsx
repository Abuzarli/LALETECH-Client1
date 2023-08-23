import { Helmet } from 'react-helmet'
import {Link} from 'react-router-dom'
import { Button, Grid } from '@mui/material';
import './index.scss'
import image1 from './images/aweta.jpg'
import image2 from './images/ekin-makina.png'
import image3 from './images/soley.png'
import image4 from './images/seri-makina.png'
import image5 from './images/karaduman.png'
import image7 from './images/kartonkosebend.png'
import image8 from './images/plastikkosebend.png'
import image9 from './images/seffaf.png'
import image10 from './images/kartonkutu.png'
import image11 from './images/kartonlist.png'
import image12 from './images/cember.png'
import image13 from './images/unlu.png'
import Map from './images/map-image.png'
import EkinLogo from'./images/ekinmakinabg.png'
import Aweta from './images/awetalogobg.png' 
import Karaduman from './images/karadumanbg.png'
import SeriLogo from './images/serimakinabg.png'
import Soley from './images/soley-1.jpg'
import LALETECH from './images/Logo.png'
import VisibilityIcon from '@mui/icons-material/Visibility';



// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSitemap,faWrench,faQrcode,faGears } from '@fortawesome/free-solid-svg-icons'


// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import { Autoplay,EffectFade, Navigation, Pagination } from 'swiper/modules';


const Home = () => {
  return (
    <section>

      <Helmet>
       <meta charset="utf-8" />
       <title>LALETECH MMC | Mühəndislik Şirkəti</title>
      </Helmet>

      {/* SWIPER */}
      <div className='swiper'>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {/* SLIDE 1 */}
        <SwiperSlide>
          <div className='text-div'>
            {/* <img className='laletech' src={Laletech} alt="" /> */}
            <p className='slide-text'>Daim daha yüksək standartlara can atmaq, dəyişən tələblərə cavab vermək və bazara çıxma müddətini daha da azaltmaq məqsədimizdir</p>
          </div>

          <div className='slide-button'>
          <Link to='/products/aweta'>
            <Button  variant='contained' style={{fontSize:'20px'}}><VisibilityIcon/>MƏHSULA BAX</Button>
          </Link>
          </div>

          <div className='swiper-div'>
            <img src={image1} alt="" />
          <img className='aweta' src={Aweta} alt="" />
          </div>
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>
          <div className='text-div'>
           <p className='slide-text'>

             <br />
             <br />
              sizin üçün ən sürətli və ən etibarlı şəkildə həllər istehsal etmək üçün çalışırıq. Öz sahələrində mütəxəssis olan mühəndis, texnik və texniki işçilərimiz daim özlərini təkmilləşdirir, ən son texnologiyaların takibcisidir
           </p>
          </div>

          <div className='slide-button'>
          <Link to='/products/ekin-makina'>
            <Button variant='contained' style={{fontSize:'20px'}}><VisibilityIcon/>MƏHSULA BAX</Button>
          </Link>
          </div>
          
          <div className='swiper-div'>
          <img src={image2} alt="" />
          <img src={EkinLogo} alt="" />
          </div>
        </SwiperSlide>

        {/* SLIDE 3 */}
        <SwiperSlide>
        <div className='text-div' id='slide-3'>
            <p className='slide-text'>
              <span className='slide-title'>
                 Perforeli Kese Kağıdı Makinası
                 
                 Perforated Paper Bag Machine</span>
              </p>
              
              <ul className='slide-text'>
                <li>Otomatik Kullanım</li>
                <li>Hızlı Üretim</li>
                <li>Pencere Filmi Takma</li>
                <li>Servo Motor</li>
                <li>PLC Ekran</li>
                <li>Max Dk 600</li>                        
              </ul>                           
          </div>

          <div className='slide-button'>
          <Link to='/products/soley-makina'>
            <Button variant='contained' style={{fontSize:'20px'}}><VisibilityIcon/>MƏHSULA BAX</Button>
          </Link>
          </div>

          <div  className='swiper-div-3'>
            <img src={image3} alt="" />
            <img src={Soley} alt="" />
          </div>
        </SwiperSlide>

        {/* SLIDE 4 */}
        <SwiperSlide>
          <div className='text-div'>
            <p className='slide-text'>Təcrübəli işçi heyəti, satış sonrası xidmət və xidmətdə məsuliyyəti keyfiyyəti ilə dünya miqyasında böyük uğurlar qazanmışdır</p>
          </div>

          <div className='slide-button'>
          <Link to='/products/seri-makina'>
            <Button variant='contained' style={{fontSize:'20px'}}><VisibilityIcon/>MƏHSULA BAX</Button>
          </Link>
          </div>

          <div  className='swiper-div-4'>
            <img src={image4} alt="" />
            <img src={SeriLogo} alt="" />
            
          </div>

        </SwiperSlide>

        {/* SLIDE 5 */}
        <SwiperSlide>
          <div className='text-div'>
            <p className='slide-text'>
            <br />
            <br />
            sektorun gözləntilərinə uyğun, yüksək keyfiyyət standartlarında və müştəri ehtiyaclarına uyğun xüsusi istehsallar həyata keçirir</p>
          </div>

          <div className='slide-button'>
          <Link to='/products/karaduman-kalip'>
            <Button variant='contained' style={{fontSize:'20px'}}><VisibilityIcon/>MƏHSULA BAX</Button>
          </Link>
          </div>

          <div  className='swiper-div'>
          <img src={image5} alt=""/>
          <img src={Karaduman} alt="" />
          </div>
        </SwiperSlide>

        {/* SLIDE 6 */}
        <SwiperSlide>
          <div className='text-div'>
            
          </div >
          <div className='slide-button'>
          <Link to='/products/elave-mehsullar'>
            <Button variant='contained' style={{fontSize:'20px'}}><VisibilityIcon/>MƏHSULA BAX</Button>
          </Link>
          </div>
          <div  className='swiper-div-6'>
          <img src={LALETECH} alt=""/>
          <img src={image7} alt='' />
          <img src={image8} alt='' />
          <img src={image9} alt='' />
          <img src={image10} alt='' />
          <img src={image11} alt='' />
          <img src={image12} alt='' />
          <img src={image13} alt='' /> 

          </div>
        </SwiperSlide>                
      </Swiper>
      </div>

      {/* INFO */}
      <div className='ltech-info'>

      <Grid className='grid' container spacing={{ xs: 12, sm:6, md:4, lg:3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
     
       <Grid item xs={3}>
       <div className='info-content'>
        <FontAwesomeIcon className='fa-info' icon={faSitemap}/> 
        <h3 className='info-title'>MÜTƏXƏSSİS HEYƏTİ</h3>
        <p className='info-text'>LALETECH MMC Expert 4 mühəndis və 10 texniki xidmət personalı ilə
        <br />
       xidmət göstərir.</p>
        </div>
       </Grid>

       <Grid item xs={3}>
         <div className='info-content'>
           <FontAwesomeIcon className='fa-info' icon={faWrench}/> 
           <h3 className='info-title'>TEXNİKİ SERVİS</h3>
           <p className='info-text'>LALETCH MMC təcrübəli  mütəxəssis heyəti ilə  24 saat aktiv texniki, mobil xidmət
           <br />
           göstərə bilər.</p>
         </div>
       </Grid>

       <Grid item xs={3}>
         <div className='info-content'>
           <FontAwesomeIcon className='fa-info' icon={faQrcode}/> 
           <h3 className='info-title'style={{'textAlign':'center'}}>STOKTAN MƏHSUL
           TƏSLİMİ</h3>
           <p className='info-text'>LALETECH MMC inkişaf edən və dəyişən güclü məhsul çeşidi sayəsində məhsulları anbardan təhvil verə bilir.</p>
         </div>
       </Grid>  

       <Grid item xs={3}>
         <div className='info-content'>
           <FontAwesomeIcon className='fa-info' icon={faGears}/> 
           <h3 className='info-title'style={{'textAlign':'center'}}>KÖMƏKÇİ QURĞULARIN TƏMİNİ</h3>
           <p className='info-text'>LALETECH MMC idxal etdiyi bütün makina qrupları üçün böyük ehtiyat hissələri ehtiyatına malikdir.</p>
         </div>
       </Grid>

     </Grid>

      </div>

      <div className='map-parent'>
        <div className='map-div'>
          <div>
          <h1 className='map-title'>LALETECH TƏRƏRFİNDƏN TƏHVİL VERİLƏN AVADANLIQLAR
          <br />
          HAZIRDA AZƏRBAYCANIN BİR ÇOX BÖLGƏSİNDƏ FƏALİYYƏT GÖSTƏRMƏKDƏDİR
        </h1>
          </div>

          <div className='map'>

        <img className='map-image' src={Map} alt="" />
      </div>
        </div>

      <div className='map-content'>
        <h1 className='map-title' style={{color:'black'}}>QURULAN AVADANLIQLARDAN BƏZİLƏRİ</h1>
        <div>
          <h1 className='pro-titles'>BAKI</h1>
          <br />
          <ul className='map-list'>
           <li><b>AQRO İNVEST İSTEHSALAT MMC.</b> Fabrikinin Tam Qurulması.və.s</li>
           <li><b>CƏNNƏT AQRO MMC.</b> Banan Saraltma Soyuducusunun Qurulması.və.s</li>
           <li><b>FİBER KARTON MMC. </b> Viol,Karton qutu və Köşəbənd Avadanlığının Qurulması və.s</li>
         </ul>
        </div>

        <div>
         <h1 className='pro-titles'>XAÇMAZ</h1>
         <br />
         <ul className='map-list'>
           <li>Fiziki Şəxs Müzəffər bəy <b>EKİN MAKİNA</b> Plastik yeşik Makinasının Avadanlığın Qurulması və.s</li>
         </ul>
        </div>

        <div>
         <h1 className='pro-titles'>TOVUZ</h1>
         <br />
         <ul className='map-list'>
           <li><b>TOVUZ AQRO PARK.</b> Heyvandarlıq Kompleksinin Qurulması və.s</li>
           <li><b>TOVUZ KARTON MMC.</b> Karton Qutu, Köşəbənd, Viol, İnyeksiya Avadanlığının Qurulması və.s</li>
         </ul>
        </div>

        <div>
         <h1 className='pro-titles'>LƏNKƏRAN</h1>
         <br />
         <ul className='map-list'>
           <li><b>MİRAN 19 ÇİYƏLƏK ŞİRKƏTİ</b> Plastik yeşik makinasının  Qurulması və.s</li>
         </ul>
        </div>

        <div>
         <h1 className='pro-titles'>NAXÇIVAN</h1>
         <br />
         <ul className='map-list'>
           <li><b>ŞƏRUR 3 MMC</b> Karton qutu və Kağız Klok makinasının qurulması və.s</li>
         </ul>
        </div>

        <div>
         <h1 className='pro-titles'>YEVLAX</h1>
         <br />
         <ul className='map-list'>
           <li><b>BİO MMC.</b> Karton Qutu və Qutu Yapışdırma Avadanlıqlarının Qurulması </li>
         </ul>
        </div>

        <div>
        <h1 className='pro-titles'>QUBA</h1>
        <br />
        <ul className='map-list'>
          <li><b>CƏNNƏT AQRO.</b> Plastik Yeşik Fabrikasının Qurulması,Karton Qutu Avadanlığı,Köşəbənd Avadanlığı,Meyvə Çeşidləmə Avadanlıqlarının Qurulması və.s </li>
        </ul>
        </div>

        <div>
        <h1 className='pro-titles'>ŞAMAXI</h1>
        <br />
        <ul className='map-list'>
          <li> XAMMAL VƏ ƏLAVƏ MƏHSULLARIN SATIŞI və.s</li>
        </ul>
        </div>

        <div>
        <h1 className='pro-titles'>GÖYÇAY</h1>
        <br />
        <ul className='map-list'>
          <li> XAMMAL VƏ ƏLAVƏ MƏHSULLARIN SATIŞI və.s </li>
        </ul>
        </div>

      </div>

      </div>

    </section>
  )
}

export default Home
