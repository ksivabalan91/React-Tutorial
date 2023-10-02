import React, { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm() {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => { setEnteredTitle(event.target.value) };
    const amountChangeHandler = (event) => { setEnteredAmount(event.target.value) };
    const dateChangeHandler = (event) => { setEnteredDate(event.target.value) };

    const inputChangeHandler = (identifier, value) => {
        if (identifier === 'title') {
            setEnteredTitle(value)
        } else if (identifier === 'amount') {
            setEnteredAmount(value)
        } else if (identifier === 'date') {
            setEnteredDate(value)
        }
    }   

    return (
        <form >
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor="">Title</label>
                    <input value={enteredTitle} type="text" onChange={(event)=>{inputChangeHandler('title',event.target.value) }} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="">Amount</label>
                    <input value={enteredAmount} type="number" min="0.01" step="0.01" onChange={event=>inputChangeHandler('amount',event.target.value)} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="">Date</label>
                    <input value={enteredDate} type="date" min="2019-01-01" max="2022-12-31" onChange={event=>inputChangeHandler('date',event.target.value)} />
                </div>
                <div className='new-expense__actions'>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}
