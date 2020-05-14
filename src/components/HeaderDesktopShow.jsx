import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { animateCSS, collapseMenuDesktop } from '../funciones';
import json from '../jsons/json/pages.json';
import '../assets/styles/components/HeaderDesktop.scss';
import logo from '../assets/static/logo.png';
import facebook from '../assets/static/facebook.png';
import linkedin from '../assets/static/linkedin.png';
import youtube from '../assets/static/youtube.png';
import menuDesk from '../assets/static/menuDesk.png';
import phoneMin from '../assets/static/phoneMin.png';
import correo from '../assets/static/correo.png';
import GoTop from './GoTop';

smoothscroll.polyfill();
window.__forceSmoothScrollPolyfill__ = true;

class HeaderDesktop extends React.Component {
  constructor(props) {
    super(props);
    window.onscroll = () => { this.scrollFunction(); };
  }

  scrollFunction = () => {
    const goTop = document.querySelector('.goTop');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      goTop.classList.remove('fadeOut');
      goTop.style.display = 'block';
      if (!goTop.classList.contains('flag')) {
        animateCSS('.goTop', 'fadeIn', () => {
          goTop.classList.replace('noFlag', 'flag');
        });
      }
    } else {
      animateCSS('.goTop', 'fadeOut', () => {
        if (goTop.classList.contains('flag')) {
          goTop.style.display = 'none';
          goTop.classList.replace('flag', 'noFlag');
        }
      });
    }
  };

  componentWillUnmount() {
    window.onscroll = () => { };
  }

  componentDidMount() {
    const content = document.querySelector('.menu__desplegado-desktop');
    content.style.maxWidth = `${content.scrollWidth + 100}px`;
  }

  render() {
    let asistenciaExist = false;
    return (
      <div className='absolute h-screen w-full'>
        <div className='ml-2 mt-2 fixed left-0 z-20'>
          <button type='button' className='cursor-pointer w-3/6' onClick={() => { document.getElementById('home').scrollIntoView({ block: 'start', behavior: 'smooth' }); }}>
            <img className='w-24' src={logo} alt='logo' />
          </button>
        </div>
        <div className='flex mt-3 mr-12 fixed right-0 z-20'>
          <div className='flex mr-4'>
            <div className='mr-1'>
              <button type='button' className='w-10 h-10 p-1 rounded-full shadow-md bg-white hover:bg-orange-300 hover-all' onClick={() => { window.location.href = 'https://www.facebook.com/GaliciaSeguros'; }}>
                <img className='object-contain w-full' src={facebook} alt='facebook' />
              </button>
            </div>
            <div className='mr-1'>
              <button type='button' className='w-10 h-10 p-1 rounded-full shadow-md bg-white hover:bg-orange-300 hover-all' onClick={() => { window.location.href = 'https://cl.linkedin.com/company/galicia-seguros-grupo-financiero-galicia-banco-galicia-'; }}>
                <img className='object-contain w-full' src={linkedin} alt='linkedin' />
              </button>
            </div>
            <div>
              <button
                type='button'
                className='w-10 h-10 p-1-2 rounded-full shadow-md bg-white hover:bg-orange-300 hover-all'
                onClick={() => { window.location.href = 'https://www.youtube.com/channel/UCazMzLHs9UTit9wDShfE2_g'; }}
              >
                <img className='object-contain w-full' src={youtube} alt='youtube' />
              </button>
            </div>
          </div>
          <div className='ml-2'>
            <button type='button' onClick={() => { collapseMenuDesktop(); }} className='w-10 h-10 rounded-full shadow-md p-1 bg-white button__menu hover:bg-orange-300 hover-all flex justify-center active'>
              <img className='object-contain w-full' src={menuDesk} alt='menu' />
            </button>
          </div>
        </div>
        <div className='menu__desplegado-desktop h-screen shadow-2xl block flex-grow fixed right-0 rounded-tl-lg z-40'>
          <div className='text-sm text-center menu__desplegado__children pb-2 px-4'>
            <hr className='mt-2' />
            <button type='button' onClick={() => { document.querySelector('.cubre').scrollIntoView({ block: 'start', behavior: 'smooth' }); }} className='block text-gray mr-4 cursor-pointer my-4 hover:bg-orange-300 px-2'>
              QUE TE CUBRE
            </button>
            <hr />
            {json.map((row) => {
              const { id } = row;
              const { title } = row;
              const { className } = row;
              const { noOpcionMenu } = row;
              const { onlyMobile } = row;
              if (title === 'ASISTENCIAS') asistenciaExist = true;
              if (!noOpcionMenu) {
                if (!onlyMobile) {
                  return (
                    <div key={id}>
                      <button type='button' onClick={() => { document.querySelector(className).scrollIntoView({ block: 'start', behavior: 'smooth' }); }} className='block text-gray mr-4 cursor-pointer my-4 hover:bg-orange-300 px-2'>
                        {title}
                      </button>
                      <hr />
                    </div>
                  );
                }
                return null;
              }
              return null;
            })}
            {asistenciaExist && (
              <button type='button' onClick={() => { document.querySelector('.contacto').scrollIntoView({ block: 'start', behavior: 'smooth' }); }} className='block text-gray mr-4 cursor-pointer my-4 hover:bg-orange-300 px-2'>
                CONTACTO
              </button>
            )}
            <hr />
          </div>
        </div>
        <div className='ml-4 fixed h-full z-10'>
          <div className='flex flex-col justify-center h-full'>
            <div className='mb-2'>
              <button type='button' className='w-10 h-10 rounded-full shadow-md p-3 bg-white hover:bg-orange-300 hover-all' href='tel:'>
                <img className='object-scale-down w-full h-full' src={phoneMin} alt='Telefono' />
              </button>
            </div>
            <div className='mt-2'>
              <button type='button' className='w-10 h-10 p-3 rounded-full shadow-md bg-white hover:bg-orange-300 hover-all' href='email:'>
                <img className='object-scale-down w-full' src={correo} alt='Correo' />
              </button>
            </div>
          </div>
        </div>
        <GoTop />
      </div>
    );
  }
}

export default HeaderDesktop;
