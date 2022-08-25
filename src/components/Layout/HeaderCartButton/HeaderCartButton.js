import { useContext } from "react";
import CartIcon from "../../../assets/CartIcon/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../../store/CartContext";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);

  const cartItemsQty = cartContext.items.reduce((counter, item) => {
    return counter + item.qty;
  }, 0);

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span className={styles.badge}>{cartItemsQty}</span>
    </button>
  );
};

export default HeaderCartButton;
