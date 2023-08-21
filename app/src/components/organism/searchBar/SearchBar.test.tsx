import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import MyInput, { IMyInputProps } from "./SearchBar";

describe("MyInput", () => {
  const defaultProps: IMyInputProps = {
    name: "inputName",
    label: "Input Label",
    onChangeText: jest.fn(),
    onBlur: jest.fn(),
  };

  it("should renders correctly", () => {
    const { getByText, getByPlaceholderText } = render(
      <MyInput {...defaultProps} />
    );

    expect(getByText("Input Label")).toBeTruthy();
    expect(getByPlaceholderText("Input Label")).toBeTruthy();
  });

  it("should calls onChangeText when text changes", () => {
    const { getByPlaceholderText } = render(<MyInput {...defaultProps} />);
    const input = getByPlaceholderText("Input Label");

    fireEvent.changeText(input, "New Value");

    expect(defaultProps.onChangeText).toHaveBeenCalledWith("New Value");
  });

  it("should calls onBlur when input loses focus", () => {
    const { getByPlaceholderText } = render(<MyInput {...defaultProps} />);
    const input = getByPlaceholderText("Input Label");

    fireEvent(input, "blur");

    expect(defaultProps.onBlur).toHaveBeenCalled();
  });
});
