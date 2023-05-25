import React from "react";
import "./modal.css";

class Modal extends React.Component {
  render() {
    const { header, text, actions, onClose, closeButtonX } = this.props;
    return (
      <div>
        <div className="overlay">
          <div className="modal">
            <div className="modal-body">
              <div className="modal-body-header">
                <h3>{header}</h3>
                {closeButtonX}
              </div>
              <div className="modal-body-content">
                <p>{text}</p>
              </div>

              <div className="modal-body-footer">{actions}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
