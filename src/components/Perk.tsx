type PerkProps = {
  imgUrl: string;
  title: string;
}

const Perk = ({imgUrl, title}: PerkProps) => {
  return (
    <div className='perk'>
      <img src={imgUrl} alt="icon" width={60.43} height={60.43}/>
      <p>{title}</p>
    </div>
  )
}

export default Perk