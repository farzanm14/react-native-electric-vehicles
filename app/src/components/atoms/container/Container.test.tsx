import React from "react";
import { render } from "@testing-library/react-native";
import Container from "./Container";
import MyText from "../text/Text";

describe("Container", () => {
  it("should renders children inside SafeAreaView", () => {
    const { getByTestId } = render(
      <Container>
        <MyText testID="child">Hello World</MyText>
      </Container>
    );

    const childElement = getByTestId("child");
    expect(childElement).toBeTruthy();
  });

  it("applies the provided style prop", () => {
    const customStyle = { backgroundColor: "red" };
    const { getByTestId } = render(
      <Container style={customStyle}>
        <MyText testID="child">Hello World</MyText>
      </Container>
    );

    const containerElement = getByTestId("container");
    expect(containerElement.props.style).toContain(customStyle);
  });
});
