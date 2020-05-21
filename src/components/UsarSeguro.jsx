import React from 'react';
import tel from '../assets/static/ICONO TELEFONO.png';
import web from '../assets/static/ICONO WEB.png';
import face from '../assets/static/ICONO FACEBOOK.png';
import mail from '../assets/static/ICONO MAIL.png';
import wp from '../assets/static/icono whatsapp.png';
import json from '../jsons/json/usarSeguro.json';

const UsarSeguro = () => {
  const { lapsoTiempo } = json;
  return (
    <div className='usarSeguro mb-12 px-2 lg:px-0 lg:mb-24'>
      <h2 className='text-center mb-2 montserrat-b text-lg lg:text-2xl'>¿Qué hacer en caso que tengas que usar el seguro?</h2>
      <p className='text-center mb-8 montserrat-l text-sm'>
        Te tenes que comunicar con nosotros, dentro de
        {' '}
        {lapsoTiempo}
        {' '}
        de ocurrido el hecho, por alguno de estos medios:
      </p>
      <div className='grid grid-cols-1 row-gap-10 col-gap-4 md:grid-cols-2 lg:grid-cols-5 lg:gap-4'>
        <div>
          <div className='h-12'>
            <img className='object-contain w-full h-full' src={tel} alt='Telefono' />
          </div>
          <div className='mt-3 text-center'>
            <a target='_blank' rel='noopener noreferrer' href='tel:08005559998' className='montserrat-b'>0800-555-9998</a>
            <div className='montserrat-l text-sm'>
              <p>lunes a viernes</p>
              <p>8 a 20 hs.</p>
            </div>
          </div>
        </div>
        <div>
          <div className='h-12'>
            <img className='object-contain w-full h-full' src={wp} alt='WhatsApp' />
          </div>
          <div className='mt-3 text-center'>
            <a target='_blank' rel='noopener noreferrer' href='https://web.whatsapp.com/send?phone=+5491132548281 ' className='montserrat-b'>WhatsApp</a>
          </div>
        </div>
        <div>
          <div className='h-12'>
            <img className='object-contain w-full h-full' src={web} alt='Web' />
          </div>
          <div className='mt-3 text-center break-words'>
            <a target='_blank' rel='noopener noreferrer' href='http://www.galiciaseguros.com.ar' className='montserrat-b'>www.galiciaseguros.com.ar</a>
          </div>
        </div>
        <div>
          <div className='h-12'>
            <img className='object-contain w-full h-full' src={face} alt='Facebook' />
          </div>
          <div className='mt-3 text-center'>
            <a target='_blank' rel='noopener noreferrer' href='http://www.facebook.com/galiciaSeguros' className='montserrat-b'>/GaliciaSeguros</a>
          </div>
        </div>
        <div>
          <div className='h-12'>
            <img className='object-contain w-full h-full' src={mail} alt='Email' />
          </div>
          <div className='mt-3 text-center break-words'>
            <a target='_blank' rel='noopener noreferrer' href='mailto:info@galiciaseguros.com.ar' className='montserrat-b'>info@galiciaseguros.com.ar</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsarSeguro;
