import { Button, TextField } from '@mui/material'
import { Helmet } from 'react-helmet'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faIdBadge, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ContactValidation } from '../../../validation/contact.validation'
import Swal from 'sweetalert2'


const Contact = () => {

  function handleSubmit(values, actions) {
    console.log(values);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    });
    actions.resetForm();
  }








  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u20ol8r', 
    'template_vtwnbwk', form.current, 
     'oCNwe8-9bJ9i7tsK2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  const onSave = (event) => {
    sendEmail(event)
  }
  return (
    <section className='contact-section'>
      {/* HELMET */}
      <Helmet>
       <meta charset="utf-8" />
       <title> Əlaqə-LALETECH MMC | LALETECH MMC | Mühəndislik Şirkəti</title>
       </Helmet>




       {/* CONTACT US */}
       <div>
        <div>
        <h3 className='form-title'>BİZİMLƏ ƏLAQƏ
        <div className='line'></div>
        </h3>
        <p className='form-content'>Aşağıdakı formu əksiksiz dolduraraq bizimlə İstədiyiniz hər mövzuda əlaqə qura bilərsiniz.</p>
        </div>

        {/* FORM */}
        <form className='form' ref={form} onSubmit={onSave}>
          <div>
            
           <TextField id="outlined-basic" label="Ad Soyad" variant="outlined" name='name' type='text' />
           
            <TextField id="outlined-basic" label="E-Mail Ünvanınız" variant="outlined" type="email" name="email" />
            
           <TextField  id="outlined-basic" label="Telefon Nömrəniz" variant="outlined" name='number'  />

          </div>
          <div>
           <TextField  className='theme' id="outlined-basic" label="Mövzu" variant="outlined" name="subject"  />

          </div>
          <div>
           <TextField
             className='txt-area'
             id="outlined-multiline-static"
             label="Mesajınız"
             multiline
             rows={4}
             name='message'

           />
          </div>
          <div>
           <Button style={{fontSize:'20px'}} className='send-btn' variant="contained" type="submit" value="Send Message" >Göndər</Button>
          </div>
        </form>
       </div>

       {/* CONTACT INFO */}
       <div className='contact_us'>
        <ul className='contact-text'>
          <li className='addres'>
            <FontAwesomeIcon className='faBadge' icon={faLocationDot}/> 
            <div className='contact-content'>
              <p>ÜNVAN</p>
              <span>Bakı şəhəri,Binəqədi rayonu, 
                <br />
                Dərnəgül yaşayış sahəsi 3117</span>
            </div>
          </li>
          <li>
            <FontAwesomeIcon className='faBadge' icon={faIdBadge}/>
            <div className='contact-content'>
              <p>TELEFON</p>
              <span>
               +994 50 555 25 50
               <br />
               +994 70 555 55 90
              </span>
            </div>
            </li>
          <li><FontAwesomeIcon className='faIcon' icon={faEnvelope}/>
          <div className='contact-content'>
            <p>E-MAIL</p>
            <span>
             laletech4@gmail.com
            </span>
          </div>
          </li>
        </ul>
       </div>

    </section>
  )
}

export default Contact
