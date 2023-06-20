export const fetchProducts = () => {
  return (dispatch) => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchProductsSuccess(data));
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };
};

export const fetchProductsSuccess = (data) => ({
  type: "FETCH_PRODUCTS_SUCCESS",
  payload: data,
});

export const fetchFavorites = () => {
  return (dispatch) => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      dispatch(fetchFavoritesSuccess(JSON.parse(favorites)));
    }
  };
};

export const fetchFavoritesSuccess = (favorites) => ({
  type: "FETCH_FAVORITES_SUCCESS",
  payload: favorites,
});

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

export const setModalState = (isOpen) => {
  return (dispatch) => {
    dispatch(setModalStateAction(isOpen));
  };
};

export const setModalStateAction = (isOpen) => ({
  type: "SET_MODAL_STATE",
  payload: isOpen,
});
