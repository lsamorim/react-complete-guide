import { useState } from 'react';

import styles from './InvestmentForm.module.css';

import InvestmentFormInput from '../InvestmentFormInput/InvestmentFormInput';

const INITIAL_USER_INPUT = {
  currentSavings: 100,
  yearlyContribution: 1200,
  expectedReturn: 10,
  investmentDuration: 10,
};

function InvestmentForm({ onSubmit, onResetClick }) {
  const [userInput, setUserInput] = useState(INITIAL_USER_INPUT);

  const handleOnInputChange = (id, value) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [id]: +value,
      };
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmit(userInput);
  };

  const handleOnResetClick = () => {
    setUserInput(INITIAL_USER_INPUT);
    onResetClick();
  };

  return (
    <form className={styles.form} onSubmit={handleOnSubmit}>
      <div className={styles['input-group']}>
        <InvestmentFormInput
          id='current-savings'
          label='Current Savings ($)'
          value={userInput.currentSavings}
          onInputChange={(value) =>
            handleOnInputChange('currentSavings', value)
          }
        />
        <InvestmentFormInput
          id='yearly-contribution'
          label='Yearly Savings ($)'
          value={userInput.yearlyContribution}
          onInputChange={(value) =>
            handleOnInputChange('yearlyContribution', value)
          }
        />
      </div>
      <div className={styles['input-group']}>
        <InvestmentFormInput
          id='expected-return'
          label='Expected Interest (%, per year)'
          value={userInput.expectedReturn}
          onInputChange={(value) =>
            handleOnInputChange('expectedReturn', value)
          }
        />
        <InvestmentFormInput
          id='investment-duration'
          label='Investment Duration (years)'
          value={userInput.investmentDuration}
          onInputChange={(value) => handleOnInputChange('investmentDuration', value)}
        />
      </div>
      <p className={styles.actions}>
        <button
          type='reset'
          className={styles.buttonAlt}
          onClick={handleOnResetClick}
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
