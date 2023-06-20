export const addToFavorites = (product) => ({
  type: "ADD_TO_FAVORITES",
  payload: product,
});

export const removeFromFavorites = (product) => ({
  type: "REMOVE_FROM_FAVORITES",
  payload: product,
});
