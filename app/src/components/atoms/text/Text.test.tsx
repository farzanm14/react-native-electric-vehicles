import React from "react";
import { render } from "@testing-library/react-native";
import MyText from "./Text";
import styles from "./textStyles";

describe("MyText component", () => {
  it("renders correctly with default props", () => {
    const { getByText } = render(<MyText>Hello World</MyText>);
    const textElement = getByText("Hello World");

    expect(textElement).toBeDefined();
    expect(textElement.props.style).toEqual([styles.baseStyle]);
    expect(textElement.props.allowFontScaling).toBe(false);
  });

  it("applies bold style when 'bold' prop is true", () => {
    const { getByText } = render(<MyText bold>Hello World</MyText>);
    const textElement = getByText("Hello World");

    expect(textElement).toBeDefined();
    expect(textElement.props.style).toEqual([styles.baseStyle, styles.bold]);
    expect(textElement.props.allowFontScaling).toBe(false);
  });

  it("applies light style when 'light' prop is true", () => {
    const { getByText } = render(<MyText light>Hello World</MyText>);
    const textElement = getByText("Hello World");

    expect(textElement).toBeDefined();
    expect(textElement.props.style).toEqual([
      styles.baseStyle,
      undefined,
      styles.light,
    ]);
    expect(textElement.props.allowFontScaling).toBe(false);
  });

  it("applies custom style when 'style' prop is provided", () => {
    const customStyle = { color: "red" };
    const { getByText } = render(
      <MyText style={customStyle}>Hello World</MyText>
    );
    const textElement = getByText("Hello World");

    expect(textElement).toBeDefined();
    expect(textElement.props.style).toEqual([
      styles.baseStyle,
      undefined,
      undefined,
      customStyle,
    ]);
    expect(textElement.props.allowFontScaling).toBe(false);
  });
});
