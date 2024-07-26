import React from 'react';
import Perk from './Perk';

const Offer = () => {
  return (
    <div className='offer'>
      <div className='timer'>
        <img
          src='./src/assets/Fire.svg'
          alt='fire emoji'
          width={22}
          height={22}
        />
        <p>
          Ends in <span>09:59</span>
        </p>
      </div>
      <h1>50% OFF</h1>
      <div className='perks mt-22'>
        <Perk />
        <Perk />
        <Perk />
        <Perk />
      </div>
    </div>
  );
};

export default Offer;
