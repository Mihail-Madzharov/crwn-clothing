import { CartActionTypes } from "./cart.actions";

function addItem(state, action) {
  const { items } = state;
  const { payload } = action;
  const itemIdx = items.findIndex((i) => i.id === payload.id);

  if (itemIdx > -1) {
    const item = items[itemIdx];
    let counter = item.counter;

    const newItem = { ...item, counter: ++counter };
    const newItems = items.map((item, idx) =>
      idx === itemIdx ? newItem : item
    );
    return { ...state, items: newItems };
  }

  const newItem = { ...payload, counter: 1 };

  return { ...state, items: [...items, newItem] };
}

function removeItem(state, action) {
  const { items } = state;
  const newItems = items.filter((i) => i.id !== action.payload.id);
  console.log(newItems);
  return { ...state, items: newItems };
}

function reduceItem(state, action) {
  const { items } = state;

  const item = items.find((i) => i.id === action.payload.id);

  if (item.counter === 1) {
    return { ...state, items: items.filter((i) => i.id !== action.payload.id) };
  }
  console.log(action.payload);
  return {
    ...state,
    items: items.map((item) =>
      item.id === action.payload.id
        ? { ...item, counter: --item.counter }
        : item
    ),
  };
}

export const cartReducer = (state = { hidden: false, items: [] }, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_VISIBILITY:
      return { ...state, hidden: !state.hidden };
    case CartActionTypes.ADD_ITEM:
      return addItem(state, action);
    case CartActionTypes.REMOVE_ITEM:
      return removeItem(state, action);
    case CartActionTypes.REDUCE_ITEM:
      return reduceItem(state, action);
    default:
      return state;
  }
};
