import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import favoritesReducer from "./favoritesReducer";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
