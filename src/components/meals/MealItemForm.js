import { useRef, useState } from "react";
import Input from "../ui/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {

  const [amountIsValid, setAmountIsValid] = useState(true);

  const inputAmountRef= useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputAmountRef.current.value;
    const enteredAmountToNum = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountToNum < 1 ||
      enteredAmountToNum > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountToNum);
  };

  return (
    <form
      className={classes.form}
      onSubmit={submitHandler}
    >
      <Input 
        input={{
          defaultValue: "1",
          id: "amount_" + props.id,
          min: "1",
          max: "5",
          step: "1",
          type: "number"
        }}
        label="Amount"
        ref={inputAmountRef}
      />
      <button>
        Add
      </button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );

};

export default MealItemForm;