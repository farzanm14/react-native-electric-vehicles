import React from "react";
import { render } from "@testing-library/react-native";
import NotFound from "./NotFound";
import MyText from "../../atoms/text/Text";

describe("NotFound", () => {
  it("should renders the component correctly", () => {
    const { getByText, getByTestId } = render(<NotFound />);

    const textElement = getByText("No Result Found");
    expect(textElement).toBeTruthy();

    const lottieViewElement = getByTestId("lottieTestId");
    expect(lottieViewElement).toBeTruthy();
  });

  it("should renders the children correctly", () => {
    const { getByText } = render(
      <NotFound>
        <MyText>try again</MyText>
      </NotFound>
    );

    const textElement = getByText("try again");
    expect(textElement).toBeTruthy();
  });
});
