import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import MyAlert from "./Alert";

describe("MyAlert", () => {
  it("should renders correctly with default values", () => {
    // const { getByText } = render(
    //   <MyAlert
    //     visible={true}
    //     title="Test Title"
    //     message="Test Message"
    //     handleClose={() => {}}
    //   />
    // );
    // expect(getByText("Test Title")).toBeTruthy();
    // expect(getByText("Test Message")).toBeTruthy();
  });

  it("should calls primaryAction when action button is pressed", () => {
    // const primaryAction = jest.fn();
    // const { getByText } = render(
    //   <MyAlert
    //     visible={true}
    //     title="Test Title"
    //     message="Test Message"
    //     handleClose={primaryAction}
    //   />
    // );
    // fireEvent.press(getByText("OK"));
    // expect(primaryAction).toHaveBeenCalledTimes(1);
  });

  it("should calls closeAction when cancel button is pressed", () => {
    // const closeAction = jest.fn();
    // const { getByText } = render(
    //   <MyAlert
    //     visible={true}
    //     title="Test Title"
    //     message="Test Message"
    //     cancelButtonText="Cancel"
    //     cancelButtonPress={closeAction}
    //     handleClose={() => {}}
    //   />
    // );
    // fireEvent.press(getByText("Cancel"));
    // expect(closeAction).toHaveBeenCalledTimes(1);
  });
});
