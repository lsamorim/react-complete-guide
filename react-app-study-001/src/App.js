
// import React from "react";
import Expenses from "./components/Expenses/Expenses";
import ExpenseModel from "./models/ExpenseModel";

function App() {
  const expenses = [
    new ExpenseModel("e1", new Date(2023, 2, 15), "Car Insurance", 294.67),
    new ExpenseModel("e2", new Date(2023, 5, 10), "Ultimate book", 100),
    new ExpenseModel("e3", new Date(2023, 8, 10), "Dog Vet", 25),
  ];
  return (
    <div className="App">
      <h2>Let's get started!</h2>
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
