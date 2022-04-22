import React, {useState} from 'react';
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
    // let title = props.title;
    const [title,setTitle] = useState(props.title);
    console.log('ExpenseItem evaluated by React');
    const clickHandler = () => {
        // title = 'Updated !!!'    //title can't be updated like this
        // To update title we need to use the function setTitle
        setTitle('Updated !!!');
        console.log(title); // console.log is showing the old values of the variable
    };

    return (
        <Card className = "expense-item">
            <ExpenseDate  date = {props.date}/>
            <div className = "expense-item__description">
                <h2>{title}</h2>
                <div className = "expense-item__price">$ {props.amount}</div>
            </div>
            <button onClick={clickHandler}> Change Title</button>
        </Card>
    );
}

export default ExpenseItem;