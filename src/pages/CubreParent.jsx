import React from 'react';
import { withRouter } from 'react-router-dom';
import Cubre from '../components/Cubre';
import { changeDevice, animateCSS } from '../funciones';
import json from '../jsons/json/pages.json';

class CubreParent extends React.Component {
  componentDidMount() {
    const { history } = this.props;
    const device = changeDevice();
    /*if (screen.height  <= document.querySelector('body').clientHeight) {
      console.log('hola');
    }*/
    /*const scrollingMax = 20;
    const swiperV = new Swiper('.swiper-container-v', {
      direction: 'vertical',
      spaceBetween: 50,
      resistanceRatio: 0.5,
    });

    swiperV.on('slideNextTransitionStart', () => {
      setTimeout(() => {
        json.forEach((element) => {
          return (element.cubreParent &&
            history.push(element.path)
          );
        });
      }, 500);
    });
    window.addEventListener('touchstart', () => {
      scrolling = document.documentElement.scrollTop;
    });
    window.addEventListener('touchend', () => {
      if (scrolling > scrollingMax) {
        document.querySelector('home').scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
      if (document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight) {
        if (swiperV.allowSlideNext) {
          swiperV.appendSlide('<div class="swiper-slide swiper-slideParent"></div>');
          swiperV.slideNext();
        }
        swiperV.allowSlideNext = true;
      } else {
        if (swiperV.allowSlideNext) {
          swiperV.allowSlideNext = false;
          if (document.querySelectorAll('.swiper-slideParent').length > 1) {
            swiperV.removeSlide(1);
          }
        }
      }
    });*/
    //document.querySelector('.main_body').clientHeight = clientHeight - 54;
    document.querySelector('body').classList.add('h-auto');
    document.querySelector('.goPrevencion').addEventListener('click', () => {
      /*if (document.querySelectorAll('.swiper-slideParent').length === 1) {
        swiperV.appendSlide('<div class="swiper-slide swiper-slideParent"></div>');
      }
      swiperV.allowSlideNext = true;
      swiperV.slideNext();*/
      animateCSS('.cubre', 'slideOutUp faster', () => {
        json.forEach((element) => {
          return (element.cubreParent &&
            history.push(element.path)
          );
        });
      });
    }, false);
    if (device === 'mobile') {
      const header = document.querySelector('header');
      header.style.zIndex = '100';
      header.classList.add('top-0', 'fixed', 'w-full');
      document.querySelector('.swiper-container-v').style.marginTop = '54px';
    }
  }

  componentWillUnmount() {
    const header = document.querySelector('header');
    if (header != null) {
      header.style.zIndex = '0';
      header.classList.remove('top-0', 'fixed', 'w-full');
    }
    document.querySelector('.swiper-container-v').style.marginTop = '0px';
  }

  render() {
    return (
      <>
        <div className='fixed top-0 h-screen w-screen z-n-10' />
        <div className='swiper-container-v'>
          <div className='swiper-wrapper-v'>
            <div>
              <Cubre />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(CubreParent);
