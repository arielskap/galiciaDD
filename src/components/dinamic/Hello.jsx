import React from 'react';

const Hello = () => {
  return (
    <div className='text-center w-full mb-2 lg:absolute' style={{ top: '75px', left: '75px' }}>
      <div className='space-y-1 lg:w-2/5'>
        <p className='text-lg lg:text-xl montserrat-m'>{'Hola {{firstName}} {{LastName}}!'}</p>
        <p className='montserrat-l lg:text-lg'>Mira lo que tenemos para vos...</p>
      </div>
    </div>
  );
};

export default Hello;
