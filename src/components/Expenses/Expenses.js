import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setFilterYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filteredExpenses=props.items.filter(expense=>{
      return expense.date.getFullYear().toString()===filteredYear;
  })
  let filteredContent=<p style={{color:"white",textAlign:"center"}}>No Expenses Found</p>
  if(filteredExpenses.length>0){
      filteredContent=filteredExpenses.map((expense) => { 
        return <ExpenseItem
           key={expense.id}
           title={expense.title}
           amount={expense.amount}
           date={expense.date}
         />;
       })}
  
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
     {filteredContent}
      
    </Card>
  );
};
export default Expenses;
