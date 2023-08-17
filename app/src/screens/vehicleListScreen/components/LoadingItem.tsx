import React from "react";
import { View } from "react-native";
import Skeleton from "../../../components/atoms/skeleton/Skeleton";
import styles from "../vehicleListStyles";

export default function LoadingItem() {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.modelContainer}>
        <Skeleton style={styles.loadingTitle} />
        <Skeleton style={styles.loadingTitle} />

        <View style={styles.moreInfo}>
          <Skeleton style={styles.loadingTitle} />
        </View>
      </View>
      <View>
        <Skeleton style={styles.loadingImage} />
        <Skeleton style={styles.loadingTag} />
      </View>
    </View>
  );
}
