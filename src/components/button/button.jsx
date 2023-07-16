// react-hw-group15/hw-group15/src/components/button/button.jsx

import React from "react";
import "./button.css";

class Button extends React.Component {
  render() {
    const { text, click, style } = this.props;

    return (
      <button className="button" style={style} onClick={click}>
        {text}
      </button>
    );
  }
}

export default Button;
