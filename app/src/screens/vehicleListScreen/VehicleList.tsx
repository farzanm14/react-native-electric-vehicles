import React, { useState } from "react";
import MyAlert from "../../components/organism/alert/Alert";
import TryAgain from "../../components/organism/tryAgain/TryAgain";
import UseVehiclesList from "../../services/hooks/useVehiclesList";
import FilteredList from "./components/FilteredList";
import SkeletonLoading from "./components/ListSkeletonLoading";

const VehicleListScreen = () => {
  const { isLoading, error, data, refetch } = UseVehiclesList();
  const [showError, setShowError] = useState(false);

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
    return <FilteredList refetch={refetch} data={data} />;
  }
};

export default VehicleListScreen;
