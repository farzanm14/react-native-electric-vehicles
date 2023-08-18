import { Platform } from "react-native";

export const BaseUrl =
  Platform.OS === "android"
    ? "http://192.168.1.100:8485/api/"
    : "http://localhost:8485/api/";

export const Timeout = 60000;

const Endpoints = {
  vehicle: {
    getVehicles: "vehicles/",
    searchVehicles: (query: string) => `vehicles/${query}`,
    getVehicleDetail: (id: number) => `vehicles/${id}`,
  },
};

export default Endpoints;
