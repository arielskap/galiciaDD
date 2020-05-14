import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import '../assets/styles/components/ArrowBottom.scss';
import arrowSimple from '../assets/static/arrowSimple.png';

smoothscroll.polyfill();
window.__forceSmoothScrollPolyfill__ = true;

const ArrowBottom = ({ goTo }) => {
  return (
    <div className='ArrowBottom w-full text-center absolute'>
      <button
        type='button'
        className='goMenu cursor-pointer animated late bottom-0 absolute mb-2'
        onClick={() => {
          document.querySelector(goTo).scrollIntoView({ block: 'start', behavior: 'smooth' });
        }}
      >
        <img className='w-10 hidden lg:block hover:scale-2 hover-all lg:z-30' src={arrowSimple} alt='Arrow Button' />
      </button>
    </div>
  );
};

export default ArrowBottom;
/*w-full text-center absolute bottom-0 mb-4*/
