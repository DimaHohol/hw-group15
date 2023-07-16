import rootReducer from "../redux/reducers.js";
import initialState from "../redux/reducers";

describe("Root Reducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      products: [],
      cartItems: [],
      favorites: [],
      isModalOpen: false,
    };

    expect(rootReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCH_PRODUCTS_SUCCESS", () => {
    const action = {
      type: "FETCH_PRODUCTS_SUCCESS",
      payload: [
        /* product data */
      ],
    };

    const expectedState = {
      ...initialState,
      products: action.payload,
    };

    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  // Add more test cases for other actions...

  it("should handle CLEAR_CART", () => {
    const action = {
      type: "CLEAR_CART",
    };

    const stateWithCartItems = {
      ...initialState,
      cartItems: [
        /* cart item data */
      ],
    };

    const expectedState = {
      ...stateWithCartItems,
      cartItems: [],
    };

    expect(rootReducer(stateWithCartItems, action)).toEqual(expectedState);
  });

  it("should handle GET_CART_ITEMS", () => {
    const action = {
      type: "GET_CART_ITEMS",
    };

    const stateWithCartItems = {
      ...initialState,
      cartItems: [
        /* cart item data */
      ],
    };

    expect(rootReducer(stateWithCartItems, action)).toEqual(
      stateWithCartItems.cartItems
    );
  });

  // Add more test cases for other actions...
});
