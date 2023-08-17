import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import MyChip from "./Chip";

describe("MyChip", () => {
  it("Should renders the chip with the correct title", () => {
    const { getByText } = render(<MyChip title="Test Chip" />);
    const chipTitle = getByText("Test Chip");
    expect(chipTitle).toBeDefined();
  });

  it("Should renders the remove icon if it's closable", () => {
    const { getByText, getByTestId } = render(
      <MyChip closable title="Test Chip" />
    );
    const chipTitle = getByText("Test Chip");

    const closeButton = getByTestId("closeIconTestId");
    expect(chipTitle).toBeDefined();
    expect(closeButton).toBeTruthy();
  });

  it("should calls the onPress function when pressed", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <MyChip title="Test Chip" onPress={onPressMock} pressable={true} />
    );
    const chip = getByTestId("chipTestId");
    fireEvent.press(chip);
    expect(onPressMock).toHaveBeenCalled();
  });
});
