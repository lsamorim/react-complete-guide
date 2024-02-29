import { useState } from 'react';

import Header from './components/Header/Header';
import InvestmentForm from './components/InvestmentForm/InvestmentForm';
import InvestmentResult from './components/InvestmentResult/InvestmentResult';

function App() {
  const [userInput, setUserInput] = useState(null);

  const handleOnSubmit = (userInput) => {
    setUserInput(userInput);
  };

  const handleOnResetClick = () => {
    setUserInput(null);
  };

  const yearlyData = [];
  if (userInput) {
    let currentSavings = userInput.currentSavings;
    const yearlyContribution = userInput.yearlyContribution;
    const expectedInterestMultiplier = userInput.expectedReturn / 100;
    const investmentDuration = userInput.investmentDuration;

    let totalInterestGained = 0;
    let totalInvestedCapital = currentSavings;

    for (let i = 0; i < investmentDuration; i++) {
      const interestGainedInYear = currentSavings * expectedInterestMultiplier;
      currentSavings += interestGainedInYear + yearlyContribution;
      totalInterestGained += interestGainedInYear;
      totalInvestedCapital += yearlyContribution;

      yearlyData.push({
        year: i + 1,
        totalSavings: currentSavings,
        interestGainedInYear: interestGainedInYear,
        totalInterestGained: totalInterestGained,
        totalInvestedCapital: totalInvestedCapital,
      });
    }
  }
  console.log('render');
  return (
    <>
      <Header />
      <InvestmentForm onSubmit={handleOnSubmit} onResetClick={handleOnResetClick} />
      {!userInput && (
        <p style={{ textAlign: 'center' }}>
          Please, fill out the form above to calculate the result for your <b>investments.</b>
        </p>
      )}
      {userInput && <InvestmentResult yearlyData={yearlyData} />}
    </>
  );
}

export default App;
