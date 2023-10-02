import React, { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm() {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });
    const titleChangeHandler = (event) => {
        // use previous state to update the new state
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value };
        })
    };
    const amountChangeHandler = (event) => {
        // use previous state to update the new state
        setUserInput((prevState) => {
            return {
                ...prevState, // spread the data
                enteredAmount: event.target.value // override the title value
            }
        })
    };
    const dateChangeHandler = (event) => {
        // use previous state to update the new state
        setUserInput(prevState => {
            return {
                ...prevState, // spread the data
                enteredDate: event.target.value // override the title value
            }
        })
    };

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor="">Title</label>
                    <input value={userInput.enteredTitle} type="text" onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="">Amount</label>
                    <input value={userInput.enteredAmount} type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="">Date</label>
                    <input value={userInput.enteredDate} type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
                <div className='new-expense__actions'>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}
