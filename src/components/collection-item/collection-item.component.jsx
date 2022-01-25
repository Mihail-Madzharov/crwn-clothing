import React from "react";
import "./collection-item.component.style.scss";
import { CustomButton } from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const mapDispatchToPros = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addItem(item)),
  };
};

export const CollectionItem = connect(
  null,
  mapDispatchToPros
)(({ id, name, price, imageUrl, addToCart }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton
      onClick={() => {
        addToCart({ id, name, price, imageUrl });
      }}
      inverted
    >
      Add to Cart
    </CustomButton>
  </div>
));
