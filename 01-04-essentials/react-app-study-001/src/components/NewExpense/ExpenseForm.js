import './ExpenseForm.css';

import { useState } from 'react';

function ExpenseForm({ onNewExpenseSubmitted }) {
  const [isAddingNewExpense, setIsAddingNewExpense] = useState(false);
  const [inputTitle, setInputTitle] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');
  // const [expenseInput, setExpenseInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: '',
  // });

  const onAddNewExpenseClickedHandler = () => {
    setIsAddingNewExpense(true);
  };

  const onTitleChangedHandler = ({ target }) => {
    setInputTitle(target.value);
    // setExpenseInput(prevState => {
    //   return { ...prevState, title: target.value };
    // });
  };

  const onAmountChangedHandler = ({ target }) => {
    setInputAmount(target.value);
    // setExpenseInput(prevState => {
    //   return { ...prevState, amount: target.value };
    // });
  };

  const onDateChangedHandler = ({ target }) => {
    setInputDate(target.value);
    // setExpenseInput(prevState => {
    //   return { ...prevState, date: target.value };
    // });
  };

  const onCancelClickedHandler = () => {
    setIsAddingNewExpense(false);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const inputExpense = {
      inputDate,
      inputTitle,
      inputAmount,
    };

    onNewExpenseSubmitted(inputExpense);

    setInputTitle('');
    setInputAmount('');
    setInputDate('');
    setIsAddingNewExpense(false);
  };

  if (!isAddingNewExpense)
    return <button onClick={onAddNewExpenseClickedHandler}>Add new Expense</button>;

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={inputTitle}
            onChange={onTitleChangedHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            value={inputAmount}
            min='0.01'
            step='0.01'
            onChange={onAmountChangedHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            value={inputDate}
            min='2019-01-01'
            max='2023-12-31'
            onChange={onDateChangedHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button onClick={onCancelClickedHandler}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
