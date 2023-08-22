import { BehaviorSubject, Subject } from "rxjs";
import { Vehicle } from "../../models/Vehicle";
import { Category } from "../../models/Category";

export default class FilteringService {
  private brandListSubject$ = new BehaviorSubject<string[]>([]);
  public brandList$ = this.brandListSubject$.asObservable();
  private vehicleListSubject$ = new BehaviorSubject<Vehicle[]>([]);
  public readonly vehicleList$ = this.vehicleListSubject$.asObservable();
  private allVehicleList: Vehicle[] = [];

  setData(vehicleList: Vehicle[]) {
    this.allVehicleList = vehicleList;
    this.vehicleListSubject$.next(vehicleList);
    this.brandListSubject$.next(
      Array.from(new Set(vehicleList?.map((item) => item.brand)))
    );
  }

  filter(
    searchTerm: string,
    category: Category | undefined,
    brandList: string[]
  ) {
    let resultVehicleList: Vehicle[] = this.allVehicleList;

    // search by model
    if (searchTerm.length > 0) {
      resultVehicleList = resultVehicleList
        ? resultVehicleList.filter((vehicle) =>
            vehicle.model.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : [];
    }

    // filter by category
    if (category) {
      resultVehicleList = resultVehicleList
        ? resultVehicleList.filter(
            (vehicle) =>
              vehicle.category.toLowerCase() === category.toLowerCase()
          )
        : [];
    }
    this.brandListSubject$.next(
      Array.from(new Set(resultVehicleList?.map((item) => item.brand)))
    );

    // filter by brands
    if (brandList.length > 0) {
      resultVehicleList = resultVehicleList
        ? resultVehicleList.filter((vehicle) =>
            brandList.some(
              (theSelectedBrand) =>
                vehicle.brand.toLowerCase() === theSelectedBrand.toLowerCase()
            )
          )
        : [];
    }
    this.vehicleListSubject$.next(resultVehicleList);
  }
}
