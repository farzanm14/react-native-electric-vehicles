import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import InformationBox from "./InformationBox";

describe("InformationBox", () => {
  test("should renders correctly", () => {
    const { getByText, getByTestId } = render(
      <InformationBox title="Test Title" value="Test Value" />
    );

    const titleElement = getByText("Test Title");
    const valueElement = getByText("Test Value");
    const iconElement = getByTestId("imageTestId");

    expect(titleElement).toBeTruthy();
    expect(valueElement).toBeTruthy();
    expect(iconElement).toBeTruthy();
  });

  test("should calls onPress when pressed", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <InformationBox
        title="Test Title"
        value="Test Value"
        onPress={onPressMock}
      />
    );

    const boxContainer = getByTestId("infoBoxTestId");
    fireEvent.press(boxContainer);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
