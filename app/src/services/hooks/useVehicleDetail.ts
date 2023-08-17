import { useQuery } from "@tanstack/react-query";
import { VehicleDetail } from "../../models/VehicleDetail";
import Endpoints from "../base/endpoints";
import RequestUtil from "../base/requestUtil";

const fetchVehicleDetail = (vehicleId: number) => {
  return RequestUtil.get<VehicleDetail, Error>({
    url: Endpoints.vehicle.getVehicleDetail(vehicleId),
  }).run();
};

const UseVehicleDetail = (vehicleId: number) => {
  return useQuery<VehicleDetail, Error>({
    queryKey: ["detail"],
    queryFn: () => fetchVehicleDetail(vehicleId),
  });
};

export default UseVehicleDetail;
