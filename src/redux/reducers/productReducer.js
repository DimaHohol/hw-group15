import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
} from "../actions/types";

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default productReducer;
