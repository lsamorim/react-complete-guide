import "./NewExpense.css";

import { generateGuid } from "../../util/GuidUtil";
import ExpenseModel from "../../models/ExpenseModel";

import ExpenseForm from "./ExpenseForm";

function NewExpense({ onAddExpense }) {
  const onNewExpenseSubmitted = (inputExpense) => {
    const expenseData = new ExpenseModel(
      generateGuid(),
      new Date(inputExpense.inputDate),
      inputExpense.inputTitle,
      inputExpense.inputAmount
    );

    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onNewExpenseSubmitted={onNewExpenseSubmitted} />
    </div>
  );
}

export default NewExpense;
