import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem({ expense }) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date} />
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
      </div>
    </Card>
  );
}

// function ExpenseItem(props) {
//   return (
//     <div className="expense-item">
//       <div>{props.expense.date.toISOString()}</div>
//       <div className="expense-item__description">
//         <h2>{props.expense.title}</h2>
//         <div className="expense-item__price">{props.expense.amount}</div>
//       </div>
//     </div>
//   );
// }

export default ExpenseItem;
