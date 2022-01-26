import { createSelector } from "reselect";

const collection = (state) => state.collection;

export const collectionSelector = createSelector([collection], (collection) => {
  console.log("Collection", collection);
  return collection.items;
});
