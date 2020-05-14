import React from 'react';
import '../assets/styles/components/Seguros.scss';
import seguroHogar from '../assets/static/seguroHogar.png';
import seguroAccidentes from '../assets/static/seguroAccidentes.png';
import seguroDesempleo from '../assets/static/seguroDesempleo.png';
import SeguroSalud from '../assets/static/SeguroSalud.png';
import SeguroVida from '../assets/static/SeguroVida.png';
import roboCelular from '../assets/static/roboCelular.png';
import roboPublica from '../assets/static/roboPublica.png';
import SeguroPyme from '../assets/static/SeguroPyme.png';
import fondoFuturo from '../assets/static/fondoFuturo.png';
import roboBici from '../assets/static/roboBici.png';
import caminoProtegido from '../assets/static/caminoProtegido.png';
import proteccionPortatil from '../assets/static/proteccionPortatil.png';
import phone from '../assets/static/phone5.png';
import { changeDevice } from '../funciones';
import { alt } from '../jsons/json/home.json';

const Seguros = () => {
  const altLower = alt.toLowerCase();
  const elements = [{
    id: 1,
    alt: 'seguro de accidentes personales',
    link: 'https://www.galiciaseguros.com.ar/segurosparavos/accidentespersonales',
    src: seguroAccidentes,
  }, {
    id: 2,
    alt: 'vida y proteccion familiar',
    link: 'https://www.galiciaseguros.com.ar/segurosparavos/vida',
    src: SeguroVida,
  }, {
    id: 3,
    alt: 'seguro de hogar',
    link: 'https://www.galiciaseguros.com.ar/segurosparatuscosas/hogar',
    src: seguroHogar,
  }, {
    id: 4,
    alt: 'seguro pyme',
    link: 'https://www.galiciaseguros.com.ar/segurosparatupyme/integralpyme',
    src: SeguroPyme,
  }, {
    id: 5,
    alt: 'fondo futuro',
    link: 'https://www.galiciaseguros.com.ar/segurosparavos/fondofuturo',
    src: fondoFuturo,
  }, {
    id: 6,
    alt: 'robo en via publica',
    link: 'https://www.galiciaseguros.com.ar/segurosparatuscosas/roboviapublica',
    src: roboPublica,
  }, {
    id: 7,
    alt: 'protección tecno portátil',
    link: 'https://www.galiciaseguros.com.ar/segurosparatuscosas/tecnoportatil',
    src: proteccionPortatil,
  }, {
    id: 8,
    alt: 'robo de celular',
    link: 'https://www.galiciaseguros.com.ar/segurosparatuscosas/segurodecelular',
    src: roboCelular,
  }, {
    id: 9,
    alt: 'seguro de robo de bici',
    link: 'https://www.galiciaseguros.com.ar/segurosparatuscosas/bicicleta',
    src: roboBici,
  }];
  const newElements = elements.filter((elemento) => {
    return elemento.alt !== altLower;
  });
  return (
    <div id='seguros' className='seguros lg:relative'>
      <section className='main__productos'>
        <div className='productos__header relative text-center lg:text-left'>
          <div className='bg-lineas-rectas ml-2 h-4 w-5/6 absolute lg:ml-6 lg:w-1/4' />
          <h3 className='productos__header-tittle text-white px-3 pt-4 pb-2 lg:text-2xl lg:ml-20 lg:pb-8'>
            ¿Conocés todos los productos
            {' '}
            <br className='hidden lg:block' />
            <span className='lg:ml-24'>
              que tenemos para garantizar tu protección?
            </span>
          </h3>
        </div>
        {changeDevice() === 'mobile' ? (
          <div className='relative lg:hidden'>
            <div className='mt-2 w-1/2 flex items-center flex-col pl-3 mb-12'>
              { newElements.map((value, index) => {
                const { id } = value;
                const { alt } = value;
                const { link } = value;
                const { src } = value;
                if (index < 4) {
                  return (
                    <a href={link} key={id}>
                      <img className='w-48 my-2 hover-all hover:scale-1' src={src} alt={alt} />
                    </a>
                  );
                }
                return null;
              })}
            </div>
            <div className='absolute top-0 right-0 float-right pr-3 flex items-center flex-col w-1/2'>
              <div className='mt-10'>
                { newElements.map((value, index) => {
                  const { id } = value;
                  const { alt } = value;
                  const { link } = value;
                  const { src } = value;
                  if (index >= 4) {
                    return (
                      <a href={link} key={id} target='_blank' rel='noopener noreferrer'>
                        <img className='w-48 my-5 hover-all hover:scale-1' src={src} alt={alt} />
                      </a>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className='relative hidden lg:block'>
            <div className='conocer__productos flex flex-row pt-8 justify-around'>
              <div className='filas__img mt-2 w-1/5 flex items-center flex-col content-center justify-center pl-3 lg:pl-0 mb-12'>
                { newElements.map((value, index) => {
                  const { id } = value;
                  const { alt } = value;
                  const { link } = value;
                  const { src } = value;
                  if (index < 3) {
                    return (
                      <a href={link} key={id} target='_blank' rel='noopener noreferrer'>
                        <img className='w-48 my-3 hover-all hover:scale-1' src={src} alt={alt} />
                      </a>
                    );
                  }
                  return null;
                })}
              </div>
              <div className='filas__img mt-2 w-1/5 flex items-center flex-col pl-5 lg:pl-0 mb-12'>
                { newElements.map((value, index) => {
                  const { id } = value;
                  const { alt } = value;
                  const { link } = value;
                  const { src } = value;
                  if (index >= 3 && index < 6) {
                    return (
                      <a href={link} key={id} target='_blank' rel='noopener noreferrer'>
                        <img className='w-48 my-3 hover-all hover:scale-1' src={src} alt={alt} />
                      </a>
                    );
                  }
                  return null;
                })}
              </div>
              <div className='filas__img mt-2 w-1/5 flex items-center flex-col pl-5 lg:pl-0 mb-12'>
                { newElements.map((value, index) => {
                  const { id } = value;
                  const { alt } = value;
                  const { link } = value;
                  const { src } = value;
                  if (index >= 6 && index < 9) {
                    return (
                      <a href={link} key={id} target='_blank' rel='noopener noreferrer'>
                        <img className='w-48 my-3 hover-all hover:scale-1' src={src} alt={alt} />
                      </a>
                    );
                  }
                  return null;
                })}
              </div>
              <div className='filas__img mt-2 w-1/5 flex items-center flex-col pl-5 lg:pl-0 mb-12'>
                { newElements.map((value, index) => {
                  const { id } = value;
                  const { alt } = value;
                  const { link } = value;
                  const { src } = value;
                  if (index >= 9) {
                    return (
                      <a href={link} key={id} target='_blank' rel='noopener noreferrer'>
                        <img className='w-48 my-3 hover-all hover:scale-1' src={src} alt={alt} />
                      </a>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        )}
      </section>
      <section className='main__comunicate px-3 pt-4 lg:pt-0 mb-5 lg:flex lg:justify-center'>
        <div className='bg-lineas-rectas h-1 w-full lg:hidden' />
        <div className='flex items-center mt-4 lg:mt-0'>
          <a href='https://www.galiciaseguros.com.ar/seguros' target='_blank' rel='noopener noreferrer' className='rounded-full orangeGalcia text-2xl montserrat-b text-white px-4 py-2 hover-all hover:scale-1'>¡Contrata tu seguro!</a>
        </div>
        <div className='lg:ml-8'>
          <p className='telefono__info-parrafo mt-3 text-gray montserrat-r'>Comunicate con nuestro</p>
          <h2 className='telefono__info-tittle text-dark-gray montserrat-b'>CENTRO DE VENTA TELEFÓNICA</h2>
          <div className='flex'>
            <img className='comunicate__img-phone h-16' src={phone} alt='Telefono' />
            <div className='flex justify-center flex-col ml-4'>
              <a className='comunicate__num cursor-pointer text-dark-gray montserrat-eb text-xl' href='tel:08005559797'>0800 555 9797</a>
              <p className='comunicate__info text-gray montserrat-l'>Lunes a viernes de 9 a 21 hs.</p>
            </div>
          </div>
        </div>
      </section>
      {/*changeDevice() === 'desktop' && <ArrowBottom goTo={goTo} />*/}
    </div>
  );
};

export default Seguros;
/*content-center justify-center*/
