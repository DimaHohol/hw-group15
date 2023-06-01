import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./productlist.css";

class ProductList extends React.Component {
  render() {
    const { products, favorites, addToCart, onToggleFavorite } = this.props;

    return (
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={Math.random()}
            name={product.name}
            price={product.price}
            image={product.img_url}
            article={product.article}
            onToggleFavorite={() => onToggleFavorite(product.article)}
            isFavorite={favorites.includes(product.article)}
            addToCart={addToCart}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
