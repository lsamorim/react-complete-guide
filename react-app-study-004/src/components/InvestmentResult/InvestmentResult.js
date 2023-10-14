import styles from './InvestmentResult.module.css';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

function InvestmentResult({ yearlyData }) {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {yearlyData.map((data) => (
          <tr key={data.year}>
            <td>{data.year}</td>
            <td>{formatter.format(data.totalSavings)}</td>
            <td>{formatter.format(data.interestGainedInYear)}</td>
            <td>{formatter.format(data.totalInterestGained)}</td>
            <td>{formatter.format(data.totalInvestedCapital)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default InvestmentResult;
