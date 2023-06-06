import React, { useState } from "react";
import PropTypes from "prop-types";
import "../ProductCard/ProductCard.css";
import Modal from "../modal/modal";

const CartPage = ({ cartItems, favorites, removeFromCart }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  const handleRemoveFromCart = () => {
    if (selectedItem) {
      removeFromCart(selectedItem);
      setSelectedItem(null);
      setShowModal(false);
    }
  };

  return (
    <div>
      <h2>Cart Items:</h2>
      <ul>
        {cartItems.map((item, index) => (
          <div className="product-card" key={index}>
            {favorites.includes(item.article) && (
              <span className="favorite-icon active">
                &#9734; товар в списку улюблених
              </span>
            )}
            <img className="product-image" src={item.img_url} alt={item.name} />
            <h3 className="product-name">{item.name}</h3>
            <p className="product-price">${item.price}</p>
            <p className="product-article">Article: {item.article}</p>
            <button onClick={() => openModal(item)}>Remove from Cart</button>
          </div>
        ))}
      </ul>
      {showModal && (
        <Modal
          header="Remove from Cart"
          closeButton={true}
          text="Are you sure you want to remove this item from your cart?"
          actions={
            <>
              <button onClick={handleRemoveFromCart}>Confirm</button>
              <button onClick={closeModal}>Cancel</button>
            </>
          }
          onClose={closeModal}
        />
      )}
    </div>
  );
};

CartPage.propTypes = {
  cartItems: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartPage;
