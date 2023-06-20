import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";
import "./productlist.css";

const ProductList = ({ favorites, addToCart, onToggleFavorite }) => {
  const products = useSelector((state) => state.products);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          product={product}
          key={Math.random()}
          name={product.name}
          price={product.price}
          image={product.img_url}
          article={product.article}
          onToggleFavorite={() => onToggleFavorite(product)}
          isFavorite={favorites.includes(product.article)}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      img_url: PropTypes.string.isRequired,
      article: PropTypes.string.isRequired,
    })
  ).isRequired,

  addToCart: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export default ProductList;
