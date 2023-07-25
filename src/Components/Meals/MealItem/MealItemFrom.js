import React, { useState, useRef,useContext } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import cartContaxt from "../../../store/Cart-Context";

export default function MealItemFrom(props) {
  const cartCtx=useContext(cartContaxt)
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const submitHandler = (event) => {

    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;



    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    // if (
    //   enteredAmountNumber.trim().length === 0 ||
    //   enteredAmountNumber < 1 ||
    //   enteredAmountNumber > 5
    // ) {
    //   setAmountIsValid(false);
    //   return;
    // }
    props.addToCartHandler(enteredAmountNumber);
  };
  return (
    <form className={classes.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "text",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={submitHandler}>+Add</button>
      {!amountIsValid && <p>Please enter a vlaid amount (1-5).</p>}
    </form>
  );
}
