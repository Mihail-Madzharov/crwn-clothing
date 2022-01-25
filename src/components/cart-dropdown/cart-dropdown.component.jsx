import React from "react";
import { CustomButton } from "../custom-button/custom-button.component";
import { CartItem } from "../cart-item/cart-item.component";
import { selectItems } from "../../redux/cart/cart.selectors";
import "./cart-dropdown.style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import { toggleCartVisibility } from "../../redux/cart/cart.actions";

const mapStateToProps = createStructuredSelector({
  items: selectItems,
});

const Cart = ({ items, dispatch }) => {
  const navigate = useNavigate();

  return (
    <div className="cart-dropdown">
      {items.length ? (
        items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            img={item.imageUrl}
            counter={item.counter}
            price={item.price}
          />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}

      <CustomButton
        onClick={() => {
          navigate("/checkout");
          dispatch(toggleCartVisibility());
        }}
      >
        Got to checkout
      </CustomButton>
    </div>
  );
};

export default connect(mapStateToProps)(Cart);
