import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TeneEnCuenta from '../components/TeneEnCuenta';
import PreventipsConjunto from '../components/PreventipsConjunto';
//import Anticipate from '../components/Anticipate';
//import Seguros from '../components/Seguros';
import ButtonLink from '../components/ButtonLink';
import { changeDevice } from '../funciones';
import json from '../jsons/json/noCubre.json';
import '../assets/styles/components/NoCubre.scss';

const NoCubre = () => {
  const device = changeDevice();
  const { has } = json;
  const { hr } = json;
  const { hasPreventipsConjunto } = json;
  const { pathname } = useLocation();
  useEffect(() => {
    let goTo = pathname;
    goTo = goTo.split('/');
    if (goTo[3]) {
      [,,, goTo] = goTo;
      document.querySelector(`#${goTo}`).scrollIntoView();
    } else {
      goTo = null;
    }
  }, [pathname]);
  return (
    <main className='noCubre animated fadeIn lg:relative lg:mt-6'>
      <div className='swiper__wrapper'>
        <div className='slide__first'>
          <TeneEnCuenta />
          { (device === 'mobile' || hasPreventipsConjunto) &&
            (
              <PreventipsConjunto />
            )}
          {has === 'texto' && (
            <div className='montserrat-b m-4 lg:mb-4 lg:mx-4 lg:mt-12'>
              <h2 className='py-1 border-t-2 border-dotted'>Sistemas de alarmas.</h2>
              <h2 className='py-1 border-t-2 border-dotted'>Cámaras de seguridad monitoreadas.</h2>
              <h2 className='py-1 border-b-2 border-t-2 border-dotted'>Personal de vigilancia.</h2>
            </div>
          )}
          {/*device === 'desktop' && has === 'anticipate' && (
            <section className='tips__anticipate-parent lg:h-30vh lg:mt-8'>
              <div className='tips__anticipate px-3 mb-12 bg-white hidden lg:block lg:mb-0 lg:h-full'>
                <Anticipate />
              </div>
            </section>
          )*/}
          {hr === true && device === 'mobile' && (
            <hr className='my-10 mx-4' />
          )}
          {/*{device === 'mobile' &&
            (
              <div className='lg:hidden'>
                <Seguros />
              </div>
            )}*/}
        </div>
        <div className='slide__secondary' />
      </div>
      {device === 'mobile' && (
        <div className='footer-noCubre text-center'>
          <ButtonLink
            className='back__button w-12'
            to='/home/cubre'
            animation='fadeOut faster'
          >
            <svg className='back__img object-contain' alt='back' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 172 172' style={{ fill: '#000000' }}>
              <g fill='none' fillRule='nonzero' stroke='none' strokeWidth='1' strokeLinecap='butt' strokeLinejoin='miter' strokeMiterlimit='10' strokeDasharray='' strokeDashoffset='0' fontFamily='none' fontWeight='none' fontSize='none' textAnchor='none'>
                <path d='M0,172v-172h172v172z' fill='none' />
                <g fill='rgb(169,156,149)'><path d='M86,6.88c-43.65844,0 -79.12,35.46156 -79.12,79.12c0,43.65844 35.46156,79.12 79.12,79.12c43.65844,0 79.12,-35.46156 79.12,-79.12c0,-43.65844 -35.46156,-79.12 -79.12,-79.12zM86,13.76c39.93625,0 72.24,32.30375 72.24,72.24c0,39.93625 -32.30375,72.24 -72.24,72.24c-39.93625,0 -72.24,-32.30375 -72.24,-72.24c0,-39.93625 32.30375,-72.24 72.24,-72.24zM51.2775,72.1325c-0.14781,0.02688 -0.29562,0.06719 -0.43,0.1075c-1.29,0.22844 -2.32469,1.16906 -2.6875,2.41875c-0.36281,1.26313 0.01344,2.60688 0.9675,3.49375l34.4,34.4c0.645,0.67188 1.54531,1.04813 2.4725,1.04813c0.92719,0 1.8275,-0.37625 2.4725,-1.04813l34.4,-34.4c1.37063,-1.37062 1.37063,-3.57437 0,-4.945c-1.37062,-1.37062 -3.57437,-1.37062 -4.945,0l-31.9275,31.9275l-31.9275,-31.9275c-0.71219,-0.76594 -1.74687,-1.15562 -2.795,-1.075z' /></g>
              </g>
            </svg>
          </ButtonLink>
        </div>
      )}
    </main>
  );
};

export default NoCubre;
/* <ArrowBottom goTo={goTo} /> */
