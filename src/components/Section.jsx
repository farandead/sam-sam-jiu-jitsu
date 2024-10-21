import React from 'react';

function Section({ className, id, customPaddings, children }) {
  return (
    <div
      id={id}
      className={`relative ${customPaddings || `py-10 lg:py-16 xl:py-20`}`}
    >
      {children}
      <div className='hidden absolute top-0 left-5 w-0.25 h-full  pointer-events-none md:block lg:left-7.5 xl:left-10'></div>
      <div className='hidden absolute top-0 left-5 w-0.25 h-full  pointer-events-none md:block lg:right-7.5 xl:right-10'></div>
    </div>
  );
}

export default Section;
