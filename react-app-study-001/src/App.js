// import React from "react";

import { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

import ExpenseModel from "./models/ExpenseModel";
import { generateGuid } from "./util/GuidUtil";

function App() {
  const [expenses, setExpenses] = useState([
    new ExpenseModel(generateGuid(), new Date(2023, 2, 15), "Car Insurance", 294.67),
    new ExpenseModel(generateGuid(), new Date(2023, 5, 10), "Ultimate book", 100),
    new ExpenseModel(generateGuid(), new Date(2023, 8, 10), "Dog Vet", 25),
  ]);

  const onAddExpense = (expense) => {
    setExpenses(prevState => [...prevState, expense]);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={onAddExpense}/>
      <Expenses items={expenses} />
    </div>
  );
  
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, {items:expenses})
  // );
}

export default App;
