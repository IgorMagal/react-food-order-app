import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsActive, setCartIsActive] = useState(false);

  const activateCartHandler = () => {
    setCartIsActive(true);
  };
  const hideCartHandler = () => {
    setCartIsActive(false);
  };

  return (
    <CartProvider>
      {cartIsActive && <Cart onCloseCart={hideCartHandler} />}
      <Header onActivateCart={activateCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
