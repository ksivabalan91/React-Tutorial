import './Expenses.css'
import Card from './Card';
import ExpenseItem from './ExpenseItem';

function Expenses(props){
    
    const item1 = props.expenses[0]
    const item2 = props.expenses[1]
    const item3 = props.expenses[2]

    return(
        <Card className="expenses">
            <ExpenseItem title={item1.title} amount={item1.amount} date = {item1.date}/>
            <ExpenseItem title={item2.title} amount={item2.amount} date = {item2.date}/>
            <ExpenseItem title={item3.title} amount={item3.amount} date = {item3.date}/>
        </Card>
    );
}

export default Expenses;