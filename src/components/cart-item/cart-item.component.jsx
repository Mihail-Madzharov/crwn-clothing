import React from "react";
import "./cart-item.style.scss";
export const CartItem = ({ img, name, counter, price }) => {
  return (
    <div className="cart-item">
      <img className="image" src={img} alt="" />

      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {counter}x${price}
        </span>
      </div>
    </div>
  );
};
