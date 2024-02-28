import './GameOver.css';

export default function GameOver({ winner, onRematchClicked }) {
  return (
    <div id='game-over'>
      <h2>Game Over!</h2>
      {!winner && <p>It's a Draw!</p>}
      {winner && <p>{winner} won!</p>}
      <p>
        <button onClick={onRematchClicked}>Rematch!</button>
      </p>
    </div>
  );
}
