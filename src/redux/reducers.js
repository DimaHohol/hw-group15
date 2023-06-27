const initialState = {
  products: [],
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  isModalOpen: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        products: action.payload,
      };
    case "FETCH_FAVORITES_SUCCESS":
      return {
        ...state,
        favorites: action.payload,
      };
    case "ADD_TO_CART":
      const updatedCartItemsAdd = [...state.cartItems, action.payload];
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItemsAdd));
      return {
        ...state,
        cartItems: updatedCartItemsAdd,
      };
    case "REMOVE_FROM_CART":
      const updatedCartItemsRemove = state.cartItems.filter(
        (item) => item !== action.payload
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItemsRemove));
      return {
        ...state,
        cartItems: updatedCartItemsRemove,
      };
    case "TOGGLE_FAVORITE":
      const updatedFavorites = state.favorites.includes(action.payload)
        ? state.favorites.filter((item) => item !== action.payload)
        : [...state.favorites, action.payload];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return {
        ...state,
        favorites: updatedFavorites,
      };
    case "SET_MODAL_STATE":
      return {
        ...state,
        isModalOpen: action.payload,
      };
    case "UPDATE_CART_ITEMS":
      return {
        ...state,
        cartItems: action.payload,
      };

    case "CLEAR_CART":
      localStorage.removeItem("cartItems");
      return {
        ...state,
        cartItems: [],
      };

    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };
    case "GET_CART_ITEMS":
      return state.cartItems;

    default:
      return state;
  }
};

export default rootReducer;
