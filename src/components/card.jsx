import { useState } from 'react';

function Card({ card }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className='card'>
      <img src={card.imgUrl} alt={card.alt} />
      <h3 className='title'>{card.title}</h3>
    </div>
  );
}

export default Card;
