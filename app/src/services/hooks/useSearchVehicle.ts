import { Category } from "../../models/Category";
import UseVehiclesList from "./useVehiclesList";

export const useSearchVehiclesList = (searchPhrase: string) => {
  const { isLoading, error, data } = UseVehiclesList();

  const searchResult = data
    ? data.filter((vehicle) =>
        vehicle.model.toLowerCase().includes(searchPhrase.toLowerCase())
      )
    : [];

  return { isLoading, error, data: searchResult };
};

export const useFilteredVehiclesListByBrand = (selectedBrands: string[]) => {
  const { isLoading, error, data } = UseVehiclesList();

  const filteredDataByBrand = data
    ? data.filter((vehicle) =>
        selectedBrands.forEach((theSelectedBrand) => {
          vehicle.brand.toLowerCase() === theSelectedBrand.toLowerCase();
        })
      )
    : [];

  return { isLoading, error, data: filteredDataByBrand };
};

export const useFilteredVehiclesListByCategory = (
  selectedCategory?: Category
) => {
  const { isLoading, error, data } = UseVehiclesList();

  let filteredDataByCategory;
  if (selectedCategory) {
    filteredDataByCategory = data
      ? data.filter(
          (vehicle) =>
            vehicle.category.toLowerCase() === selectedCategory.toLowerCase()
        )
      : [];
    console.log("filteredDataByCategory", filteredDataByCategory);
  }
  return { isLoading, error, data: filteredDataByCategory };
};
