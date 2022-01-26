import React from "react";
import "./collection-item.component.style.scss";
import { CustomButton } from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";
import { useDispatch } from "react-redux";

export const CollectionItem = ({ id, name, price, imageUrl }) => {
  const dispatch = useDispatch();
  return (
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
          dispatch(addItem({ id, name, price, imageUrl }));
        }}
        inverted
      >
        Add to Cart
      </CustomButton>
    </div>
  );
};
