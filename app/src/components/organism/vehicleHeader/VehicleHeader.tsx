import React from "react";
import { View } from "react-native";
import { VehicleDetail } from "../../../models/VehicleDetail";
import styles from "./vehicleHeaderStyles";
import MyText from "../../atoms/text/Text";
import CategoryComponent from "../../molecules/category/Category";
import MyImage from "../../atoms/image/Image";
import FastImage from "react-native-fast-image";

interface IVehicleHeaderProps {
  vehicle: VehicleDetail;
}

export default function VehicleHeader({ vehicle }: IVehicleHeaderProps) {
  return (
    <>
      <FastImage
        source={{
          uri: vehicle.imageUrl,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.contain}
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
