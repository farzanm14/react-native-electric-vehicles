import React from "react";
import { Pressable, View } from "react-native";
import FastImage from "react-native-fast-image";
import MyText from "../../../components/atoms/text/Text";
import CategoryComponent from "../../../components/molecules/category/Category";
import { Vehicle } from "../../../models/Vehicle";
import styles from "../vehicleListStyles";

interface IVehicleItemProps {
  vehicle: Vehicle;
  onPress: (itemId: number) => void;
}

export default function VehicleItem({ vehicle, onPress }: IVehicleItemProps) {
  return (
    <Pressable onPress={() => onPress(vehicle.id)} style={styles.itemContainer}>
      <View style={styles.modelContainer}>
        <MyText style={styles.brand}>{vehicle.brand}</MyText>
        <MyText style={styles.model} numberOfLines={2}>
          {vehicle.model}
        </MyText>
        <View style={styles.moreInfo}>
          <MyText style={styles.version}>{vehicle.version}</MyText>
        </View>
      </View>
      <View>
        <FastImage
          source={{
            uri: vehicle.imageUrl,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.contain}
          style={styles.image}
        />
        <CategoryComponent
          style={styles.category}
          category={vehicle.category}
        />
      </View>
    </Pressable>
  );
}
