import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions/types";

const initialState = {
  items: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        items: state.items.filter((item) => item.article !== action.payload),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
