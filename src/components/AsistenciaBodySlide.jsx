import React from 'react';
import json from '../jsons/json/asistenciaBodySlide.json';

const AsistenciaBodySlide = (props) => {
  const { posicion } = props;
  const { indexed } = props;
  const { texto } = json[indexed].children[posicion];
  const { titulo } = json[indexed].children[posicion];
  return (
    <>
      {titulo && <h4 className='montserrat-b text-dark-gray text-lg my-2'>{titulo}</h4>}
      <p className='montserrat-l text-gray lg:text-dark-gray'>
        {texto}
      </p>
    </>
  );
};

export default AsistenciaBodySlide;
