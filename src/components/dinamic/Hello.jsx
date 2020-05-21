import React from 'react';

const Hello = () => {
  return (
    <div className='text-center w-full mb-2 lg:absolute lg:w-full lg:h-full lg:flex lg:justify-center lg:items-center'>
      <div className='space-y-1 lg:shadow-xl lg:bg-white lg:bg-opacity-75 lg:w-2/5 lg:rounded-lg lg:py-3'>
        <p className='text-lg lg:text-xl montserrat-m'>{'Hola {{firstName}} {{LastName}}!'}</p>
        <p className='montserrat-l lg:text-lg'>Mira lo que tenemos para vos...</p>
      </div>
    </div>
  );
};

export default Hello;
