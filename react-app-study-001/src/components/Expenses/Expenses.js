import "./Expenses.css";

import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";

function Expenses({ items }) {
  const initialSelectedYear = "2020";
  const [selectedYear, setSelectedYear] = useState(initialSelectedYear);
  const onSelectedYearChanged = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onSelectedYearChanged={onSelectedYearChanged}
      />
      {items.map((item) => {
        return <ExpenseItem key={item.id} expense={item} />;
      })}
    </Card>
  );
}

export default Expenses;
