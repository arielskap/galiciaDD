import React from 'react';
import '../assets/styles/components/Llamar.scss';
import phone from '../assets/static/phone4.png';

const Llamar = (props) => {
  const { alt } = props;
  const { hrefTel } = props;
  const { tel } = props;
  const { horario } = props;
  const { es } = props;
  return (
    <div className='flex lg:h-full lg:items-center'>
      <img className='contacto__burbuja-phone w-12 h-12' src={phone} alt={alt} />
      <div className='flex-col pl-1 lg:w-full'>
        <p><a className='no-underline num montserrat-eb cursor-pointer' href={hrefTel}>{tel}</a></p>
        <p className='horario montserrat-l'>
          {horario}
        </p>
        {es === '0' && (
          <>
            <p><a className='contacto__email montserrat-l text-sm text-gray lg:break-words' href='mailto:infogalicia@galiciaseguros.com.ar'>infogalicia@galiciaseguros.com.ar</a></p>
            <a className='contacto__email montserrat-l text-sm text-gray lg:break-words' href='https://www.facebook.com/GaliciaSeguros'>www.facebook.com/GaliciaSeguros</a>
          </>
        )}
      </div>
    </div>
  );
};

export default Llamar;
