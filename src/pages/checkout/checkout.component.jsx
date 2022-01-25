import React from "react";
import { createStructuredSelector } from "reselect";
import { selectItems, totalPrice } from "../../redux/cart/cart.selectors";
import { addItem, reduceItem, removeItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import "./checkout.style.scss";

const mapStateToProps = createStructuredSelector({
  items: selectItems,
  totalPrice: totalPrice,
});

const mapDispatchToPros = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addItem(item)),
    reduceItem: (item) => dispatch(reduceItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
  };
};

export const Checkout = connect(
  mapStateToProps,
  mapDispatchToPros
)(({ items, totalPrice, addToCart, removeItem, reduceItem }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {items.map((item) => {
        return (
          <div className="item" key={item.id}>
            <div className="image-container">
              <img src={item.imageUrl} alt=""></img>
            </div>
            <span className="name">{item.name}</span>
            <span className="counter">
              <span
                className="arrow"
                onClick={() => {
                  reduceItem(item);
                }}
              >
                &#10094;
              </span>
              <span className="counter-value"> {item.counter}</span>
              <span className="arrow" onClick={() => addToCart(item)}>
                &#10095;
              </span>
            </span>
            <span className="price">{item.price}</span>
            <span className="remove-button" onClick={() => removeItem(item)}>
              &#10005;
            </span>
          </div>
        );
      })}

      <span className="total">TOTAL: ${totalPrice}</span>
    </div>
  );
});
