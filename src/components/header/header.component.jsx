import React from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import Cart from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectHidden, itemsCount } from "../../redux/cart/cart.selectors";

import { createStructuredSelector } from "reselect";

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHidden,
  cartItemsCount: itemsCount,
});

const Header = ({ currentUser, hidden, cartItemsCount }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Sign out
        </div>
      ) : (
        <Link className="option" to="signin">
          Sign in
        </Link>
      )}

      <CartIcon itemsCount={cartItemsCount} />
      {hidden ? <Cart /> : null}
    </div>
  </div>
);

export default connect(mapStateToProps)(Header);
