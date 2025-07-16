function Scoreboard({ highScore, currentScore }) {
  return (
    <div id='scoreboard'>
      <h1>Memory Card</h1>
      <p>
        Click a card. But don't click any twice. If you reach 12 in a row, you
        win.
      </p>
      <h2>Score:</h2>
      <h3>{currentScore}</h3>
      <h2>High Score:</h2>
      <h3>{highScore}</h3>
    </div>
  );
}
export default Scoreboard;
