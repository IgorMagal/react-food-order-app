import { useContext, useEffect, useState } from "react";
import CartIcon from "../../../assets/CartIcon/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../../store/CartContext";

const HeaderCartButton = (props) => {
  const [btnHighlighted, setBtnHighlighted] = useState(false);
  const cartContext = useContext(CartContext);
  const { items } = cartContext;

  const cartItemsQty = items.reduce((counter, item) => {
    return counter + item.qty;
  }, 0);

  const btnStyles = `${styles.button} ${btnHighlighted ? styles.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighlighted(true);
    const btnTimer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(btnTimer);
    };
  }, [items]);

  return (
    <button className={btnStyles} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span className={styles.badge}>{cartItemsQty}</span>
    </button>
  );
};

export default HeaderCartButton;
