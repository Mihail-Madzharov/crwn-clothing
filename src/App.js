import "./App.css";
import { HomePage } from "./pages/homepage/homepage.component";
import { Navigate, Route, Routes } from "react-router-dom";
import { ShopPage } from "./pages/shoppage/shoppage";
import Header from "./components/header/header.component";
import { SignInAndSignUpPage } from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { auth } from "./firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import {
  createUserProfileDocument,
  onSnapshot,
} from "./firebase/firebase.utils";
import React from "react";
import { setCurrentUser } from "./redux/user/user.actions";
import { Checkout } from "./pages/checkout/checkout.component";
import { Collection } from "./pages/collection/collection.component";

class App extends React.Component {
  componentDidMount() {
    const { setCurrentUser } = this.props;

    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        onSnapshot(userRef, (snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }

      setCurrentUser(null);
    });
  }

  componentWillUnmount() {
    this.subscription();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/signin"
            element={
              this.user ? <Navigate replace to="/" /> : <SignInAndSignUpPage />
            }
          />
          <Route path="/shop" element={<ShopPage />} />
          <Route
            path="/collection-preview/:categoryId"
            element={<Collection />}
          />
        </Routes>
      </div>
    );
  }
}

const mapDispatchToPros = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToPros)(App);
