export const CartActionTypes = {
  TOGGLE_CART_VISIBILITY: "TOGGLE_CART_VISIBILITY",
};

export const toggleCartVisibility = () => ({
  type: CartActionTypes.TOGGLE_CART_VISIBILITY,
});
