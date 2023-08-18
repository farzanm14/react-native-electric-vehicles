import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import Container from "../../components/atoms/container/Container";
import MyImageButton from "../../components/molecules/imageButton/ImageButton";
import MyAlert from "../../components/organism/alert/Alert";
import VehicleHeader from "../../components/organism/vehicleHeader/VehicleHeader";
import UseVehicleDetail from "../../services/hooks/useVehicleDetail";
import ChargingBar from "./components/ChargingBar";
import ChargingSkeletonLoading from "./components/ChargingSkeletonLoading";
import styles from "./styles/chargingStyles";

interface VehicleDetailScreenProps {
  route: any;
}

const ChargingScreen = ({ route }: VehicleDetailScreenProps) => {
  const { vehicleId } = route?.params;
  const { isLoading, data, error, refetch } = UseVehicleDetail(vehicleId);
  const { goBack, canGoBack } = useNavigation();
  const [showError, setShowError] = useState(false);

  function handleBackPressed() {
    if (canGoBack()) goBack();
  }

  return (
    <Container>
      <ScrollView style={styles.container}>
        <MyImageButton
          onPress={handleBackPressed}
          name="ic_back"
          resizeMode="contain"
          style={styles.backButton}
        />
        {isLoading ? (
          <ChargingSkeletonLoading />
        ) : error ? (
          <>
            <ChargingSkeletonLoading />
            <MyAlert
              actionButtonText="Try Again"
              actionButtonPress={refetch}
              message={`An Error Happened While Receiving Data \n\n ${error.message}`}
              visible={showError}
              handleClose={setShowError}
              title={error.name}
            />
          </>
        ) : data ? (
          <>
            <VehicleHeader vehicle={data} />
            <ChargingBar vehicle={data} />
          </>
        ) : (
          <View />
        )}
      </ScrollView>
    </Container>
  );
};

export default ChargingScreen;
