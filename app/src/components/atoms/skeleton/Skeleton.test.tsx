import React from "react";
import { render } from "@testing-library/react-native";
import Skeleton from "./Skeleton";

describe("Skeleton", () => {
  const style = { width: 100, height: 100 };

  it("should renders the skeleton with the correct style", () => {
    const { getByTestId } = render(<Skeleton style={style} />);
    const skeleton = getByTestId("skeletonTestId");
    expect(skeleton).toBeTruthy();
    expect(skeleton.props.style).toContain(style);
  });
});
