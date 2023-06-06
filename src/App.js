import React, { useState, useEffect } from "react";
import ProductList from "./components/productlist/productlist";
import Modal from "./components/modal/modal";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
    fetchFavorites();
  }, []);

  const fetchProducts = () => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);

        const cartItems = localStorage.getItem("cartItems");
        if (cartItems) {
          setCartItems(JSON.parse(cartItems));
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  const fetchFavorites = () => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      setFavorites(JSON.parse(favorites));
    }
  };

  const addToCart = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const confirmAddToCart = () => {
    const updatedCartItems = [...cartItems, selectedProduct];
    setCartItems(updatedCartItems);
    setShowModal(false);
    setSelectedProduct(null);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const cancelAddToCart = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const toggleFavorite = (article) => {
    const updatedFavorites = favorites.includes(article)
      ? favorites.filter((favArticle) => favArticle !== article)
      : [...favorites, article];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const openModal = (product) => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="app">
      <header>
        <h1>My Online Store</h1>
        <div className="icons">
          <span className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
            <img
              className="backet-image"
              src={"/image/header/bascket.svg"}
            ></img>
            <span className="cart-count">{cartItems.length}</span>
          </span>
          <span className="favorites-icon">
            <i className="fas fa-star"></i>
            <img
              className="backet-image"
              src={"/image/header/heart-svgrepo-com.svg"}
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
        <ProductList
          products={products}
          favorites={favorites}
          addToCart={openModal}
          onToggleFavorite={toggleFavorite}
        />
      </main>
    </div>
  );
};

export default App;
