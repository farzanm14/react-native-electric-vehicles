import { render } from "@testing-library/react-native";
import React from "react";
import { vehicle } from "../../../../__mocks__/mockData";
import VehicleHeader from "./VehicleHeader";

describe("VehicleHeader", () => {
  it("should renders the vehicle header correctly", () => {
    const { getByTestId, getByText } = render(
      <VehicleHeader vehicle={vehicle} />
    );

    const image = getByTestId("imageTestId");
    expect(image.props.source.uri).toBe(vehicle.imageUrl);

    const brand = getByText(vehicle.brand);
    expect(brand).toBeTruthy();

    const model = getByText(vehicle.model);
    expect(model).toBeTruthy();

    const chip = getByTestId("chipTestId");
    expect(chip.props.children).toHaveProperty("Van");

    const version = getByText(vehicle.version);
    expect(version).toBeTruthy();
  });
});
