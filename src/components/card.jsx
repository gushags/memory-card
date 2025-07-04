function Card({ card }) {
  return (
    <div className='card' key={card.key}>
      <div className='top-sprites'>
        <img src={card.front} />
        <img src={card.back} alt='' />
      </div>
      <img src={card.imgUrl} alt={card.name} />
      <h3 className='title'>{card.name}</h3>
      <div className='bottom-sprites'>
        <img src={card.front} />
        <img src={card.back} alt='' />
      </div>
    </div>
  );
}

export default Card;
