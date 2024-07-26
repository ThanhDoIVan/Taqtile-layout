import React from 'react';

const Package = () => {
  return (
    <div className='package'>
      <p className='package__duration'>1 month</p>
      <div className='price'>
        <h2 className='price__new'>18.99$</h2>
        <h3 className='price__old'>22.99$</h3>
      </div>
    </div>
  );
};

export default Package;
