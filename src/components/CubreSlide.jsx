import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import ButtonLink from './ButtonLink';
import { changeDevice } from '../funciones';
import json from '../jsons/json/cubreSlide.json';
import jsonCubre from '../jsons/json/cubre.json';
import '../assets/styles/components/CubreSlide.scss';
import whiteBar from '../assets/static/white3.png';

smoothscroll.polyfill();
window.__forceSmoothScrollPolyfill__ = true;

class CubreSlide extends React.Component {
  constructor(props) {
    super(props);
    this.last = false;
  }

  componentDidMount() {
    const device = changeDevice();
    this.design(device);
    if (device === 'mobile') {
      const HEADER_TAM = 54;
      let tamaño = document.querySelector('main').clientHeight;
      const tamañoWidth = document.querySelector('main').clientWidth;
      const orientationString = window.innerWidth > window.innerHeight ? 'Landscape' : 'Primary';
      tamaño += HEADER_TAM;
      if (orientationString === 'Primary') {
        if (tamaño <= 640 || tamañoWidth <= 475) {
          const titulo = document.querySelectorAll('.section__header__titulo');
          const img = document.querySelectorAll('.father__header__img');
          const sectionWrapper = document.querySelectorAll('.main__section__wrapper');
          const sectionWrapperDescription = document.querySelectorAll('.section__wrapper__description');
          const list = document.querySelectorAll('.wrapper__last-li');
          titulo.forEach((element) => {
            element.classList.replace('text-xl', 'text-lg');
            element.classList.replace('mb-4', 'mb-1');
            element.classList.add('leading-tight');
          });
          img.forEach((element) => {
            element.classList.replace('w-1/3', 'w-14');
          });
          sectionWrapper.forEach((element) => {
            element.classList.replace('mt-2', 'mt-1');
          });
          sectionWrapperDescription.forEach((element) => {
            element.classList.replace('text-base', 'text-sm');
          });
          list.forEach((element) => {
            element.classList.replace('text-base', 'text-sm');
          });
          if (document.querySelector('.section__wrapper-link')) {
            document.querySelector('.section__wrapper-link').classList.replace('text-base', 'text-sm');
          }
          if (document.querySelector('.section__header__titulo__last')) {
            document.querySelector('.section__header__titulo__last').classList.replace('text-xl', 'text-base');
            document.querySelector('.section__header__titulo__last').classList.replace('w-5/6', 'w-8/12');
            document.querySelector('.father__bg-lineas-diagonales').classList.add('absolute', 'right-0', 'bottom-0');
            document.querySelector('.bg-lineas-diagonales__last').classList.replace('w-24', 'w-18');
            document.querySelector('.main__section__wrapper__last').classList.replace('text-base', 'text-sm');
          }
        }
      }
    } else {
      if (this.last) {
        const x = window.matchMedia('(min-width: 1024px) and (max-height: 660px)');
        const y = window.matchMedia('(min-width: 1024px) and (max-height: 550px)');
        this.mediaScreen660(x); // Call listener function at run time
        this.mediaScreen550(y);
        x.addListener(this.mediaScreen660); // Attach listener function on state changes
        y.addListener(this.mediaScreen550);
      }
    }
  }

  design = (device) => {
    if (device === 'mobile') {
      document.querySelector('.div__swiper-wrapper').classList.add('swiper-wrapper');
      const slides = document.querySelectorAll('.div__swiper-slide');
      slides.forEach((element) => {
        element.classList.add('swiper-slide');
      });
    } else {
      document.querySelector('.div__swiper-wrapper').classList.remove('swiper-wrapper');
      const slides = document.querySelectorAll('.div__swiper-slide');
      slides.forEach((element) => {
        element.classList.remove('swiper-slide');
      });
    }
  }

  mediaScreen660 = (x) => {
    if (x.matches) { // If media query matches
      document.querySelector('.cubre').style.minHeight = '130vh';
    } else {
      if (document.querySelector('.cubre').hasAttribute('style')) {
        document.querySelector('.cubre').removeAttribute('style');
      }
    }
  }

  mediaScreen550 = (y) => {
    if (y.matches) { // If media query matches
      document.querySelector('.cubre').style.minHeight = '170vh';
    } else {
      if (document.querySelector('.cubre').hasAttribute('style')) {
        document.querySelector('.cubre').removeAttribute('style');
      }
    }
  }

