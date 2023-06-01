import React from "react";

import "./ProductCard.css";

class ProductCard extends React.Component {
  render() {
    const { name, price, image, article, onToggleFavorite, isFavorite } =
      this.props;

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
            onClick={() => this.props.addToCart(this.props.product)}
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
  }
}

export default ProductCard;
