import React from 'react';
import json from '../jsons/json/asistencia.json';
import AsistenciaBodySlide from './AsistenciaBodySlide';
import AsistenciaImagenes from './AsistenciaImagenes';
import { animateCSS } from '../funciones';
import '../assets/styles/components/AsistenciaSlide.scss';

class AsistenciaSlide extends React.Component {
  constructor(props) {
    super(props);
    const slide = [];
    const minState = [];
    const minStateImage = [];
    for (let i = 0; i < json.body.length; i++) {
      const elements = json.body[i];
      minState[i] = {};
      minState[i].id = elements.id;
      minState[i].titulo = elements.titulo;
      minState[i].subtitulo = elements.subtitulo;
      minState[i].textoBottom = elements.textoBottom;
      minState[i].texto = <AsistenciaBodySlide indexed={i} posicion={0} />;
      minState[i].images = [];
      minStateImage.images = [];
      for (let j = 0; j < elements.children; j++) {
        minStateImage.images[j] = {};
        minStateImage.images[j].id = j;
        if (j === 0) {
          minStateImage.images[j].tag = <AsistenciaImagenes indexed={i} posicion={j} estado={1} />;
        } else {
          minStateImage.images[j].tag = <AsistenciaImagenes indexed={i} posicion={j} estado={0} />;
        }
        minState[i].images.push(minStateImage.images[j]);
      }
      slide.push(minState[i]);
    }
    this.state = {
      slide,
    };
  }

  changeStates(indexed, posicion) {
    const slide = [];
    const minState = [];
    const minStateImage = [];
    for (let i = 0; i < json.body.length; i++) {
      const elements = json.body[i];
      minState[i] = {};
      minState[i].id = elements.id;
      minState[i].titulo = elements.titulo;
      minState[i].subtitulo = elements.subtitulo;
      minState[i].textoBottom = elements.textoBottom;
      if (i === indexed) {
        minState[i].texto = <AsistenciaBodySlide indexed={indexed} posicion={posicion} />;
      } else {
        minState[i].texto = <AsistenciaBodySlide indexed={i} posicion={0} />;
      }
      minState[i].images = [];
      minStateImage.images = [];
      for (let j = 0; j < elements.children; j++) {
        minStateImage.images[j] = {};
        minStateImage.images[j].id = j;
        if (i === indexed && j === posicion) {
          minStateImage.images[j].tag = <AsistenciaImagenes indexed={indexed} posicion={posicion} estado={1} />;
        } else if (j === 0 && indexed !== i) {
          minStateImage.images[j].tag = <AsistenciaImagenes indexed={i} posicion={0} estado={1} />;
        } else {
          minStateImage.images[j].tag = <AsistenciaImagenes indexed={i} posicion={j} estado={0} />;
        }
        minState[i].images.push(minStateImage.images[j]);
      }
      slide.push(minState[i]);
    }
    animateCSS(`.tip${indexed}`, 'fadeOut faster', () => {
      this.setState({ slide });
      animateCSS(`.tip${indexed}`, 'fadeIn faster');
    });
  }

  render() {
    const { slide } = this.state;
    const rows = slide.map((row) => {
      const { id } = row;
      const { titulo } = row;
      const { texto } = row;
      const { images } = row;
      const { subtitulo } = row;
      const { textoBottom } = row;
      const idParent = id;
      return (
        <div className={`swiper-slide swiper-slide-${id} bg-white lg:bg-transparent shadow-md lg:shadow-none`} key={id}>
          <div className='flex flex-col h-full'>
            <div className='grid grid-cols-6 relative my-1 lg:mt-3 lg:mb-0 ml-3 mr-2 lg:hidden'>
              <h1 className='info__swiper__numero text-4xl lg:text-5xl col-span-1'>{id + 1}</h1>
              <div className='col-span-5 flex items-center justify-start'>
                <h2 className='text-center w-full'>{titulo}</h2>
              </div>
            </div>
            <div className='flex justify-end w-full'>
              <div className='linea w-40 right-0 lg:mr-4' />
            </div>
            {
              subtitulo &&
              (
                <div className='mt-4 text-center'>
                  <h3 className='mx-5 montserrat-m text-sm'>{subtitulo}</h3>
                </div>
              )
            }
            <div className={`px-5 mt-2 demo lg:text-black tip text-dark-gray tip${id} text-center`}>
              {texto}
            </div>
            <hr className='info__separador-desktop mx-4 mt-4 mb-2 lg:bg-white lg:h-1 lg:mt-2' />
            <div className='block info__footer__buttons'>
              <div className='flex items-start justify-around '>
                {
                  images.map((row) => {
                    const { tag } = row;
                    const { id } = row;
                    return (
                      <button
                        type='button'
                        className='w-1/5 flex hover-all hover:scale-1'
                        key={id}
                        onClick={() => {
                          this.changeStates(idParent, id);
                        }}
                      >
                        {tag}
                      </button>
                    );
                  })
                }
              </div>
            </div>
            {
              textoBottom &&
              (
                <div>
                  <p className='montserrat-l text-gray lg:text-dark-gray text-xs mx-5 my-2'>{textoBottom}</p>
                </div>
              )
            }
          </div>
        </div>
      );
    });
    return (
      <div className='swiper-wrapper'>
        {rows}
      </div>
    );
  }
}

export default AsistenciaSlide;
