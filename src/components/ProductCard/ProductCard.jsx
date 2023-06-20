import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, toggleFavorite } from "../../redux/actions";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(product));
  };

  return (
    <div className="product-card-list">
      <div className="product-card">
        {/* Render product details */}
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={handleToggleFavorite}>Add to Favorite</button>
      </div>
    </div>
  );
}

export default ProductCard;
