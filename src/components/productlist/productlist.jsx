import React, { useContext } from "react";
import { ViewModeContext } from "../../context/ViewContext";
import ProductCard from "../ProductCard/ProductCard";
import "../ProductCard/ProductCard.css";

const ProductList = ({ products, favorites, addToCart }) => {
  const { viewMode, toggleViewMode } = useContext(ViewModeContext);

  const productCards = products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      favorites={favorites}
      addToCart={addToCart}
      viewMode={viewMode}
    />
  ));

  return (
    <div>
      <button onClick={toggleViewMode}>
        {viewMode === "card" ? "Switch to table view" : "Switch to card view"}
      </button>
      <div className={`product-list ${viewMode}`}>{productCards}</div>
    </div>
  );
};

export default ProductList;
