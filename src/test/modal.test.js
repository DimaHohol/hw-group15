import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Modal from "../components/modal/modal";

describe("Modal component", () => {
  const mockStore = configureStore([]);
  let store;
  const initialState = {
    isModalOpen: false,
  };

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test("renders modal with correct header and text", () => {
    const headerText = "Modal Header";
    const modalText = "Modal Content";
    const { getByText } = render(
      <Provider store={store}>
        <Modal
          header={headerText}
          closeButton={true}
          text={modalText}
          actions={<div>Modal Actions</div>}
          onClose={jest.fn()}
        />
      </Provider>
    );
    const header = getByText(headerText);
    const text = getByText(modalText);
    expect(header).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  test("calls onClose and setModalState when close button is clicked", () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <Provider store={store}>
        <Modal
          header="Modal Header"
          closeButton={true}
          text="Modal Content"
          actions={<div>Modal Actions</div>}
          onClose={onClose}
        />
      </Provider>
    );
    const closeButton = getByText("X");
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });
});
