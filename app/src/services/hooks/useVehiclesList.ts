import { useQuery } from "@tanstack/react-query";
import { Vehicle } from "../../models/Vehicle";
import Endpoints from "../base/endpoints";
import RequestUtil from "../base/requestUtil";

const fetchVehiclesList = () => {
  return RequestUtil.get<Vehicle[]>({
    url: Endpoints.vehicle.getVehicles,
  }).run();
};

const UseVehiclesList = () => {
  return useQuery<Vehicle[], Error>({
    queryKey: ["vehicles"],
    queryFn: fetchVehiclesList,
  });
};

export default UseVehiclesList;
