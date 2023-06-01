import React from "react";
import "./modal.css";

class Modal extends React.Component {
  render() {
    const { header, closeButton, text, actions } = this.props;

    return (
      <div className="modal">
        <div className="modal-content">
          {closeButton && (
            <button className="close-button" onClick={this.props.onClose}>
              X
            </button>
          )}
          <h2 className="modal-header">{header}</h2>
          <div className="modal-text">{text}</div>
          <div className="modal-actions">{actions}</div>
        </div>
      </div>
    );
  }
}

export default Modal;
