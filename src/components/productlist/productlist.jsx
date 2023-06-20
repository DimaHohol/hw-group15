import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, toggleFavorite } from "../../redux/actions/cartActions";
import ProductCard from "../ProductCard/ProductCard";
import "./productlist.css";

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const favorites = useSelector((state) => state.favorites);
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleToggleFavorite = (product) => {
    dispatch(toggleFavorite(product));
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          name={product.name}
          price={product.price}
          image={product.img_url}
          article={product.article}
          onToggleFavorite={() => handleToggleFavorite(product)}
          isFavorite={favorites.includes(product.article)}
          addToCart={() => handleAddToCart(product)}
        />
      ))}
    </div>
  );
};

export default ProductList;