  render() {
    const device = changeDevice();
    const { orangeText1 } = jsonCubre;
    const { orangeText2 } = jsonCubre;
    const { bold } = jsonCubre;
    const { length } = json;
    const rows = json.map((row) => {
      const { id } = row;
      const { img } = row;
      const { alt } = row;
      const { titulo } = row;
      const { titulo2 } = row;
      const { texto } = row;
      const { lista } = row;
      let { listPosition } = row;
      const { conoceMas } = row;
      const { last } = row;
      const { doubleList } = row;
      const { textFooter } = row;
      let { tamaño } = row;
      if (!tamaño) {
        tamaño = 'h-16';
      }
      if (!listPosition) {
        listPosition = 'text-center';
      }
      if (alt) {
        if (alt.toLowerCase() === 'mano' || alt.toLowerCase() === 'valija') {
          tamaño = 'w-8 lg:w-6 h-16';
        } else if (alt.toLowerCase() === 'corazon') {
          tamaño = 'w-20 h-16';
        } else if (alt.toLowerCase() === 'fuego caja' || alt.toLowerCase() === 'vidrio roto' || alt.toLowerCase() === 'familia' || alt.toLowerCase() === 'ladron') {
          tamaño = 'h-16 lg:w-10';
        } else {
          tamaño += ' w-1/3 lg:w-1/5';
        }
      }
      if (!last) {
        return (
          <div className={`div__swiper-slide swiper-slide my-2 lg:my-0 ${length >= 4 ? 'lg:w-1/4' : 'lg:w-1/3'} ${conoceMas && 'previous'}`} key={id}>
            <div className={`div__swiper-slide-child bg-white shadow-md lg:shadow h-full lg:rounded-xl lg:mr-4 ${id === 0 && 'lg:ml-4'}`}>
              <div className='main__section__header mt-1 lg:mt-0'>
                <div className='flex justify-center relative lg:h-full'>
                  <div className={`${tamaño} flex justify-center lg:items-center father__header__img father__header__img${id} mt-4`}>
                    <img className='object-contain' src={img} alt={alt} />
                  </div>
                  <div className='w-full h-full flex items-center justify-end absolute'>
                    <div className='w-1/3'>
                      <div className='bg-lineas-diagonales w-full mt-8' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='main__section__wrapper pb-8 px-4 mt-2'>
                <h2 className='mb-4 text-xl lg:text-base montserrat-b text-dark-gray section__header__titulo'>
                  {
                    titulo2 ?
                      (
                        <>
                          {titulo}
                          {' '}
                          <br className='lg:hidden' />
                          {titulo2}
                        </>
                      ) :
                      (<b>{titulo}</b>)
                  }
                </h2>
                <p className={`text-base lg:text-xs montserrat-l text-gray section__wrapper__description ${listPosition}`} dangerouslySetInnerHTML={{ __html: texto }} />
                {
                  lista && (
                    <ul className={`list-disc text-xs montserrat-l text-gray section__wrapper__description ml-10 lg:ml-2 ${listPosition} ${doubleList && 'grid grid-cols-2'}`}>
                      {
                        lista.map((row) => {
                          const { id } = row;
                          const { texto } = row;
                          return (
                            <li className={`${!doubleList && 'w-full'}`} dangerouslySetInnerHTML={{ __html: texto }} key={id} />
                          );
                        })
                      }
                    </ul>
                  )
                }
                {conoceMas ? (
                  <div className='section__wrapper-link mt-6 lg:mb-2 montserrat-m text-base lg:text-sm animated late'>
                    {device === 'mobile' ? (
                      <ButtonLink className='slide__link-conoce cursor-pointer hover:underline' to='/home/asistencia'>CONOCÉ MAS</ButtonLink>
                    ) : (
                      <button
                        type='button'
                        className='slide__link-conoce cursor-pointer hover:underline'
                        onClick={() => {
                          document.querySelector('.asistencias').scrollIntoView({ block: 'start', behavior: 'smooth' });
                        }}
                      >
                        CONOCÉ MAS
                      </button>
                    )}
                  </div>
                ) : !json[Object.keys(json).length - 1].last && Object.keys(json).length === (parseInt(id, 10) + 1) && (
                  <div className='section__wrapper-link mt-6 lg:mb-2 montserrat-m text-base lg:text-sm animated late'>
                    {device === 'mobile' ? (
                      <ButtonLink className='slide__link-conoce cursor-pointer hover:underline' to='/home/cobrarSeguro'>Usar el seguro</ButtonLink>
                    ) : (
                      <button
                        type='button'
                        className='slide__link-conoce cursor-pointer hover:underline'
                        onClick={() => {
                          document.querySelector('.cobrar').scrollIntoView({ block: 'start', behavior: 'smooth' });
                        }}
                      >
                        Usar el seguro
                      </button>
                    )}
                  </div>
                )}
                {
                  textFooter && (
                    <div>
                      <p className={`text-xs montserrat-l text-gray section__wrapper__description mt-2 ${listPosition}`} dangerouslySetInnerHTML={{ __html: textFooter }} />
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        );
      }
      return null;
    });

    const rowLast = json.map((row) => {
      const { id, last, textLast, linkOneLine, rarePadding } = row;
      let { tamaño } = row;
      if (!tamaño) {
        tamaño = 'h-16';
      }
      if (last) {
        this.last = true;
        return (
          <div className='div__swiper-slide swiper-slide swiper-slide__last shadow-md lg:shadow text-white my-2 lg:rounded-xl lg:mt-24 lg:pt-8 lg:pb-6 lg:px-5 lg:relative lg:mb-20 lg:mx-5' key={id}>
            { device === 'desktop' && (
              <div className='absolute slide__last-desktop-orange z-20'>
                <h2 className='menu__last__titulo-desktop text-left pl-12 montserrat-m pr-32 py-2 text-base'>
                  {orangeText1}
                  <br />
                  <span className={bold === true && 'montserrat-b'}>{orangeText2}</span>
                </h2>
              </div>
            )}
            <div className='main__section__header my-2 relative lg:flex lg:ml-4'>
              <div className='section__header__father-h1 p-2 text-center'>
                <h2 className='text-xl w-5/6 lg:w-full montserrat-b section__header__titulo__last break-normal'>{textLast}</h2>
              </div>
              <div className='father__bg-lineas-diagonales lg:flex lg:items-center'>
                <div className='w-full flex items-center justify-end'>
                  <div className='bg-lineas-diagonales__last w-24' />
                </div>
              </div>
            </div>
            <div className='main__section__wrapper main__section__wrapper__last pb-8 px-4 lg:pb-0 lg:px-0'>
              { device === 'mobile' ? (
                <ul className={`wrapper__last-ul list-disc list-outside text-left relative ${linkOneLine && 'pb-10'} ${rarePadding ? 'pr-8 pl-2' : 'pl-4'}`}>
                  {
                    last.map((row) => {
                      const { id } = row;
                      const { texto } = row;
                      if ((Object.keys(last).length) - 1 === id) {
                        return (
                          <li className='wrapper__last-li text-base' key={id}>
                            <p>{texto}</p>
                            <div className={!linkOneLine ? 'animated late pr-2 mt-4 text-yellow-400' : 'animated late text-yellow-400 absolute w-full left-0 text-center mt-4 leading-none bottom-0'}>
                              <a href='tel:08005559998'>
                                0800 555 9998
                              </a>
                            </div>
                          </li>
                        );
                      }
                      return (
                        <li className='wrapper__last-li text-base' key={id}>{texto}</li>
                      );
                    })
                  }
                </ul>
              ) : (
                <ul className='wrapper__last-ul list-disc list-outside text-left ml-4 text-sm justify-around'>
                  {
                    last.map((row) => {
                      const { id } = row;
                      const { texto } = row;
                      return (
                        <div className='flex' key={id}>
                          <li className='wrapper__last-li lg:mx-2 lg:list-none lg:flex lg:items-center'>
                            {texto}
                          </li>
                          {
                            last.lenght !== id &&
                            (
                              <div className='w-3 flex items-center justify-center'>
                                <img className='h-12' alt='whiteBar' src={whiteBar} />
                              </div>
                            )
                            //<div className='vBar' />
                          }
                        </div>
                      );
                    })
                  }
                  <li className='wrapper__last-li list-none flex justify-center items-center'>
                    <div className='animated late pr-2 mt-4 text-yellow-400 lg:mt-0 lg:pr-0 lg:text-xs text-center'>
                      <a href='tel:08005559998' className='hover:underline truncate'>
                        0800 555 9998
                      </a>
                    </div>
                  </li>
                </ul>
              )}
            </div>
          </div>
        );
      }
      return null;
    });

    return (
      <div className='swiper-wrapper div__swiper-wrapper lg:flex lg:justify-around lg:flex-col'>
        { device === 'mobile' ?
          (
            <>
              {rows}
              {rowLast}
            </>
          ) :
          (
            <>
              <div className='lg:flex lg:justify-center lg:mx-2 lg:z-20'>
                {rows}
              </div>
              {rowLast}
            </>
          )}
      </div>
    );
  }
}

export default CubreSlide;
