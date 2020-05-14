
import React from 'react';
import json from '../jsons/json/noCubreImg.json';

const NoCubreImg = (props) => {
  const { estado } = props;
  const { posicion } = props;
  const { alt } = json[posicion];
  const { imgOn } = json[posicion];
  const { imgOff } = json[posicion];
  const src = estado === 1 ? imgOn : imgOff;
  return (
    <img src={src} alt={alt} />
  );
};

export default NoCubreImg;
