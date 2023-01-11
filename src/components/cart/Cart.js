import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Modal from "../ui/modal/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;
  const addItemHandler = (item) => {};
  const removeItemHandler = (id) => {};

  const cartItems = 
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => {
        return (
          <CartItem
            amount={item.amount}
            key={item.id}
            name={item.name}
            onAdd={addItemHandler.bind(null, item)}
            onRemove={removeItemHandler.bind(null, item.id)}
            price={item.price}
          />
        )})}
    </ul>;

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span> Total Amount </span>
        <span> {totalAmount} </span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}> Close </button>
        {hasItems && <button className={classes.button}> Order </button>}
      </div>
    </Modal>
  );

}

export default Cart;