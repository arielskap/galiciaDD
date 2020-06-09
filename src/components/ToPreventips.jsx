import React from 'react';
import ButtonLink from './ButtonLink';
import { changeDevice } from '../funciones';
import json from '../jsons/json/toPreventips.json';
import jsonPages from '../jsons/json/pages.json';
import '../assets/styles/components/ToPreventips.scss';

const ToPreventips = () => {
  const device = changeDevice();
  const { small } = json;
  let { titulo } = json;
  let { texto } = json;
  let path;
  let className;
  for (let i = 0; i < jsonPages.length; i++) {
    const element = jsonPages[i];
    if (element.toPreventips) {
      path = element.path;
    }
  }
  if (titulo) {
    titulo = <h3 className='preventips__anticipate-first text-2xl lg:mt-24 lg:text-3xl'>{`${titulo}, {{firstName}}`}</h3>;
  }
  if (typeof texto === 'object') {
    className = 'lg:mr-64 lg:pr-32';
    texto = texto.map((row) => {
      const { id } = row;
      const { bold } = row;
      let { oracion } = row;
      if (bold) {
        oracion = <span className='montserrat-b'>{oracion}</span>;
      }
      return (
        <p key={id} className={`lg:text-2xl inline ${small}`}>
          {oracion}
          {' '}
        </p>
      );
    });
  } else {
    texto = <p className='lg:text-2xl text-lg'>{texto}</p>;
  }
  return (
    <div className='main__preventips__anticipate lg:w-full lg:absolute lg:h-full mb-2'>
      <div className='lg:w-full lg:h-full orangePrevencion'>
        <div className='preventips__anticipate text-white pt-4 pl-3 pb-2 lg:pl-12 lg:leading-none'>
          {titulo}
          <div className={`leading-none ${className}`}>
            {texto}
          </div>
        </div>
      </div>
      { device === 'mobile' && (
        <div className='pt-4 flex justify-center items-center lg:hidden'>
          <ButtonLink
            className='preventips__anticipate__button rounded-full flex items-center justify-center border-2 w-18 h-18 text-xs animated late mt-2'
            to={path}
          >
            CONOCÉ COMO
          </ButtonLink>
        </div>
      )}
    </div>
  );
};

export default ToPreventips;
