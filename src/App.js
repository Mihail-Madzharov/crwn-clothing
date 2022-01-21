import "./App.css";
import { HomePage } from "./pages/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";
import { ShopPage } from "./pages/shoppage/shoppage";
import { Header } from "./components/header/header.component";
import { SignInAndSignUpPage } from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { auth } from "./firebase/firebase.utils";
import React from "react";

class App extends React.Component {
  subscription = null;
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({
        currentUser: user,
      });
    });
  }

  componentWillUnmount() {
    this.subscription();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInAndSignUpPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
