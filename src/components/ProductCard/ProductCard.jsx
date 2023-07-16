// react-hw-group15/hw-group15/src/components/ProductCard/ProductCard.jsx

import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites, addToCart, toggleFavorite } from "../../redux/actions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isFavorite = favorites.some((favorite) => favorite.id === product.id);

  const handleAddToFavorite = () => {
    if (!isFavorite) {
      dispatch(addToFavorites(product));
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(product));
  };

  return (
    <div className="product-card-list">
      <div className="product-card">
        <span
          className={`favorite-icon ${isFavorite ? "active" : ""}`}
          // onClick={handleToggleFavorite}
        >
          &#9734;
        </span>
        <img className="product-image" src={product.image} alt={product.name} />
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price}</p>
        <p className="product-article">Article: {product.article}</p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button onClick={handleToggleFavorite}>
          {isFavorite ? "У списку улюблених" : "Додати до улюблених"}
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    article: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
