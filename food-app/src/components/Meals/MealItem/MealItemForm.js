import React, { useRef, useState } from 'react'
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
    const [amountIsValid,setAmountIsValid] = useState(false);
    const amountInputRef = useRef();

    const submitHandler = (event) =>{
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setAmountIsValid(false);
            return 
        }
        props.onAddToCart(enteredAmountNumber);
    }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input label="Quantity"  ref={amountInputRef} input={{
            id: 'quantity' + props.id,
            type: 'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }}/>
        <button>Add to Cart</button>
        {amountIsValid && <p> Please enter a valid amount 1-5</p>}
    </form>
  )
}

export default MealItemForm