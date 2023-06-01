import React from "react";
import PropTypes from "prop-types";
import "./modal.css";

const Modal = ({ header, closeButton, text, actions, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {closeButton && (
          <button className="close-button" onClick={onClose}>
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

Modal.propTypes = {
  header: PropTypes.string.isRequired,
  closeButton: PropTypes.bool,
  text: PropTypes.string.isRequired,
  actions: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  closeButton: false,
};

export default Modal;
