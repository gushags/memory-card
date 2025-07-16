function Scoreboard({ highScore, currentScore }) {
  return (
    <div id='scoreboard'>
      <h1>Memory Card</h1>
      <p>
        Click a card. But don't click any twice. If you reach 12 in a row, you
        win.
      </p>
      <h4>Score:</h4>
      <p>{currentScore}</p>
      <h4>High Score:</h4>
      <p>{highScore}</p>
    </div>
  );
}
export default Scoreboard;
