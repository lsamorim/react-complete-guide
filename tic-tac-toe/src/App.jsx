import './App.css';

import { useState } from 'react';

import PlayerInfo from './components/PlayerInfo/PlayerInfo';
import GameBoard from './components/GameBoard/GameBoard';
import TurnsLog from './components/TurnsLog/TurnsLog';

import { WINNING_COMBINATIONS } from './models/winning-combinations';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function checkWinner(gameBoard) {
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

    if (sequenceCount == 3) {
      return {
        winner: currentSymbol,
        winningCombinationIndex: combinationIndex,
      };
    }
  }

  return {
    winner: null,
  };
}

function App() {
  const [gameState, setGameState] = useState({ activeSymbol: 'X', turns: [] });

  const activeSymbol = gameState.activeSymbol;
  const turns = gameState.turns;

  const gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, symbol } = turn;
    const { rowIndex, columnIndex } = square;
    gameBoard[rowIndex][columnIndex] = symbol;
  }

  const winnerResult = checkWinner(gameBoard);

  function handleSquareClick(rowIndex, columnIndex) {
    console.log(`Square clicked: ${rowIndex}, ${columnIndex}`);

    const isSquareAlreadySelected = gameState.turns.some(
      (turn) => turn.square.rowIndex == rowIndex && turn.square.columnIndex == columnIndex
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

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <PlayerInfo initialName='Player 1' symbol='X' activeSymbol={activeSymbol} />
          <PlayerInfo initialName='Player 2' symbol='O' activeSymbol={activeSymbol} />
        </ol>
        {winnerResult.winner && <p>You won, {winnerResult.winner}!</p>}
        <GameBoard board={gameBoard} onSquareClicked={handleSquareClick} />
      </div>
      <TurnsLog turns={turns} />
    </main>
  );
}

export default App;
