import React from "react";
import { View } from "react-native";
import { VehicleDetail } from "../../../models/VehicleDetail";
import styles from "./vehicleHeaderStyles";
import MyText from "../../atoms/text/Text";
import CategoryComponent from "../../molecules/category/Category";
import MyImage from "../../atoms/image/Image";

interface IVehicleHeaderProps {
  vehicle: VehicleDetail;
}

export default function VehicleHeader({ vehicle }: IVehicleHeaderProps) {
  return (
    <>
      <MyImage
        uri={vehicle.imageUrl}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.topRow}>
        <View>
          <MyText style={styles.brand}>{vehicle.brand}</MyText>
          <MyText style={styles.model} numberOfLines={2}>
            {vehicle.model}
          </MyText>
        </View>
        <View>
          <CategoryComponent
            style={styles.category}
            category={vehicle.category}
          />
          <MyText style={styles.version}>{vehicle.version}</MyText>
        </View>
      </View>
    </>
  );
}
