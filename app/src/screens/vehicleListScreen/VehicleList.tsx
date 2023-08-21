import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, FlatList, RefreshControl } from "react-native";
import Container from "../../components/atoms/container/Container";
import MyText from "../../components/atoms/text/Text";
import NotFound from "../../components/molecules/notFound/NotFound";
import MyAlert from "../../components/organism/alert/Alert";
import TryAgain from "../../components/organism/tryAgain/TryAgain";
import { useRefreshByUser } from "../../services/hooks/useRefreshByUser";
import UseVehiclesList from "../../services/hooks/useVehiclesList";
import SkeletonLoading from "./components/ListSkeletonLoading";
import VehicleItem from "./components/VehicleItem";
import SearchBar from "../../components/organism/searchBar/SearchBar";
import {
  useSearchVehiclesList,
  useFilteredVehiclesListByBrand,
  useFilteredVehiclesListByCategory,
} from "../../services/hooks/useSearchVehicle";
import { Category } from "../../models/Category";
import styles from "./vehicleListStyles";
import Fab from "../../components/molecules/fabButton/Fab";
import FilterBottomSheet from "./components/filterBottomSheet/FilterBottomSheet";

const VehicleListScreen = () => {
  const { isLoading, error, data, refetch } = UseVehiclesList();
  const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch);
  const { navigate } = useNavigation();
  const [showError, setShowError] = useState(false);
  const [showFilterBottomSheet, setShowFilterBottomSheet] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<
    Category | undefined
  >();
  const [focused, setFocused] = useState(false);
  const { data: filteredData } = useSearchVehiclesList(searchPhrase);
  const { data: filteredDataByBrand } =
    useFilteredVehiclesListByBrand(selectedBrands);
  const { data: filteredDataByCategory } =
    useFilteredVehiclesListByCategory(selectedCategory);
  function navigateToDetailScreen(vehicleId: number) {
    navigate("VehicleDetailScreen", { vehicleId });
  }
  function toggleFilterBottomSheet() {
    setShowFilterBottomSheet(!showFilterBottomSheet);
  }

  if (isLoading) {
    return <SkeletonLoading />;
  }
  if (error) {
    return (
      <>
        <TryAgain title="please try again" retryMethod={refetch} />
        <MyAlert
          actionButtonText="Try Again"
          actionButtonPress={refetch}
          message="An Error Happened While Receiving Data"
          visible={showError}
          handleClose={setShowError}
          title="Oopps!"
        />
      </>
    );
  } else if (data) {
    let results = data;
    const uniqueBrands = Array.from(new Set(data?.map((item) => item.brand)));

    if (searchPhrase.length >= 2 && filteredData) {
      results = filteredData;
    } else if (selectedCategory && filteredDataByCategory) {
      results = filteredDataByCategory;
    } else if (selectedBrands.length >= 1 && filteredDataByBrand) {
      results = filteredDataByBrand;
    }

    function handleFilterByCategory(category: Category) {
      setSelectedBrands([]);
      setSelectedCategory(category);
      setSearchPhrase("");
    }

    function handleFilterByBrands(brands: string[]) {
      setSelectedBrands(brands);
      setSelectedCategory(undefined);
      setSearchPhrase("");
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
          data={results}
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
          brands={uniqueBrands}
          visible={showFilterBottomSheet}
          selectedCategory={selectedCategory}
          handleClose={toggleFilterBottomSheet}
          updateSelectedBrands={handleFilterByBrands}
          updateSelectedCategory={handleFilterByCategory}
        />
        <Fab onPress={toggleFilterBottomSheet} icon="ic_filter" />
      </Container>
    );
  }
};

export default VehicleListScreen;
