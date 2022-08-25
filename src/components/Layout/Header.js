import { Fragment } from "react";
import styles from "./Header.module.css";
import bannerImg from "../../assets/banner.jpg";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>myCatMealsApp</h1>
        <HeaderCartButton onClick={props.onActivateCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={bannerImg} alt="Banner" />
      </div>
    </Fragment>
  );
};

export default Header;
