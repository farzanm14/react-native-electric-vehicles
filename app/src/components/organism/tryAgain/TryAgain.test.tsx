import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import TryAgain from "./TryAgain";

describe("TryAgain", () => {
  test("should renders the title correctly", () => {
    const title = "Retry";
    const { getByText } = render(
      <TryAgain title={title} retryMethod={() => {}} />
    );
    const titleElement = getByText(title);
    expect(titleElement).toBeTruthy();
  });

  test("should calls retryMethod when pressed", () => {
    const retryMethod = jest.fn();
    const { getByText } = render(
      <TryAgain title="Retry" retryMethod={retryMethod} />
    );
    const button = getByText("Retry");
    fireEvent.press(button);
    expect(retryMethod).toHaveBeenCalled();
  });
});
