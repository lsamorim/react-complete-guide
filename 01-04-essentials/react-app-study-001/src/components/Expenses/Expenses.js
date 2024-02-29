import './Expenses.css';

import { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChat';

function Expenses({ expenses }) {
  const initialFilteredYear = '2023';
  const [filteredYear, setFilteredYear] = useState(initialFilteredYear);
  const onSelectedYearChanged = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === parseInt(filteredYear)
  );
  // console.log(filteredExpenses);
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onSelectedYearChanged={onSelectedYearChanged}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
