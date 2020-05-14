import React from 'react';
import { changeDevice } from '../funciones';
import json from '../jsons/json/home.json';
import '../assets/styles/components/Home.scss';
import logo from '../assets/static/logo.png';
import ArrowBottom from './ArrowBottom';
import arrowSimple from '../assets/static/arrowSimple.png';

class Home extends React.Component {
  render() {
    const { imgPrincipal } = json;
    const { img } = json;
    const { texto } = json;
    const { texto2 } = json;
    const { altPrincipal } = json;
    const { alt } = json;
    const { className } = json;
    return (
      <main className='animated fadeIn overflow-y-hidden overflow-x-hidden swiper-container-h ' id='home'>
        <div className='flex flex-wrap w-full lg:hidden'>
          <div className='justify-center'>
            <img className='absolute z-10 w-16 sm:w-24 mt-2 ml-2' src={logo} alt='Galicia Seguros' />
          </div>
        </div>
        <div className='flex flex-wrap relative'>
          <div className='w-full'>
            <img className={`object-cover ${className} w-full home__img`} src={imgPrincipal} alt={altPrincipal} />
          </div>
          <div className='absolute home__seguro-header lg:w-full'>
            <div className='lg:ml-48'>
              <img className='object-contain h-48 lg:h-64 w-auto lg:w-auto home__img-hogar' src={img} alt={alt} />
            </div>
            <div className='hidden lg:block w-full absolute h-2 home__linea left-0' />
          </div>
        </div>
        <div className='flex flex-wrap mt-24 lg:mt-4'>
          <div className='home__bottom-parent w-full text-center mb-4 lg:text-left'>
            <p className='home__bottom-p text-xl lg:text-2xl xl:text-4xl montserrat-l text-dark-gray'>
              {
                texto2 ?
                  (
                    <>
                      {texto}
                      {' '}
                      <br className='lg:hidden' />
                      {texto2}
                    </>
                  ) :
                  (<b>{texto}</b>)
              }
            </p>
          </div>
          <div className='w-full lg:absolute home__button-arrow'>
            <div className='flex justify-center'>
              { changeDevice() === 'mobile' ? (
                <button type='button' className='goMenu cursor-pointer animated late'>
                  <svg className='w-12 lg:hidden home__arrow-img' alt='Arrow Button' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 172 172' style={{ fill: '#000000' }}>
                    <g fill='none' fillRule='nonzero' stroke='none' strokeWidth='1' strokeLinecap='butt' strokeLinejoin='miter' strokeMiterlimit='10' strokeDasharray='' strokeDashoffset='0' fontFamily='none' fontWeight='none' fontSize='none' textAnchor='none'>
                      <path d='M0,172v-172h172v172z' fill='none' />
                      <g fill='rgb(169,156,149)'><path d='M86,6.88c-43.65844,0 -79.12,35.46156 -79.12,79.12c0,43.65844 35.46156,79.12 79.12,79.12c43.65844,0 79.12,-35.46156 79.12,-79.12c0,-43.65844 -35.46156,-79.12 -79.12,-79.12zM86,13.76c39.93625,0 72.24,32.30375 72.24,72.24c0,39.93625 -32.30375,72.24 -72.24,72.24c-39.93625,0 -72.24,-32.30375 -72.24,-72.24c0,-39.93625 32.30375,-72.24 72.24,-72.24zM51.2775,72.1325c-0.14781,0.02688 -0.29562,0.06719 -0.43,0.1075c-1.29,0.22844 -2.32469,1.16906 -2.6875,2.41875c-0.36281,1.26313 0.01344,2.60688 0.9675,3.49375l34.4,34.4c0.645,0.67188 1.54531,1.04813 2.4725,1.04813c0.92719,0 1.8275,-0.37625 2.4725,-1.04813l34.4,-34.4c1.37063,-1.37062 1.37063,-3.57437 0,-4.945c-1.37062,-1.37062 -3.57437,-1.37062 -4.945,0l-31.9275,31.9275l-31.9275,-31.9275c-0.71219,-0.76594 -1.74687,-1.15562 -2.795,-1.075z' /></g>
                    </g>
                  </svg>
                  <img className='w-10 hidden lg:block hover:scale-2 hover-all lg:z-30' src={arrowSimple} alt='Arrow Button' />
                </button>
              ) : (
                <ArrowBottom goTo='.cubre' />
              )}
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;