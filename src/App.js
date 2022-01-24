import "./App.css";
import { HomePage } from "./pages/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";
import { ShopPage } from "./pages/shoppage/shoppage";
import Header from "./components/header/header.component";
import { SignInAndSignUpPage } from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { auth } from "./firebase/firebase.utils";

import { connect } from "react-redux";

import {
  createUserProfileDocument,
  onSnapshot,
} from "./firebase/firebase.utils";
import React from "react";
import { setCurrentUser } from "./redux/user/user.actions";

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
          <Route path="/signin" element={<SignInAndSignUpPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </div>
    );
  }
}

const mapDispatchToPros = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToPros)(App);
