import React,{useState} from 'react'
import './NewExpense.css'
import ExpenseForm from'./ExpenseForm'

const NewExpense=(props)=>{
    const [isEditing,SetIsEditing]=useState(false)
    //saveExpenseDataHandler is being called when the form is being submitted in ExpenseForm.js
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        console.log("In NewExpense printing enteredExpenseData",enteredExpenseData)
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        //from here we are calling addExpenseHandler function of App.js
        props.onAddExpense(expenseData)
        SetIsEditing(false)
    }
    const startEditingHandler=()=>{
        SetIsEditing(true);
    }
    const stopEditing=()=>{
        SetIsEditing(false)
    }
    return(
        <div className="new-expense">
            {!isEditing?<button onClick={startEditingHandler}>Add New Expense</button>:<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing}/>}
            
            
        </div>
    )
}
export default NewExpense