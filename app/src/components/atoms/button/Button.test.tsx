import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import MyButton from "./Button";

describe("MyButton component", () => {
  it("should renders the provided title correctly with default props", () => {
    const { getByTestId } = render(<MyButton title="Custom Title" />);
    const button = getByTestId("buttonTouchable");

    expect(button).toBeDefined();
  });

  it("should applies the disabled styles when disabled prop is true", () => {
    const { getByTestId } = render(
      <MyButton title="Disabled Button" disabled />
    );
    const button = getByTestId("buttonTouchable");

    expect(button).toBeDefined();
    expect(button.props.accessibilityState.disabled).toBe(true);
  });

  it("should calls the onPress function when pressed", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <MyButton title="Press Me" onPress={onPressMock} />
    );
    const buttonElement = getByTestId("buttonTouchable");

    fireEvent.press(buttonElement);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it("should renders the loading indicator when loading prop is true", () => {
    const { getByTestId } = render(<MyButton title="Wait" loading />);
    const loadingIndicator = getByTestId("buttonLoading");

    expect(loadingIndicator).toBeDefined();
  });
});
