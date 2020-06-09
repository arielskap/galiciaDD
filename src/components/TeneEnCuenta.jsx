import React from 'react';
import Poliza from './Poliza';
import NoCubreImg from './NoCubreImg';
import { resize, animateCSS, changeDevice } from '../funciones';
import json from '../jsons/json/teneEnCuenta.json';
import '../assets/styles/components/NoCubre.scss';

class TeneEnCuenta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poliza: <Poliza posicion={1} />,
      images: [
        {
          tag: <NoCubreImg posicion={0} estado={0} />,
        },
        {
          tag: <NoCubreImg posicion={1} estado={1} />,
        },
        {
          tag: <NoCubreImg posicion={2} estado={0} />,
        },
        {
          tag: <NoCubreImg posicion={3} estado={0} />,
        },
      ],
    };
  }

  componentDidMount() {
    if (changeDevice() === 'mobile') {
      setTimeout(() => {
        resize('.info__modal', '.main__info', -10);
      }, 500);
    }
  }

  poliza(posicion) {
    const device = changeDevice();
    const estado = [];
    for (let i = 0; i < 4; i++) {
      if (posicion === i) {
        estado[i] = 1;
      } else {
        estado[i] = 0;
      }
    }
    animateCSS('.info__modal__text', 'fadeOut faster', () => {
      animateCSS('.info__modal__text', 'fadeIn faster');
      this.setState({
        poliza: <Poliza posicion={posicion} />,
        images: [
          {
            tag: <NoCubreImg posicion={0} estado={estado[0]} />,
          },
          {
            tag: <NoCubreImg posicion={1} estado={estado[1]} />,
          },
          {
            tag: <NoCubreImg posicion={2} estado={estado[2]} />,
          },
          {
            tag: <NoCubreImg posicion={3} estado={estado[3]} />,
          },
        ],
      }, () => {
        if (device === 'mobile') {
          resize('.info__modal', '.main__info', -10);
        }
      });
    });
  }

  render() {
    const { images } = this.state;
    const { poliza } = this.state;
    return (
      <section className='prevencion__header-desktop lg:h-45vh'>
        <section className='prevencion__main__header pt-4 px-3 pb-10 lg:pb-0 lg:ml-4 lg:leading-tight'>
          <h2 className='main__header-titulo text-xl lg:text-2xl text-left lg:text-left'>
            <span className='header-titulo-first montserrat-b lg:ml-24'>{json.title ? json.title : 'Tené en cuenta {{firstName}}'}</span>
            <br className='block' />
            lo que NO cubre tu póliza
          </h2>
          <div className='hidden lg:inline-flex h-1'>
            <div className='black__border w-48 h-full bg-black rounded-full' />
            <div className='w-8 h-full bg-black ml-6 rounded-full' />
          </div>
        </section>
        <section className='lg:flex lg:justify-around lg:w-full'>
          <section className='main__info relative lg:w-2/3'>
            <div className='main__info__div absolute lg:static w-full flex justify-center lg:h-full'>
              <div className='info__modal shadow-md p-4 text-center bg-white w-5/6 lg:flex lg:bg-transparent lg:shadow-none lg:h-full lg:flex lg:justify-between lg:w-full lg:p-0'>
                <div className='info__modal__header mb-2 flex lg:flex lg:items-center lg:justify-center lg:ml-4'>
                  <div className='w-1/4'>
                    <button type='button' className='mx-2 hover:scale-2 hover-all' onClick={() => { this.poliza(0); }}>{images[0].tag}</button>
                  </div>
                  <div className='w-1/4'>
                    <button type='button' className='mx-2 hover:scale-2 hover-all' onClick={() => { this.poliza(1); }}>{images[1].tag}</button>
                  </div>
                  <div className='w-1/4'>
                    <button type='button' className='mx-2 hover:scale-2 hover-all' onClick={() => { this.poliza(2); }}>{images[2].tag}</button>
                  </div>
                  <div className='w-1/4'>
                    <button type='button' className='mx-2 hover:scale-2 hover-all' onClick={() => { this.poliza(3); }}>{images[3].tag}</button>
                  </div>
                </div>
                <hr />
                <div className='lg:h-full lg:flex lg:justify-center lg:w-1/2'>
                  <div className='info__modal__text lg:shadow-md lg:p-4 lg:bg-white lg:rounded-xl lg:h-full lg:mr-2'>
                    {poliza}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='main__dato text-center px-3 py-2 lg:w-1/3 lg:text-left lg:mr-20 lg:leading-relaxed mb-4'>
            <p className='text-sm'>
              No te olvides de chequear que todas las
              sumas aseguradas reflejen el costo de la
              reconstrucción de tu casa o la reposición de
              tus bienes ante un incendio o robo.
              Si ves que el monto es insuficiente,
              comunicate con nosotros para que
              lo actualicemos.
            </p>
          </section>
        </section>
      </section>
    );
  }
};

export default TeneEnCuenta;
