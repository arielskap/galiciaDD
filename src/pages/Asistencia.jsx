import React from 'react';
import Swiper from 'swiper';
import AsistenciaSlide from '../components/AsistenciaSlide';
import { changeDevice } from '../funciones';
import json from '../jsons/json/asistencia.json';
import '../assets/styles/components/Asistencia.scss';
import asistencia from '../assets/static/asistencia.png';
import phone from '../assets/static/phone4.png';
import wp from '../assets/static/icono whatsapp.png';
import ButtonLink from '../components/ButtonLink';

class Asistencia extends React.Component {
  constructor(props) {
    super(props);
    const { titulo } = json.body[0];
    this.state = {
      numero: 1,
      texto: titulo,
    };
  }

  componentDidMount() {
    const device = changeDevice();
    new Promise((resolve, reject) => {
      setTimeout(() => {
        // eslint-disable-next-line no-unused-vars
        const swiperInfo = new Swiper('.info__swiper-container', {
          spaceBetween: 50,
          pagination: {
            el: '.swiper-pagination-a',
            clickable: true,
            renderBullet(index, className) {
              const { titulo } = json.body[index];
              if (device === 'mobile') {
                return `<span class="bullets-style ${className} hover-all hover:scale-1">${index + 1}</span>`;
              }
              return `<div class="bullets-parent flex items-center ${className} hover-all hover:scale-1 lg:z-30 lg:relative">
                <span class="bullets-style p-2">${index + 1}</span>
                <p class="mb-2 montserrat-b lg:red-color ml-2">${titulo}</p>
              </div>`;
            },
          },
        });
        swiperInfo.on('slideNextTransitionStart', () => {
          for (let i = 0; i < json.body.length; i++) {
            if (document.querySelector('.swiper-slide-active').classList.contains(`swiper-slide-${i}`)) {
              this.setState({
                numero: i + 1,
                texto: json.body[i].titulo,
              });
              break;
            }
          }
        });
        swiperInfo.on('slidePrevTransitionStart', () => {
          for (let i = 0; i < json.body.length; i++) {
            if (document.querySelector('.swiper-slide-active').classList.contains(`swiper-slide-${i}`)) {
              this.setState({
                numero: i + 1,
                texto: json.body[i].titulo,
              });
              break;
            }
          }
        });
        resolve(1);
      }, 100);
    })
      .then(
        () => {
          const bullets = document.querySelectorAll('.bullets-parent');
          for (let i = 0; i < bullets.length; i++) {
            const element = bullets[i];
            element.addEventListener('click', () => {
              this.changeStates(i);
            });
          }
        },
      );
  }

  changeStates(posicion) {
    const { titulo } = json.body[posicion];
    this.setState(
      {
        numero: posicion + 1,
        texto: titulo,
      },
    );
  }

