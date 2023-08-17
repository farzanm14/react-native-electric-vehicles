import { VehicleDetail } from "../src/models/VehicleDetail";

export const vehicle: VehicleDetail = {
  id: 82,
  brand: "Citroën",
  model: "Berlingo Electric",
  version: "22,5 kWh",
  category: "VAN",
  connectorType: "CHAdeMO",
  recommendedCharger: "50",
  chargeSpeedInKw: 50,
  helpUrl:
    "https://support.fastned.nl/hc/nl/articles/215884498-Laden-met-een-Citro%C3%ABn-Berlingo-Electric",
  imageUrl:
    "https://fastned-app-images.s3-eu-west-1.amazonaws.com/cars/citroen_berlingo.png",
  autochargeCapable: false,
  externalParameters: {
    typecode: "citroen:berlingo:15:20",
    ref_consumption: 206,
    usable_battery_wh: 20500,
    fast_chargers: "Chademo",
  },
};
