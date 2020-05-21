import React from 'react';

const InformacionCiudad = () => {
  return (
    <div className='lg:my-6'>
      <p className='montserrat-l text-base lg:text-2xl'>
        Sentite
        {' '}
        <span className='montserrat-b'>
          segur
          {'{{gender}}'}
        </span>
        {' '}
        en
        {' '}
        {'{{city}}'}
        {' '}
        vayas como vayas
        {' '}
      </p>
    </div>
  );
};

export default InformacionCiudad;
