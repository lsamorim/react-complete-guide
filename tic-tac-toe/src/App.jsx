import './App.css';

import { useState } from 'react';

import PlayerInfo from './components/PlayerInfo/PlayerInfo';
import GameBoard from './components/GameBoard/GameBoard';
import TurnsLog from './components/TurnsLog/TurnsLog';
import GameOver from './components/GameOver/GameOver';

import { WINNING_COMBINATIONS } from './models/winning-combinations';

const INITIAL_PLAYERS = {
  X: 'Player 1',
  O: 'Player 2',
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveGameBoard(turns) {
  const gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for (const turn of turns) {
    const { square, symbol } = turn;
    const { rowIndex, columnIndex } = square;
    gameBoard[rowIndex][columnIndex] = symbol;
  }

  return gameBoard;
}

function deriveWinner(gameBoard, players) {
  for (
    let combinationIndex = 0;
    combinationIndex < WINNING_COMBINATIONS.length;
    combinationIndex++
  ) {
    let sequenceCount = 0;
    let currentSymbol = null;
    for (let i = 0; i < WINNING_COMBINATIONS[combinationIndex].length; i++) {
      const { rowIndex, columnIndex } = WINNING_COMBINATIONS[combinationIndex][i];

      const symbol = gameBoard[rowIndex][columnIndex];

      if (symbol === null) break;

      if (currentSymbol === null) {
        currentSymbol = symbol;
        sequenceCount = 1;
      } else {
        if (symbol === currentSymbol) {
          sequenceCount++;
        } else {
          break;
        }
      }
    }

    if (sequenceCount === 3) {
      return {
        winner: players[currentSymbol],
        winningCombinationIndex: combinationIndex,
      };
    }
  }

  return {
    winner: null,
  };
}

function App() {
  const [players, setPlayers] = useState(INITIAL_PLAYERS);
  const [gameState, setGameState] = useState({ activeSymbol: 'X', turns: [] });

  const activeSymbol = gameState.activeSymbol;
  const turns = gameState.turns;

  const gameBoard = deriveGameBoard(turns);
  const winnerResult = deriveWinner(gameBoard, players);

  const hasDraw = !winnerResult.winner && turns.length === 9;

  function handlePlayerNameChanged(symbol, name) {
    setPlayers((prevPlayers) => {
      return { ...prevPlayers, [symbol]: name };
    });
  }

  function handleSquareClick(rowIndex, columnIndex) {
    console.log(`Square clicked: ${rowIndex}, ${columnIndex}`);

    const isSquareAlreadySelected = gameState.turns.some(
      (turn) => turn.square.rowIndex === rowIndex && turn.square.columnIndex === columnIndex
    );

    if (isSquareAlreadySelected) return;

    setGameState((prevGameState) => {
      const updatedGameState = {
        activeSymbol: prevGameState.activeSymbol === 'X' ? 'O' : 'X',
        turns: [
          { square: { rowIndex, columnIndex }, symbol: prevGameState.activeSymbol },
          ...prevGameState.turns,
        ],
      };
      return updatedGameState;
    });
  }

  function handleRematchClick() {
    setGameState({ activeSymbol: 'X', turns: [] });
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <PlayerInfo
            initialName={INITIAL_PLAYERS.X}
            symbol='X'
            activeSymbol={activeSymbol}
            onPlayerNameChanged={handlePlayerNameChanged}
          />
          <PlayerInfo
            initialName={INITIAL_PLAYERS.O}
            symbol='O'
            activeSymbol={activeSymbol}
            onPlayerNameChanged={handlePlayerNameChanged}
          />
        </ol>
        {(winnerResult.winner || hasDraw) && (
          <GameOver winner={winnerResult.winner} onRematchClicked={handleRematchClick} />
        )}
        <GameBoard board={gameBoard} onSquareClicked={handleSquareClick} />
      </div>
      <TurnsLog turns={turns} />
    </main>
  );
}

export default App;
