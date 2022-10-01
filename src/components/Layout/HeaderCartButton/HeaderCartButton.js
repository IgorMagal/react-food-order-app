import { useContext, useEffect, useState } from "react";
import CartIcon from "../../../assets/CartIcon/CartIcon";

import CartContext from "../../../store/CartContext";

const HeaderCartButton = (props) => {
  const [btnHighlighted, setBtnHighlighted] = useState(false);
  const cartContext = useContext(CartContext);
  const { items } = cartContext;

  const cartItemsQty = items.reduce((counter, item) => {
    return counter + item.qty;
  }, 0);

  const btnStyles = `${
    btnHighlighted
      ? "hover:border-white animate-wiggle cursor-pointer text-inherit justify-around font-bold border-solid border-4 items-center border-white bg-gray-800 text-white flex rounded-full py-2 p[1rem] min-w-[4.5rem] min-h-[3rem]"
      : "hover:border-white cursor-pointer text-inherit justify-around font-bold border-solid border-4 items-center border-gray-800 bg-gray-800 text-white flex rounded-full py-2 p[1rem] min-w-[4.5rem] min-h-[3rem]"
  }`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighlighted(true);
    const btnTimer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 500);
    return () => {
      clearTimeout(btnTimer);
    };
  }, [items]);

  return (
    <button className={btnStyles} onClick={props.onClick}>
      <span className="">
        <CartIcon />
      </span>
      <span className="text-2xl pr-2">{cartItemsQty}</span>
    </button>
  );
};

export default HeaderCartButton;
