import React from "react";
import { render } from "@testing-library/react-native";
import { Typo } from "../typo";

describe("Typo Component", () => {
  it("should render with default styles", () => {
    const { getByText } = render(<Typo>Test Text</Typo>);
    const typo = getByText("Test Text");

    expect(typo.props.style).toEqual({
      fontSize: "16rem",
      fontWeight: "400",
      color: "#000",
    });
  });

  it("should apply custom size, weight, and color", () => {
    const { getByText } = render(
      <Typo size="lg" weight="bold" color="#ff0000">
        Custom Text
      </Typo>
    );
    const typo = getByText("Custom Text");

    expect(typo.props.style).toEqual({
      fontSize: "18rem",
      fontWeight: "700",
      color: "#ff0000",
    });
  });
});
