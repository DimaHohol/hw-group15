export const fetchProducts = () => {
  return (dispatch) => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: data });
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };
};

export const fetchFavorites = () => {
  return (dispatch) => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      dispatch({
        type: "FETCH_FAVORITES_SUCCESS",
        payload: JSON.parse(favorites),
      });
    }
  };
};

export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export const removeFromCart = (product) => ({
  type: "REMOVE_FROM_CART",
  payload: product,
});

export const toggleFavorite = (article) => ({
  type: "TOGGLE_FAVORITE",
  payload: article,
});
