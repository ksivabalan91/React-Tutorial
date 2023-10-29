import React, { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm() {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => { setEnteredTitle(event.target.value) };
    const amountChangeHandler = (event) => { setEnteredAmount(event.target.value) };
    const dateChangeHandler = (event) => { setEnteredDate(event.target.value) };

    const submitHandler = (event) => {
        // by default, submitting forms will reload page. Hence we can stop the reload with the following function
        event.preventDefault();

        const expenseData = {
            title: event.target.title.value,
            amount: event.target.amount.value,
            date: new Date(event.target.date.value)
        };
        console.log(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    };


    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor="">Title</label>
                    <input value={enteredTitle} type="text" onChange={titleChangeHandler} id='title' />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="">Amount</label>
                    <input value={enteredAmount} type="number" min="0.01" step="0.01" onChange={amountChangeHandler} id='amount' />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="">Date</label>
                    <input value={enteredDate} type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} id='date' />
                </div>
                <div className='new-expense__actions'>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}
