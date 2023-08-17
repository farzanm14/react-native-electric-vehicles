export const BaseUrl = "http://localhost:8485/api/";
export const Timeout = 60000;

const Endpoints = {
  vehicle: {
    getVehicles: "vehicles/",
    searchVehicles: (query: string) => `vehicles/${query}`,
    getVehicleDetail: (id: number) => `vehicles/${id}`,
  },
};

export default Endpoints;
