import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const ResultDialog = forwardRef(function ResultDialog(
  { targetTime, remainingTime, onCloseResultClick },
  ref
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const result = userLost ? 'You lost! 🙁' : 'You win! 🎉';

  const formattedRemainingSeconds = (remainingTime / 1000).toFixed(2);

  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className='result-modal' onClose={onCloseResultClick}>
      <h2>{result}</h2>
      {!userLost && <p>Score: {score}</p>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formattedRemainingSeconds} seconds left.</strong>
      </p>
      <form method='dialog' onSubmit={onCloseResultClick}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultDialog;
