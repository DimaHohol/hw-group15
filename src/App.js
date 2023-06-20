import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./redux/actions/cartActions";
import {
  addToFavorites,
  removeFromFavorites,
} from "./redux/actions/favoritesActions";
import { openModal, closeModal } from "./redux/actions/modalActions";

const App = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  const favorites = useSelector((state) => state.favorites);
  const showModal = useSelector((state) => state.showModal);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleAddToFavorites = (product) => {
    dispatch(addToFavorites(product));
  };

  const handleRemoveFromFavorites = (product) => {
    dispatch(removeFromFavorites(product));
  };

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
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
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                favorites={favorites}
                addToCart={addToCartHandler}
                onToggleFavorite={toggleFavoriteHandler}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                removeFromCart={removeFromCartHandler}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <FavoritesPage
                favorites={favorites}
                removeFromFavorites={removeFromFavoritesHandler}
              />
            }
          />
        </Routes>
        // Остальной код... Попробуйте использовать этот обновленный код и
        проверьте, исчезают ли ошибки, с которыми вы столкнулись.
      </main>
    </div>
  );
};

export default App;
