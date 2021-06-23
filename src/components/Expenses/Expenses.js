import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter';
const Expenses = (props) => {
    const [filteredYear,setFilterYear]=useState('2020')
const filterChangeHandler=(selectedYear)=>{
    setFilterYear(selectedYear)
}
    return(
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
     <ExpenseItem name={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
     <ExpenseItem name={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
     <ExpenseItem name={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
     <ExpenseItem name={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}/>
     
      </Card>
    ) 
}
export default Expenses