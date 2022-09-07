import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";

const dummyExpenses = [
  {
    id: "ex1",
    title: "A book",
    amount: 17.24,
    date: new Date(2021, 4, 31),
  },
  {
    id: "ex2",
    title: "Monitor display",
    amount: 355.35,
    date: new Date(2021, 5, 23),
  },
  {
    id: "ex3",
    title: "A toy",
    amount: 34.56,
    date: new Date(2021, 9, 13),
  },
  {
    id: "ex4",
    title: "Home rent",
    amount: 1200.45,
    date: new Date(2022, 6, 15),
  },
  {
    id: "ex5",
    title: "Grocceries",
    amount: 180.95,
    date: new Date(2022, 7, 30),
  },
  {
    id: "ex6",
    title: "Tabla",
    amount: 340.35,
    date: new Date(2022, 8, 17),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpneses) => {
      return [expense, ...previousExpneses];
    });
  };

  return (
    <div className="App">
      <div className="app-header">
        <h1>Expense Tracker</h1>
      </div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
