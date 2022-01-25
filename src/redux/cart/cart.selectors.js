import { createSelector } from "reselect";

const cart = (state) => state.cart;

export const selectHidden = createSelector([cart], (cart) => cart.hidden);
export const selectItems = createSelector([cart], (cart) => cart.items);
export const totalPrice = createSelector([selectItems], (items) =>
  items.reduce((acc, item) => acc + item.price * item.counter, 0)
);

export const itemsCount = createSelector([selectItems], (items) =>
  items.reduce((acc, cartItem) => acc + cartItem.counter, 0)
);
