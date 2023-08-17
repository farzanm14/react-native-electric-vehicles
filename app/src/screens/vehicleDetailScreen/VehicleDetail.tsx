import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { ScrollView, View } from "react-native";
import MyButton from "../../components/atoms/button/Button";
import Container from "../../components/atoms/container/Container";
import DetailBox from "../../components/molecules/detailBox/DetailBox";
import MyImageButton from "../../components/molecules/imageButton/ImageButton";
import InformationBox from "../../components/molecules/informationBox/InformationBox";
import MyAlert from "../../components/organism/alert/Alert";
import VehicleHeader from "../../components/organism/vehicleHeader/VehicleHeader";
import { VehicleDetail } from "../../models/VehicleDetail";
import UseVehicleDetail from "../../services/hooks/useVehicleDetail";
import { openUrlInBrowser } from "../../utils/linking/linking";
import VehicleDetailLoading from "./VehicleDetailSkeletonLoading";
import styles from "./vehicleDetailStyles";

interface VehicleDetailScreenProps {
  route: any;
}
const VehicleDetailScreen = ({ route }: VehicleDetailScreenProps) => {
  const { vehicleId } = route?.params;
  const { isLoading, error, data, refetch } = UseVehicleDetail(vehicleId);
  const { navigate, goBack, canGoBack } = useNavigation();
  const [showError, setShowError] = useState(true);

  const handleOpenMoreInformation = useCallback(async () => {
    if (data) openUrlInBrowser(data.helpUrl);
  }, [data]);

  function handleStartCharging() {
    navigate("ChargingScreen", { vehicleId });
  }
  function handleBackPressed() {
    if (canGoBack()) goBack();
  }

  function renderContent(vehicle: VehicleDetail) {
    return (
      <>
        <VehicleHeader vehicle={vehicle} />
        <View style={styles.infoContainer}>
          <DetailBox
            title="Connector Type"
            value={vehicle?.connectorType}
            icon="img_connector"
          />
          <DetailBox
            title="Recommended Charger"
            value={vehicle?.recommendedCharger}
            icon="img_charger"
          />
        </View>
        <InformationBox
          title="You have question?"
          value="Please press to get more information."
          onPress={handleOpenMoreInformation}
        />
        <MyButton
          onPress={handleStartCharging}
          style={styles.submitButton}
          titleStyle={styles.buttonTitle}
          title="Start Charging"
        />
      </>
    );
  }

  return (
    <Container>
      <ScrollView style={styles.mainContainer}>
        <MyImageButton
          onPress={() => handleBackPressed()}
          name="ic_back"
          resizeMode="contain"
          style={styles.backButton}
        />

        {isLoading ? (
          <VehicleDetailLoading />
        ) : error ? (
          <>
            <VehicleDetailLoading />
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
          renderContent(data)
        ) : (
          <View />
        )}
      </ScrollView>
    </Container>
  );
};

export default VehicleDetailScreen;
