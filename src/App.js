import { useState } from "react";
import Cart from "./components/cart/Cart";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";

function App() {

  const [cartVisibility, setCartVisibility] = useState(false);

  const displayCartHandler = () => {
    setCartVisibility(true);
  };

  const hideCartHandler = () => {
    setCartVisibility(false);
  };

  return (
    <>
      {cartVisibility && <Cart onClose={hideCartHandler}/>}
      <Header onDisplayCart={displayCartHandler}/>
      <main>
        <Meals />
      </main>
    </>
  );

}

export default App;