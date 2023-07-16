// react-hw-group15/hw-group15/src/components/modal/modal.jsx

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setModalState } from "../../redux/actions";
import "./modal.css";

const Modal = ({
  header,
  closeButton,
  text,
  actions,
  onClose,
  isModalOpen,
}) => {
  const handleClose = () => {
    onClose();

    setModalState(false);
  };

  return (
    <div className={`modal ${isModalOpen ? "open" : ""}`}>
      <div className="modal-content">
        {closeButton && (
          <button className="close-button" onClick={handleClose}>
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
  isModalOpen: PropTypes.bool.isRequired,
};

Modal.defaultProps = {
  closeButton: false,
};

const mapStateToProps = (state) => {
  return {
    isModalOpen: state.isModalOpen,
  };
};

export default connect(mapStateToProps, { setModalState })(Modal);
