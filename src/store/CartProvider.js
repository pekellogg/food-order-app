import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  /* If item exists, update new total. Otherwise add to cart. */
  if (action.type === "ADD") {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const itemIndex = state.items.findIndex((item) => item.id === action.item.id);
    const item = state.items[itemIndex]
    let updatedItems;
    if (item) {
      const updatedItem = {
        ...item,
        amount: item.amount + action.item.amount
      };
      updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item); /* ??? */
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
  const addToCartHandler = (item) => dispatchCartAction({ type: "ADD", item: item });
  const removeFromCartHandler = (id) => dispatchCartAction({ type: "REMOVE", id: id });

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler
  };
  
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );

};

export default CartProvider;