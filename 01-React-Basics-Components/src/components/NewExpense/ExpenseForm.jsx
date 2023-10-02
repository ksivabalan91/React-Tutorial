import React, { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm() {
    const [enteredTitle,setEnteredTitle] = useState('Leet Code')
    const [enteredAmount,setEnteredAmount] = useState(1337)
    const [enteredDate,setEnteredDate] = useState('2019-12-12')

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    };

    const formDataHandler = (form) => {
        console.log(form)
        console.log("form handler called")
    }



  return (
    <form onSubmit={formDataHandler}>        
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label htmlFor="">Title</label>
                <input value={enteredTitle} type="text" onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label htmlFor="">Amount</label>
                <input value={enteredAmount} type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label htmlFor="">Date</label>
                <input value={enteredDate} type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
  )
}
