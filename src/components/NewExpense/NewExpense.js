import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (usedData) => {
    const expenseData = {
      ...usedData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  return (
    <Card className="new-expense">
      {!isEditing && (
        <button className="show-form" onClick={startEditing}>
          Add your expense here!
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditing}
        />
      )}
    </Card>
  );
};

export default NewExpense;
