import LottieView from "lottie-react-native";
import React from "react";
import { View } from "react-native";
import R from "../../../res/R";
import MyText from "../../atoms/text/Text";
import styles from "./notFoundStyles";

interface Props {
  style?: any;
  children?: any;
}

export default function NotFound({ children, style }: Props) {
  return (
    <View style={[styles.container, style]}>
      <LottieView
        testID="lottieTestId"
        loop
        autoPlay
        source={R.images.emptyState}
        style={styles.icon}
      />
      <MyText style={styles.text}>No Result Found</MyText>
      {children}
    </View>
  );
}
