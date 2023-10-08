import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

function Expenses({ items }) {
  return (
    <Card className="expenses">
      {items.map((item) => {
        return <ExpenseItem key={item.id} expense={item} />;
      })}
    </Card>
  );
}

export default Expenses;
