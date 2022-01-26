import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { cartReducer } from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";
import { directoryReducer } from "./directory/directory.reducer";
import { shopReducer } from "./shop/shop.reducer";

import { connectRouter } from "connected-react-router";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

export const rootReducer = (history) => {
  console.log(history);
  return combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
    router: connectRouter(history),
  });
};
