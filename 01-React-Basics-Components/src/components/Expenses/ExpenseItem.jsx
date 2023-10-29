import React, { useState } from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){
    // React hoook need to be called inside the component function
    // give it an initial value
    // Always returns an array with the 2items, the item itself [0] and a updating function [1]
    const [title, setTitle] = useState(props.title);

    // let title = props.title;

    const clickHandler = () => {
        setTitle("Updated");
        console.log(title)
    };

    
    
    return (
    <Card className='expense-item'>
        <ExpenseDate date = {props.date}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
            {/* don't use clickerHandler() as it will execute the function upon parsing the code */}
            <button onClick={clickHandler}>Change title</button>
        </div>        
    </Card>
    );
}




export default ExpenseItem