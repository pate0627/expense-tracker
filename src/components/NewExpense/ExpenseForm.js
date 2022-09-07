import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    const bitz = date.split("-");

    const usedData = {
      title: title,
      amount: +amount,
      date: new Date(bitz[0], bitz[1], bitz[2]),
    };

    props.onSaveExpenseData(usedData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={formHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2018-01-01"
            max="2023-12-31"
            value={date}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button id="expense-button" type="submit">
          Add Expense
        </button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
