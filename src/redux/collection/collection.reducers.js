import { COLLECTION_ACTIONS } from "./collection.actions";
const INITAL_STATE = { items: [] };

export const collectionReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case COLLECTION_ACTIONS.UPDATE_ACTIVE_COLLECTION:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
