import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import MyImage from "../../components/atoms/image/Image";
import styles from "./splashStyles";
import Container from "../../components/atoms/container/Container";
import MyText from "../../components/atoms/text/Text";

export default function SplashScreen() {
  const { navigate } = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigate("VehicleListScreen");
    }, 2000);
  }, [navigate]);

  return (
    <Container style={styles.container}>
      <MyImage
        testID="logoTestId"
        name="img_logo"
        style={styles.image}
        resizeMode="contain"
      />
      <MyText testID="subTitleTestId" style={styles.description}>
        Solar Charging Network
      </MyText>
    </Container>
  );
}
