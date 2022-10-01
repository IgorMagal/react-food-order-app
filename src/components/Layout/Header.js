import { Fragment } from "react";
import bannerImg from "../../assets/banner.jpg";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className="text-white bg-black w-full fixed py-0 px-[5%] items-center shadow-2xl z-10 justify-between flex h-[5rem]">
        <p className="text-3xl font-bold">myCatMealsApp</p>
        <HeaderCartButton onClick={props.onActivateCart} />
      </header>
      <div className="w-[100%] h-[20rem] z-0 overflow-hidden">
        <img
          className=" w-[110%] object-cover -rotate-[10deg] -translate-y-[4rem] -translate-x-[0.5rem]"
          src={bannerImg}
          alt="Banner"
        />
      </div>
    </Fragment>
  );
};

export default Header;
