export const COLLECTION_ACTIONS = {
  UPDATE_ACTIVE_COLLECTION: "UPDATE_ACTIVE_COLLECTION",
};

export const updateActiveCollection = (items) => ({
  type: COLLECTION_ACTIONS.UPDATE_ACTIVE_COLLECTION,
  payload: items,
});
