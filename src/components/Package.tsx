type PackageProps = {
  duration: string;
  newPrice: string;
  oldPrice: string;
}

const Package = ({duration, newPrice, oldPrice}: PackageProps) => {
  return (
    <div className='package'>
      <p className='package__duration'>{duration}</p>
      <div className='price'>
        <h2 className='price__new'>{newPrice}</h2>
        <h3 className='price__old'>{oldPrice}</h3>
      </div>
    </div>
  );
};

export default Package;
