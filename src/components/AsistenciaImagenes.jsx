import React from 'react';
import json from '../jsons/json/asistenciaImagenes.json';

const AsistenciaImagenes = (props) => {
  const { indexed } = props;
  const { posicion } = props;
  const { estado } = props;
  const { alt } = json[indexed].children[posicion];
  const { img } = json[indexed].children[posicion].switch[estado];
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='h-12 w-12'>
        <img src={img} alt={alt} />
      </div>
      <p className='text-center text-dark-gray text-xxs-pt lg:text-sm montserrat-r my-2 whitespace-normal'>{alt}</p>
    </div>
  );
};

export default AsistenciaImagenes;
