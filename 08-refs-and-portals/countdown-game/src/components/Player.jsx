import { useState, useRef } from 'react';

const INITIAL_PLAYER_NAME = 'unknown entity';

export default function Player() {
  const inputPlayerNameRef = useRef();
  const [playerName, setPlayerName] = useState(INITIAL_PLAYER_NAME);

  function handleOnSubmitClick() {
    const inputPlayerName = inputPlayerNameRef.current.value;
    setPlayerName(inputPlayerName === '' ? INITIAL_PLAYER_NAME : inputPlayerName);
  }

  return (
    <section id='player'>
      <h2>Welcome, {playerName}</h2>
      <p>
        <input ref={inputPlayerNameRef} type='text' />
        <button onClick={handleOnSubmitClick}>Set Name</button>
      </p>
    </section>
  );
}
