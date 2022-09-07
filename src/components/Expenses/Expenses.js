import { fi } from "date-fns/locale";
import { useState } from "react";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
