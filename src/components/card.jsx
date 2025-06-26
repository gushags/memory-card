function Card({ card }) {
  return (
    <div className='card'>
      <img src={card.imgUrl} alt={card.alt} />
      <h3 className='title'>{card.name}</h3>
    </div>
  );
}

export default Card;
