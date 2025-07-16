function Card(key, pokename, imgUrl, front, back) {
  return (
    <div className='card' key={key}>
      <div className='top-sprites'>
        <img src={front} />
        <img src={back} alt='' />
      </div>
      <img src={imgUrl} alt={pokename} />
      <h3 className='title'>{pokename}</h3>
      <div className='bottom-sprites'>
        <img src={front} />
        <img src={back} alt='' />
      </div>
    </div>
  );
}

export default Card;
