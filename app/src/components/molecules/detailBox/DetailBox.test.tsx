import React from "react";
import { render } from "@testing-library/react-native";
import DetailBox from "./DetailBox";
import R from "../../../res/R";

describe("DetailBox", () => {
  it("should renders the title and value correctly", () => {
    const title = "Test Title";
    const value = "Test Value";

    const { getByText } = render(<DetailBox title={title} value={value} />);

    const titleElement = getByText(title);
    const valueElement = getByText(value);

    expect(titleElement).toBeDefined();
    expect(valueElement).toBeDefined();
  });

  it("should renders the icon correctly", () => {
    const title = "Test Title";
    const value = "Test Value";
    const icon = "ic_help";

    const { getByTestId } = render(
      <DetailBox title={title} value={value} icon={icon} />
    );

    const iconElement = getByTestId("imageTestId");

    expect(iconElement).toBeDefined();
  });
});
