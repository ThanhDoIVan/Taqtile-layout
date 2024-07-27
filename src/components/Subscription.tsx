import Package from './Package';

type Package = {
  id: number;
  duration: string;
  newPrice: string;
  oldPrice: string;
};

type SubscriptionProps = {
  packages: Package[];
};

const Subscription = ({ packages }: SubscriptionProps) => {
  return (
    <div className='subscription'>
      {packages.map(({ id, duration, newPrice, oldPrice }) => (
        <Package
          key={id}
          duration={duration}
          newPrice={newPrice}
          oldPrice={oldPrice}
        />
      ))}
    </div>
  );
};

export default Subscription;
