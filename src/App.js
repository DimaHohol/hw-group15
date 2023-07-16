// react-hw-group15/hw-group15/src/App.js

import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, fetchFavorites } from "./redux/actions";
import ProductList from "./components/productlist/productlist";
import Modal from "./components/modal/modal";
import CartPage from "./components/pages/CartPage";
import FavoritesPage from "./components/pages/FavoritesPage";
import { ViewModeProvider } from "../src/context/ViewContext";
import "./App.css";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cartItems);
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchFavorites());
  }, [dispatch]);

  const addToCart = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const confirmAddToCart = () => {
    const updatedCartItems = [...cartItems, selectedProduct];
    dispatch({ type: "ADD_TO_CART", payload: updatedCartItems });
    setShowModal(false);
    setSelectedProduct(null);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const cancelAddToCart = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem !== item);
    dispatch({ type: "REMOVE_FROM_CART", payload: updatedCartItems });
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const removeFromFavorites = (article) => {
    const updatedFavorites = favorites.filter(
      (favArticle) => favArticle !== article
    );
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: updatedFavorites });
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="app">
      <header>
        <h1>My Online Store</h1>
        <nav>
          <button className="link">
            <Link to="/">Головна</Link>
          </button>
          <button className="link">
            <Link to="/cart">Кошик</Link>
          </button>
          <button className="link">
            <Link to="/favorites">Вибране</Link>
          </button>
        </nav>
        <div className="icons">
          <span className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
            <img
              className="backet-image"
              src={"/image/header/bascket.svg"}
              alt="Cart"
            ></img>
            <span className="cart-count">{cartItems.length}</span>
          </span>
          <span className="favorites-icon">
            <i className="fas fa-star"></i>
            <img
              className="backet-image"
              src={"/image/header/heart-svgrepo-com.svg"}
              alt="Favorites"
            ></img>
            <span className="favorites-count">{favorites.length}</span>
          </span>
        </div>
      </header>
      <main>
        {showModal && (
          <Modal
            header="Add to Cart"
            closeButton={true}
            text={"Are you sure you want to add to your cart?"}
            actions={
              <>
                <button onClick={confirmAddToCart}>Confirm</button>
                <button onClick={cancelAddToCart}>Cancel</button>
              </>
            }
            onClose={cancelAddToCart}
          />
        )}
        <Routes>
          <Route
            path="/"
            element={
              <ViewModeProvider>
                <ProductList
                  products={products}
                  favorites={favorites}
                  addToCart={addToCart}
                />
              </ViewModeProvider>
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                favorites={favorites}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <FavoritesPage
                favorites={favorites}
                removeFromFavorites={removeFromFavorites}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
