import React from 'react';
import '../assets/styles/components/Contacto.scss';
import VentaCliente from '../components/VentaCliente';
import contactoDsk from '../assets/static/contacto_dsk.png';
import phone from '../assets/static/phone5.png';
import contacto from '../assets/static/contacto.jpg';

class Contacto extends React.Component {
  componentDidMount() {
    const tamaño = document.querySelector('main').clientWidth;
    if (tamaño <= 340) {
      document.querySelector('.contacto__titulo').style.fontSize = '1.75rem';
    }
  }

  render() {
    const { device } = this.props;
    return (
      <main className='contacto animated fadeIn lg:relative lg:mb-12'>
        <div className='block relative lg:hidden'>
          <img id='image1' className='w-full' src={contacto} alt='Contacto' />
          <img id='image2' className='absolute' src={phone} alt='Tel' />
        </div>
        <div className='relative hidden lg:block lg:h-56 div-img-desktop'>
          <img id='image3' className='object-cover w-full h-full lg:rounded-lg' src={contactoDsk} alt='Contacto Dsk' />
          <div className='absolute flex inline-flex top-0 pt-2 pl-2'>
            <img id='image4' className='relative' src={phone} alt='Tel' />
            <h1 className='montserrat-b flex items-center'>CONTACTANOS</h1>
          </div>
          <div className='hidden lg:block relative ml-40'>
            <div className='lg:absolute pb-3 bg__lineas-dekstop'>
              <div className='bg-lineas w-1/4' />
            </div>
          </div>
        </div>
        <div className='block lg:hidden flex justify-end pb-3'>
          <div className='items-end'>
            <h1 className='text-right pr-3 pt-3 pb-1 montserrat-b contacto__titulo'>CONTACTANOS</h1>
          </div>
        </div>
        <div className='block lg:hidden flex justify-end pb-3'>
          <div className='bg-lineas w-10/12' />
        </div>
        <div className='hidden lg:block lg:absolute opciones__contacto lg:w-full lg:h-full lg:flex lg:items-center'>
          <div className='grid grid-cols-3 pt-8 lg:pt-0 lg:w-full lg:mt-4'>
            <div className='col-span-1'>
              <div id='Radius' className='contacto__burbuja shadow-base py-2 px-6 lg:h-full lg:bg-white lg:ml-2 lg:opacity-85'>
                <VentaCliente device={device} es='0' />
              </div>
            </div>
            <div className='col-span-1'>
              <div id='Radius' className='contacto__burbuja shadow-base py-2 px-6 ml-8 lg:h-full lg:bg-white lg:opacity-85'>
                <VentaCliente device={device} es='1' />
              </div>
            </div>
            <div className='col-span-1'>
              <div id='Radius' className='contacto__burbuja shadow-base py-2 px-6 ml-8 lg:h-full lg:bg-white lg:mr-2 lg:opacity-85'>
                <VentaCliente device={device} es='2' />
              </div>
            </div>
          </div>
        </div>
        <div className='block lg:hidden'>
          <div className='flex flex-col'>
            <VentaCliente device={device} es='0' />
            <hr />
            <VentaCliente device={device} es='1' />
          </div>
        </div>
      </main>
    );
  }
}

export default Contacto;
