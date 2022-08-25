import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotal = action.item.price * action.item.qty + state.cartTotal;
    console.log(action.item.price);
    console.log(action.item.qty);
    console.log(state.cartTotal);
    console.log(updatedTotal);

    return {
      items: updatedItems,
      cartTotal: updatedTotal,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    cartTotal: cartState.cartTotal,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
