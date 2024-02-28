import './PlayerInfo.css';

import { useState } from 'react';

export default function PlayerInfo({ initialName, symbol, activeSymbol, onPlayerNameChanged }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleActionButtonClick() {
    setIsEditing((prevIsEditing) => !prevIsEditing);

    if (isEditing) {
      onPlayerNameChanged(symbol, playerName);
    }
  }

  const actionButtonText = isEditing ? 'Save' : 'Edit';

  let classes = '';
  if (symbol === activeSymbol) classes += 'active';

  return (
    <li className={classes}>
      <span className='player'>
        {isEditing && (
          <input
            type='text'
            value={playerName}
            onChange={(event) => setPlayerName(event.target.value)}
          />
        )}
        {!isEditing && <span className='player-name'>{playerName}</span>}
        <span className='player-symbol'>{symbol}</span>
      </span>

      <button onClick={handleActionButtonClick}>{actionButtonText}</button>
    </li>
  );
}
