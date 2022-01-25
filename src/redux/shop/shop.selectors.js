import { createSelector } from "reselect";

const shop = (state) => state.shop;

export const collectionSelector = createSelector(
  [shop],
  (shop) => shop.collections
);
