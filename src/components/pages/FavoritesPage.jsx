import React from "react";
import PropTypes from "prop-types";
import "../ProductCard/ProductCard.css";

const FavoritesPage = ({ favorites, removeFromFavorites }) => {
  const handleRemoveFromFavorites = (item) => {
    removeFromFavorites(item);
  };

  return (
    <div>
      <h2>Favorites:</h2>
      <ul>
        {favorites.map((item, index) => (
          <div className="product-card" key={index}>
            <span className="favorite-icon active">
              &#9733; товар у списку улюблених
            </span>
            <img className="product-image" src={item.img_url} alt={item.name} />
            <h3 className="product-name">{item.name}</h3>
            <p className="product-price">${item.price}</p>
            <p className="product-article">Article: {item.article}</p>
            <button
              className="remove-button"
              onClick={() => handleRemoveFromFavorites(item)}
            >
              Видалити зі списку улюблених
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

FavoritesPage.propTypes = {
  favorites: PropTypes.array.isRequired,
  removeFromFavorites: PropTypes.func.isRequired,
};

export default FavoritesPage;
