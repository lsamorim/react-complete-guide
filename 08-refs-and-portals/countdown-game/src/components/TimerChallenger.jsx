import { useState, useRef } from 'react';

import ResultDialog from './ResultDialog';

export default function TimerChallenger({ title, targetTime }) {
  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);

  const intervalRef = useRef();
  const resultDialog = useRef();

  const timerIsRunning = remainingTime > 0 && remainingTime < targetTime * 1000;
  const timerButtonText = `${timerIsRunning ? 'Stop' : 'Start'} Challenge`;
  const timerStatusText = timerIsRunning ? 'Time is running...' : 'Time inactive ⏱️';

  if (remainingTime <= 0) {
    clearInterval(intervalRef.current);
    resultDialog.current.open();
  }

  function handleOnTimerClick() {
    if (timerIsRunning) {
      clearInterval(intervalRef.current);
      resultDialog.current.open();
    } else {
      intervalRef.current = setInterval(() => {
        setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
      }, 10);
    }
  }

  function handleOnCloseResultDialogClick() {
    setRemainingTime(targetTime * 1000);
  }

  return (
    <>
      <ResultDialog
        ref={resultDialog}
        targetTime={targetTime}
        remainingTime={remainingTime}
        onCloseResultClick={handleOnCloseResultDialogClick}
      />
      <section className='challenge'>
        <h2>{title}</h2>
        <p className='challenge-time'>
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={handleOnTimerClick}>{timerButtonText}</button>
        </p>
        <p className={timerIsRunning ? 'active' : undefined}>{timerStatusText}</p>
      </section>
    </>
  );
}
