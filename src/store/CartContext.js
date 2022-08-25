import { createContext } from "react";

const CartContext = createContext({
  items: [],
  cartTotal: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
