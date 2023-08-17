import { render } from "@testing-library/react-native";
import R from "../../../res/R";
import MyImage, { IMyImageProps } from "./Image";
import React from "react";

describe("MyImage", () => {
  it("should renders correctly with name prop", () => {
    const { getByTestId } = render(<MyImage name="ic_help" />);
    const image = getByTestId("imageTestId");
    expect(image.props.source).toEqual(R.images.ic_help);
  });

  it("should renders correctly with uri prop", () => {
    const testImageUrl =
      "https://fastned-app-images.s3-eu-west-1.amazonaws.com/cars/citroen_berlingo.png";

    const { getByTestId } = render(<MyImage uri={testImageUrl} />);
    const image = getByTestId("imageTestId");
    expect(image.props.source).toEqual({ uri: testImageUrl });
  });

  it("should renders the image with the correct props", () => {
    const defaultProps: IMyImageProps = {
      name: "emptyState",
      color: R.colors.primary,
      size: R.dimensions.iconSize24,
    };

    const { getByTestId } = render(<MyImage {...defaultProps} />);
    const image = getByTestId("imageTestId");

    expect(image.props.source).toEqual(R.images.emptyState);
    expect(image.props.style).toContainEqual({
      width: R.dimensions.iconSize24,
      height: R.dimensions.iconSize24,
    });
    expect(image.props.style).toContainEqual({ tintColor: R.colors.primary });
  });
});
