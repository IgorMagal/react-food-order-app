import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import { useContext, useState } from "react";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckingOut, setCheckingOut] = useState(false);

  const cartContext = useContext(CartContext);

  const cartTotal = `$ ${cartContext.cartTotal.toFixed(2)}`;
  const cartHasItems = cartContext.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartContext.addItem({ ...item, qty: 1 });
  };

  const orderHandler = () => {
    setCheckingOut((val) => (val = !val));
  };

  const modalActions = (
    <div className={styles.actions}>
      <button className={styles["button--alt"]} onClick={props.onCloseCart}>
        Close
      </button>
      {cartHasItems && (
        <button className={styles.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          qty={item.qty}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      {!cartHasItems && (
        <p>Your cart is empty, go ahead and add some food to it!</p>
      )}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{cartTotal}</span>
      </div>
      {isCheckingOut && <Checkout onCancel={props.onCloseCart} />}
      {!isCheckingOut && modalActions}
    </Modal>
  );
};

export default Cart;
