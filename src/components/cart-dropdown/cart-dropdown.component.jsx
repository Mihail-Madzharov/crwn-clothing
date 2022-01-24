import React from "react";
import { CustomButton } from "../custom-button/custom-button.component";
import "./cart-dropdown.style.scss";

const Cart = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-item"></div>
      <CustomButton>Add to Cart</CustomButton>
    </div>
  );
};

export default Cart;
