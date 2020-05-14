import React from 'react';
import PrevenTips from './PrevenTips';
import ToPreventips from './ToPreventips';

const PreventipsConjunto = () => {
  return (
    <section className='main__preventips mt-5 lg:flex lg:flex-row-reverse lg:relative lg:mt-0'>
      <PrevenTips />
      <ToPreventips />
    </section>
  );
};

export default PreventipsConjunto;
