import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import Container from "../../../components/atoms/container/Container";
import Fab from "../../../components/molecules/fabButton/Fab";
import NotFound from "../../../components/molecules/notFound/NotFound";
import SearchBar from "../../../components/organism/searchBar/SearchBar";
import { Category } from "../../../models/Category";
import { Vehicle } from "../../../models/Vehicle";
import FilteringService from "../../../services/filtering/FilteringService";
import styles from "../vehicleListStyles";
import VehicleItem from "./VehicleItem";
import FilterBottomSheet from "./filterBottomSheet/FilterBottomSheet";
import { useRefreshByUser } from "../../../services/hooks/useRefreshByUser";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

interface ListProps {
  data: Vehicle[];
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<Vehicle[], Error>>;
}

const FilteredList = ({ data, refetch }: ListProps) => {
  const vehicleService = new FilteringService();
  const { navigate } = useNavigation();
  const [showFilterBottomSheet, setShowFilterBottomSheet] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [resultList, setResultList] = useState<Vehicle[]>([]);
  const [resultBrands, setResultBrands] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<
    Category | undefined
  >();
  const [focused, setFocused] = useState(false);
  const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch);

  useEffect(() => {
    vehicleService.setData(data);
    vehicleService.vehicleList$.subscribe((vehicleList) => {
      setResultList(vehicleList);
    });
    vehicleService.brandList$.subscribe((brandList) => {
      setResultBrands(brandList);
    });

    vehicleService.filter(searchPhrase, selectedCategory, selectedBrands);
  }, [searchPhrase, selectedBrands, selectedCategory]);

  function navigateToDetailScreen(vehicleId: number) {
    navigate("VehicleDetailScreen", { vehicleId });
  }

  function toggleFilterBottomSheet() {
    setShowFilterBottomSheet((value) => !value);
  }

  return (
    <Container>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        focused={focused}
        setFocused={setFocused}
      />

      <FlatList
        testID="vehiclesListTestId"
        ListEmptyComponent={
          <View style={styles.listEmpty}>
            <NotFound />
          </View>
        }
        data={resultList}
        keyExtractor={(item) => item.id + item.brand}
        renderItem={(item) => (
          <VehicleItem onPress={navigateToDetailScreen} vehicle={item.item} />
        )}
        refreshControl={
          <RefreshControl
            refreshing={isRefetchingByUser}
            onRefresh={refetchByUser}
          />
        }
      />
      <FilterBottomSheet
        brands={resultBrands}
        visible={showFilterBottomSheet}
        selectedCategory={selectedCategory}
        handleClose={toggleFilterBottomSheet}
        updateSelectedBrands={setSelectedBrands}
        updateSelectedCategory={setSelectedCategory}
        categories={["VAN", "CAR", "MOTORCYCLE"]}
      />
      <Fab onPress={toggleFilterBottomSheet} icon="ic_filter" />
    </Container>
  );
};

export default FilteredList;
