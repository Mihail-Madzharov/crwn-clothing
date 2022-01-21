import "./App.css";
import { HomePage } from "./pages/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";
import { ShopPage } from "./pages/shoppage/shoppage";
import { Header } from "./components/header/header.component";
import { SignInAndSignUpPage } from "./pages/sign-in-sign-up/sign-in-sign-up.component";

function App() {
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

export default App;
