import Perk from './Perk';
import perks from '../data/perks.json';

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
        {perks.map( ({ id, imgUrl, title }) => (
          <Perk key={id} imgUrl={imgUrl} title={title}/>
        ))}
      </div>
    </div>
  );
};

export default Offer;
