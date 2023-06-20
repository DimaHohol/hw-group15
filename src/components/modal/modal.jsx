import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/actions/modalActions";

const Modal = ({ header, closeButton, text, actions }) => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div className="modal">
      <div className="modal-content">
        {closeButton && (
          <button className="close-button" onClick={handleCloseModal}>
            X
          </button>
        )}
        <h2 className="modal-header">{header}</h2>
        <div className="modal-text">{text}</div>
        <div className="modal-actions">{actions}</div>
      </div>
    </div>
  );
};

export default Modal;
