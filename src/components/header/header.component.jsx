import React from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

export const Header = ({ currentUser }) => (
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
        <div
          className="option"
          onClick={() => {
            console.log(currentUser);
            return auth.signOut();
          }}
        >
          Sign out
        </div>
      ) : (
        <Link className="option" to="signin">
          Sign in
        </Link>
      )}
    </div>
  </div>
);
