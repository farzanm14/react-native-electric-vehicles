import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import MyImageButton from "./ImageButton";

describe("MyImageButton", () => {
  it("should renders correctly and calls onPress when pressed", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(<MyImageButton onPress={onPressMock} />);
    const imageButton = getByTestId("imageButtonTestId");
    expect(imageButton).toBeTruthy();
    fireEvent.press(imageButton);
    expect(onPressMock).toHaveBeenCalled();
  });
});
