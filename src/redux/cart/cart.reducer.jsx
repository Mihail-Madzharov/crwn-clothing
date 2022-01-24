import { CartActionTypes } from "./cart.actions";

export const cartReducer = (state = { hidden: false }, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_VISIBILITY:
      return { ...state, hidden: !state.hidden };

    default:
      return state;
  }
};
