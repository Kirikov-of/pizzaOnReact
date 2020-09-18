import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Logo from ".././assets/pizza.png";
import Button from "./Button";

function Header() {
  const { totalPrice } = useSelector(({ cart }) => ({
    totalPrice: cart.totalPrice,
  }));

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header_logo">
            <img src={Logo} alt="Pizza-logo" />
            <div>
              <h1>Pizza-hall</h1>
              <p>пицца от всей души</p>
            </div>
          </div>
        </Link>
        <Link to="/cart">
          <Button className="header_cart btn">
            {<span>Корзина {totalPrice} </span>}
          </Button>
        </Link>
      </div>
      <hr />
    </div>
  );
}

export default Header;