  render() {
    const device = changeDevice();
    const { texto } = this.state;
    const { numero } = this.state;
    const { hasWp } = json;
    return (
      <main className='asistencias info animated fadeIn overflow-hidden lg:border-solid lg:border-t lg:border-gray-300'>
        <div className='info__div-child lg:flex lg:relative lg:border-b-2 lg:border-gray-200 lg:mb-12'>
          <div className='info__child relative pt-2 lg:w-4/12 lg:z-10 lg:flex'>
            <div className='flex content-center lg:ml-4' id='Logo'>
              <div>
                <img className='info__principal-img p-2 lg:object-contain' src={asistencia} alt='Info' />
              </div>
              <h1 className='info__principal-tittle ml-2 p-2 text-2xl leading-none text-dark-gray'>
                {json.title ? json.title :
                  (
                    <p>
                      Asistencias para
                      <br />
                      tu casa
                    </p>
                  )}
              </h1>
            </div>
            <div className='info__header absolute right-0 lg:relative lg:mt-2'>
              <div className='flex content-end justify-end w-full h-10'>
                <div className='cuadrado w-40 h-10' />
              </div>
              <div className='info__header__linea flex justify-end w-full h-8 absolute'>
                <div className='w-1/2 lg:w-full' id='linea-diagonal' />
              </div>
            </div>
          </div>
          <div className='hidden lg:block lg:absolute lg:left-0 lg:h-full lg:flex lg:items-center lg:z-10 lg:w-1/3'>
            <p className='text-6xl info__left-text text-red-800 lg:montserrat-b lg:ml-6'>
              {numero}
            </p>
            <h3 className='text-2xl ml-4 leading-tight info__left-title lg:montserrat-b'>
              {texto}
            </h3>
          </div>
          <div className='mx-6 my-6 lg:w-8/12 lg:mx-0 lg:mt-0 lg:mb-0 lg:flex'>
            <div className='info__swiper-parent lg:ml-12 lg:mt-6 lg:mb-12 lg:w-1/2 lg:flex lg:flex-col-reverse'>
              <div className='info__swiper-container container flex justify-center h-full'>
                <AsistenciaSlide />
              </div>
              <div className='relative'>
                <hr className='info__swiper-hr hidden lg:block lg:absolute lg:w-full lg:z-10' />
                <hr className='hidden lg:block lg:absolute lg:w-full lg:z-10' />
              </div>
              <div className='swiper-pagination-a swiper-pagination-asistencia w-full lg:w-auto left-0 mt-2 lg:flex-col lg:z-10 lg:ml-4' />
            </div>
            <div className='div-tapar' />
          </div>
        </div>
        <hr className='mx-6 mt-6 mb-4 separador lg:hidden' />
        <div className='info__middle mx-4 lg:bg-white'>
          <div className='info__middle-child lg:grid lg:grid-cols-3 lg:gap-4'>
            <div className='middle-child-asist'>
              <h1 className='info__middle-tittle text-center text-dark-gray text-2xl'>¿Cómo pido asistencia?</h1>
              <div className='hidden lg:inline-flex lg:justify-center h-1 lg:ml-4 lg:w-full'>
                <div className='w-48 h-full bg-black rounded-full' />
                <div className='w-8 h-full bg-black ml-6 rounded-full' />
              </div>
            </div>
            {hasWp ? (
              <div className='flex lg:justify-center lg:items-center flex-col'>
                <div className='flex lg:justify-center lg:items-center'>
                  <img className='w-12 h-12 lg:w-18 lg:h-18' src={phone} alt='Atencion al Cliente' />
                  <div className='flex-col pl-2'>
                    <p><a id='num' className='no-underline text-dark-gray montserrat-eb lg:text-lg' href='tel:08005552272'>0800 555 CASA (2272)</a></p>
                    <p className='text-gray montserrat-l text-sm lg:text-base'>Llamá las 24hs, los 365 días del año y solicitá el servicio que necesitás.</p>
                  </div>
                </div>
                <div className='flex lg:justify-center lg:items-center mt-4'>
                  <img className='w-12 h-12 lg:w-18 lg:h-18 object-contain' src={wp} alt='Atencion al Cliente' />
                  <div className='flex-col pl-2'>
                    <p className='no-underline text-dark-gray montserrat-eb lg:text-lg'>Estamos en Whatsapp</p>
                    <p className='text-gray montserrat-l text-sm lg:text-xs'>
                      Contás con un asesor personalizado a través de WhatsApp para que puedas gestionar todo lo que necesites de tu seguro.
                      <br />
                      Tranquilo, nosotros te contactamos para que nos agendes.
                    </p>
                  </div>
                </div>
              </div>
            ) :
              (
                <div className='flex lg:justify-center lg:items-center'>
                  <img className='w-12 h-12 lg:w-18 lg:h-18' src={phone} alt='Atencion al Cliente' />
                  <div className='flex-col pl-2'>
                    <p><a id='num' className='no-underline text-dark-gray montserrat-eb lg:text-lg' href='tel:08005552272'>0800 555 CASA (2272)</a></p>
                    <p className='text-gray montserrat-l text-sm lg:text-base'>Llamá las 24hs, los 365 días del año y solicitá el servicio que necesitás.</p>
                  </div>
                </div>
              )}
            <hr className='block lg:hidden mx-6 my-6 separador lg:mb-4' />
            <div className='pb-3 flex justify-center'>
              <a
                href='https://www.galiciaseguros.com.ar/segurosparatuscosas/asistenciadomiciliariacondiciones'
                target='_blanck'
                className='text-center text-sm lg:text-base info__button-condicion bg-transparent hover:bg-red-700 text-red-800 hover:text-white py-2 px-1 lg:px-2 border border-red-700 hover:border-transparent rounded-full mx-8 lg:mx-4 montserrat-b animated late lg:hover:bg-transparent lg:bg-red-700 lg:hover:text-red-800 lg:text-white lg:hover:border-red-700 lg:border-transparent hover-all lg:flex lg:justify-center lg:items-center lg:h-16'
              >
                CONOCÉ LAS CONDICIONES PARA
                {' '}
                <br className='hidden lg:block' />
                ACCEDER AL SERVICIO
              </a>
            </div>
          </div>
          <hr className='hidden lg:block mx-6 my-6 separador h-3 lg:mb-4' />
        </div>
        { device === 'mobile' && (
          <div className='lg:hidden flex justify-center'>
            <ButtonLink
              className='back__button w-12'
              to='/home/cubre'
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
  }
}

export default Asistencia;
