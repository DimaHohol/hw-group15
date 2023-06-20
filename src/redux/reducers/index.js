import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import favoritesReducer from "./favoritesReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  favorites: favoritesReducer,
  modal: modalReducer,
});

export default rootReducer;
