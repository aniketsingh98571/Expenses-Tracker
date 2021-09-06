
import Expenses from './components/Expenses/Expenses'
import React,{useState} from 'react'
import NewExpense from './components/NewExpense/NewExpense';
const Dummy_Expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]
function App() {
  const [expenses,setExpense]=useState(Dummy_Expenses)
  //addExpenseHandler function is being called from the NewExpense.js when the new data is being inserted.
  const addExpenseHandler=(expense)=>{
    console.log("In App.js in App function event print",expense)
  //when we want to update the state based on the previous state we pass a function to the state function which takes a parameter for previous
  //state values and returns the current updated state and also previous state 
   setExpense(prevExpenses=>{
    console.log("In App.js printing prevExpense",prevExpenses)
     return [expense,...prevExpenses]
     
   })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
  <Expenses items={expenses}/>
  
    </div>
  );
}

export default App;
