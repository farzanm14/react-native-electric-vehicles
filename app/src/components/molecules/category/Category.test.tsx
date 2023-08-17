import React from "react";
import { render } from "@testing-library/react-native";
import CategoryComponent from "./Category";
import R from "../../../res/R";

describe("CategoryComponent", () => {
  it("should renders the correct chip title based on the category prop", () => {
    const category = "VAN";
    const { getByText } = render(<CategoryComponent category={category} />);
    const chipTitle = getByText("van");
    expect(chipTitle).toBeTruthy();
  });

  it("should renders the chip with the provided style prop", () => {
    const category = "CAR";
    const style = { backgroundColor: R.colors.primary };

    const { getByTestId } = render(
      <CategoryComponent category={category} style={style} />
    );
    const chip = getByTestId("chipTestId");
    expect(chip).toBeDefined();
  });
});
