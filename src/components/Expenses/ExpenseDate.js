import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const myDate = props.date;
  const day = myDate.toLocaleString("en-US", { day: "2-digit" });
  let month = monthList[myDate.getMonth() - 1];
  const year = myDate.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
