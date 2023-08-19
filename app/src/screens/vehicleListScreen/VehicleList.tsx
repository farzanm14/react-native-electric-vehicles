import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import Container from "../../components/atoms/container/Container";
import MyText from "../../components/atoms/text/Text";
import NotFound from "../../components/molecules/notFound/NotFound";
import MyAlert from "../../components/organism/alert/Alert";
import TryAgain from "../../components/organism/tryAgain/TryAgain";
import { useRefreshByUser } from "../../services/hooks/useRefreshByUser";
import UseVehiclesList from "../../services/hooks/useVehiclesList";
import SkeletonLoading from "./components/ListSkeletonLoading";
import VehicleItem from "./components/VehicleItem";

const VehicleListScreen = () => {
  const { isLoading, error, data, refetch } = UseVehiclesList();
  const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch);
  const { navigate } = useNavigation();
  const [showError, setShowError] = useState(false);

  function navigateToDetailScreen(vehicleId: number) {
    navigate("VehicleDetailScreen", { vehicleId });
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
    return (
      <Container>
        <FlatList
          testID="vehiclesListTestId"
          ListHeaderComponent={<MyText>Vehicles</MyText>}
          ListEmptyComponent={<NotFound />}
          data={data}
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
      </Container>
    );
  }
};

export default VehicleListScreen;
