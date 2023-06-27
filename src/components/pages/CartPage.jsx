import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, resetForm } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCartItems } from "../../redux/actions";
import PropTypes from "prop-types";
import "../ProductCard/ProductCard.css";
import Modal from "../modal/modal";

const CartPage = ({ cartItems, favorites, removeFromCart }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log(
      "Придбані товари:",
      JSON.parse(localStorage.getItem("cartItems"))
    );
    console.log("Дані форми:", values);
    dispatch(clearCart());
    resetForm();
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Обов'язкове поле"),
    lastName: Yup.string().required("Обов'язкове поле"),
    age: Yup.number().required("Обов'язкове поле"),
    address: Yup.string().required("Обов'язкове поле"),
    phone: Yup.string().required("Обов'язкове поле"),
  });

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

  const isItemFavorite = (item) => {
    return favorites.includes(item.article);
  };

  return (
    <div>
      <div>
        <h1>Кошик</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            age: "",
            address: "",
            phone: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div>
              <label htmlFor="firstName">Ім'я:</label>
              <Field type="text" id="firstName" name="firstName" />
              <ErrorMessage
                name="firstName"
                component="div"
                className="error"
              />
            </div>

            <div>
              <label htmlFor="lastName">Прізвище:</label>
              <Field type="text" id="lastName" name="lastName" />
              <ErrorMessage name="lastName" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="age">Вік:</label>
              <Field type="number" id="age" name="age" />
              <ErrorMessage name="age" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="address">Адреса доставки:</label>
              <Field type="text" id="address" name="address" />
              <ErrorMessage name="address" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="phone">Мобільний телефон:</label>
              <Field type="text" id="phone" name="phone" />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>

            <button type="submit">Checkout</button>
          </Form>
        </Formik>
      </div>
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
