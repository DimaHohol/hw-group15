import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";
import "./productlist.css";

const ProductList = ({ favorites, addToCart, onToggleFavorite }) => {
  const products = useSelector((state) => state.products);

  const isFavorite = (article) => {
    if (Array.isArray(favorites)) {
      return favorites.includes(article);
    }
    return false;
  };

  return (
    <div className="product-list">
      {products.map((product) => {
        return (
          <ProductCard
            product={product}
            key={product.article}
            name={product.name}
            price={product.price}
            image={product.img_url}
            article={product.article}
            onToggleFavorite={() => onToggleFavorite(product)}
            isFavorite={favorites.includes(product.article)}
            addToCart={addToCart}
          />
        );
      })}
    </div>
  );
};

ProductList.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.string).isRequired,
  addToCart: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export default ProductList;
