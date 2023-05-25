import { React, Component } from "react";
import "./App.css";

import Button from "./components/button/button";
import Modal from "./modal/modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Modal1: false,
      Modal2: false,
    };
  }

  handleButtonClickOpenModal1 = () => {
    this.setState({ Modal1: true });
  };

  handleButtonClickOpenModal2 = () => {
    this.setState({ Modal2: true });
  };

  handleButtonClickCloseModal = () => {
    this.setState({ Modal1: false, Modal2: false });
  };

  render() {
    return (
      <>
        <div className="App">
          <h1>Click on this buttons</h1>
          <Button
            click={this.handleButtonClickOpenModal1}
            text={"open first modal"}
            style={{ backgroundColor: "green" }}
          />
          <Button
            click={this.handleButtonClickOpenModal2}
            text={"open second modal"}
            style={{ backgroundColor: "red" }}
          />
        </div>
        {this.state.Modal1 && (
          <Modal
            header="Are you sure you want to buy?"
            text="Are you sure you want to add this item to your cart?"
            actions={
              <>
                <Button
                  style={{ backgroundColor: "green" }}
                  text="OK"
                  click={this.handleButtonClickCloseModal}
                />
                <Button
                  style={{ backgroundColor: "green" }}
                  text="Close"
                  click={this.handleButtonClickCloseModal}
                />
              </>
            }
            closeButtonX={
              <Button text="X" click={this.handleButtonClickCloseModal} />
            }
            onClose={this.handleButtonClickCloseModal}
          />
        )}
        {this.state.Modal2 && (
          <Modal
            header="Delete item?"
            text="Are you sure you want to remove an item from your shopping cart?"
            actions={
              <>
                <Button
                  style={{ backgroundColor: "red" }}
                  text="OK"
                  click={this.handleButtonClickCloseModal}
                />
                <Button
                  style={{ backgroundColor: "red" }}
                  text="Close"
                  click={this.handleButtonClickCloseModal}
                />
              </>
            }
            closeButtonX={
              <Button text="X" click={this.handleButtonClickCloseModal} />
            }
            onClose={this.handleButtonClickCloseModal}
          />
        )}
      </>
    );
  }
}

export default App;
