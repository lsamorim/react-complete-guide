import './TurnsLog.css';

export default function TurnsLog({ turns }) {
  return (
    <ol id='log'>
      {turns.map((turn) => {
        const { square, symbol } = turn;
        const { rowIndex, columnIndex } = square;
        const key = `${rowIndex}${columnIndex}`;
        return (
          <li key={key} className='highlighted'>
            {symbol} selected {rowIndex}, {columnIndex}
          </li>
        );
      })}
    </ol>
  );
}
