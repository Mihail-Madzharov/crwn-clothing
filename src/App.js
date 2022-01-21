import "./App.css";
import { HomePage } from "./pages/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";
import { ShopPage } from "./pages/shoppage/shoppage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
    </Routes>
  );
}

export default App;
