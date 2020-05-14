import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { animateCSS, collapseMenu } from '../funciones';
import json from '../jsons/json/pages.json';
import '../assets/styles/components/HeaderMobile.scss';
import logo from '../assets/static/logo.png';
import menu from '../assets/static/menu.png';

const HeaderMobile = () => {
  const history = useHistory();
  useEffect(() => {
    document.body.classList.add('overflow-auto');
    if (document.body.classList.contains('overflow-hidden')) {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      if (document.body.classList.contains('overflow-hidden')) {
        document.body.classList.remove('overflow-hidden');
      }
    };
  }, []);
  return (
    <section className='header relative'>
      <nav className='menu__mobile flex items-center justify-between flex-wrap bg-white py-1 px-3 hover-all'>
        <div className='flex items-center flex-shrink-0 mr-6'>
          <button
            type='button'
            className='cursor-pointer w-3/6'
            onClick={() => {
              animateCSS('main', 'fadeOut', () => {
                history.push('/');
              });
              if (document.querySelector('footer')) {
                animateCSS('footer', 'fadeOut') ;
              }
            }}
          >
            <img src={logo} alt='Logo' />
          </button>
        </div>
        <div className='block lg:hidden'>
          <button type='button' onClick={() => { collapseMenu(); }} className='button__menu flex items-center px-3 py-2'>
            <img className='w-8' src={menu} alt='Menu' />
          </button>
        </div>
      </nav>
      <div id='Menu' className='menu__desplegado h-screen truncate absolute rounded-b-lg right-0'>
        <div className='text-sm text-center menu__desplegado__children pb-2 mx-2 montserrat-m'>
          <button
            type='button'
            onClick={() => {
              animateCSS('main', 'fadeOut', () => { history.push('/home/cubre'); });collapseMenu();if (document.querySelector('footer')) {
                animateCSS('footer', 'fadeOut') ;
              }
            }}
            className='block mt-4 text-gray border-solid cursor-pointer w-full'
          >
            QUE TE CUBRE
          </button>
          <hr className='mt-3 border-gray-600' />
          {json.map((row) => {
            const { id, title, noOpcionMenu, onlyDesktop, param } = row;
            let { path } = row;
            if (param) {
              path = path.split(':');
              path = path[0] + param;
            }
            if (!noOpcionMenu) {
              if (!onlyDesktop) {
                return (
                  <div key={id}>
                    <button
                      type='button'
                      onClick={() => {
                        animateCSS('main', 'fadeOut', () => { history.push(path); }); collapseMenu();if (document.querySelector('footer')) {
                          animateCSS('footer', 'fadeOut') ;
                        }
                      }}
                      className='block mt-4 text-gray border-solid cursor-pointer w-full'
                    >
                      {title}
                    </button>
                    <hr className='mt-3 border-gray-600' />
                  </div>
                );
              }
              return null;
            }
            return null;
          })}
          <button
            type='button'
            onClick={() => {
              animateCSS('main', 'fadeOut', () => { history.push('/home/contacto'); });collapseMenu();if (document.querySelector('footer')) {
                animateCSS('footer', 'fadeOut') ;
              }
            }}
            className='block mt-4 text-gray border-solid cursor-pointer w-full'
          >
            CONTACTANOS
          </button>
          <hr className='mt-3 border-gray-600' />
        </div>
      </div>
    </section>
  );
};

export default HeaderMobile;
