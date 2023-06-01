import React from "react";
import PropTypes from "prop-types";
import "./ProductCard.css";

const ProductCard = ({
  name,
  price,
  image,
  article,
  onToggleFavorite,
  isFavorite,
  addToCart,
}) => {
  return (
    <div className="product-card-list">
      <div className="product-card">
        <span
          className={`favorite-icon ${isFavorite ? "active" : ""}`}
          onClick={onToggleFavorite}
        >
          &#9734;
        </span>
        <img className="product-image" src={image} alt={name} />
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price}</p>
        <p className="product-article">Article: {article}</p>
        {/* <p className="product-color">Color: {color}</p> */}
        <button
          className="add-to-cart-button"
          onClick={() => addToCart(article)}
        >
          Add to Cart
        </button>
        <button
          className={`favorite-button ${isFavorite ? "favorite" : ""}`}
          onClick={onToggleFavorite}
        >
          Add to Favorite
          <i className="fas fa-star"></i>
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  article: PropTypes.string.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;
