import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {

  const cartContext = useContext(CartContext);

  const cartItemsCount = cartContext.items.reduce((total, i) => {
    return total + i.amount;
  }, 0);

  return (
    <button
      className={classes.button}
      onClick={props.onClick}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>
        Your Cart
      </span>
      <span className={classes.badge}>
        {cartItemsCount}
      </span>
    </button>
  );

};

export default HeaderCartButton;