import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import NoExpenses from "../../assets/images/Wallet_Isometric.svg";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="expense-list__message">
        <img
          className="expense-list__image"
          src={NoExpenses}
          alt="There is no expense"
        ></img>
        <h2>No expense found.</h2>
      </div>
    );
  }

  return (
    <ul className="expense-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
