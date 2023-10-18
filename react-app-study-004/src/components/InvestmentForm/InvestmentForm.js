import { useState } from 'react';

import styles from './InvestmentForm.module.css';

import InvestmentFormInput from '../InvestmentFormInput/InvestmentFormInput';

const initialUserInput = {
  'current-savings': 100,
  'yearly-contribution': 1000,
  'expected-return': 10,
  'investment-duration': 8,
};

function InvestmentForm({ onSubmit, onReset }) {
  const [userInput, setUserInput] = useState(initialUserInput);

  const onInputChangeHandler = (id, value) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    onSubmit(userInput);
  };
  const onResetClickedHandler = () => {
    setUserInput(initialUserInput);
    onReset();
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <div className={styles['input-group']}>
        <InvestmentFormInput
          id='current-savings'
          label='Current Savings ($)'
          value={userInput['current-savings']}
          onInputChange={(value) =>
            onInputChangeHandler('current-savings', value)
          }
        />
        <InvestmentFormInput
          id='yearly-contribution'
          label='Yearly Savings ($)'
          value={userInput['yearly-contribution']}
          onInputChange={(value) =>
            onInputChangeHandler('yearly-contribution', value)
          }
        />
      </div>
      <div className={styles['input-group']}>
        <InvestmentFormInput
          id='expected-return'
          label='Expected Interest (%, per year)'
          value={userInput['expected-return']}
          onInputChange={(value) =>
            onInputChangeHandler('expected-return', value)
          }
        />
        <InvestmentFormInput
          id='investment-duration'
          label='Investment Duration (years)'
          value={userInput['investment-duration']}
          onInputChange={(value) => onInputChangeHandler('investment-duration', value)}
        />
      </div>
      <p className={styles.actions}>
        <button
          type='reset'
          className={styles.buttonAlt}
          onClick={onResetClickedHandler}
        >
          Reset
        </button>
        <button type='submit' className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}

export default InvestmentForm;
