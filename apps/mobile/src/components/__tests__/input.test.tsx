import React from "react";
import { render } from "@testing-library/react-native";
import { Input } from "../input";

describe("Input Component", () => {
  it("should render correctly with default styles", () => {
    const { getByTestId } = render(<Input testID="input-component" />);
    const input = getByTestId("input-component");

    expect(input.props.style).toEqual(
      expect.objectContaining({
        width: "100%",
        height: 60,
      })
    );
  });
});
