import { useState } from 'react';

import Header from './components/Header/Header';
import InvestmentForm from './components/InvestmentForm/InvestmentForm';
import InvestmentResult from './components/InvestmentResult/InvestmentResult';

function App() {
  const [userInput, setUserInput] = useState(null);

  const onSubmitHandler = (userInput) => {
    setUserInput(userInput);
  };

  const onResetHandler = () => {
    setUserInput(null);
  };

  const yearlyData = [];
  if (userInput) {
    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedInterestMultiplier = +userInput['expected-return'] / 100;
    const investmentDuration = +userInput['investment-duration'];

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

  return (
    <div>
      <Header />
      <InvestmentForm onSubmit={onSubmitHandler} onReset={onResetHandler} />
      {!userInput && (
        <p style={{ textAlign: 'center' }}>
          Please, fill out the form above to calculate the result for your{' '}
          <b>investments.</b>
        </p>
      )}
      {userInput && <InvestmentResult yearlyData={yearlyData} />}
    </div>
  );
}

export default App;
