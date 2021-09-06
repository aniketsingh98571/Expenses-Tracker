import React,{useState} from 'react'
import './NewExpense.css'
import ExpenseForm from'./ExpenseForm'

const NewExpense=(props)=>{
    const [isEditing,SetIsEditing]=useState(false)
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
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