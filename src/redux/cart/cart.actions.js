export const CartActionTypes = {
  TOGGLE_CART_VISIBILITY: "TOGGLE_CART_VISIBILITY",
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  REDUCE_ITEM: "REDUCE_ITEM",
};

export const toggleCartVisibility = () => ({
  type: CartActionTypes.TOGGLE_CART_VISIBILITY,
});

export const addItem = (payload) => ({
  type: CartActionTypes.ADD_ITEM,
  payload,
});

export const removeItem = (payload) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload,
});

export const reduceItem = (payload) => ({
  type: CartActionTypes.REDUCE_ITEM,
  payload,
});
