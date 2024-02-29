import './ExpensesList.css';

import ExpenseItem from './ExpenseItem';

function ExpensesList({ expenses }) {
  if (expenses.length === 0) {
    return <h2 className='expenses-list__fallback'>No expenses found.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </ul>
  );
}

export default ExpensesList;
