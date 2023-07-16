import React from "react";
import { render } from "@testing-library/react";
import Button from "../components/button/button";
import renderer from "react-test-renderer";
import modal from "../components/modal/modal";

test("renders component correctly", () => {
  render(<Button />);
});
