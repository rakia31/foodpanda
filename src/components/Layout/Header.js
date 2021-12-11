import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Foodpanda Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src="https://ad962edbae8ba7b03b7f-d10007df79b5b7a4e475a291e50a08cf.ssl.cf3.rackcdn.com/creer-un-fast-food/creer-un-fast-food.jpg" alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;