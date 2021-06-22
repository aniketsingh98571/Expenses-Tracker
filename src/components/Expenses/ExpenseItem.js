import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import React, { useState } from 'react'
const ExpenseItem = (props)=> {
    const [title,settitle]=useState("")
    const clickHandler=()=>{
        settitle("Aniket")
    }
  return (
      <Card className="expense-item">
          <ExpenseDate date={props.date} amount={props.amount} title={props.title}/>
  <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">${props.amount}</div>
  </div>
  <button onClick={clickHandler}>Click</button>
  </Card>
    );
}
export default ExpenseItem;
