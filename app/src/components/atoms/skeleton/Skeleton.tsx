import LottieView from "lottie-react-native";
import React from "react";
import { ViewStyle } from "react-native";
import R from "../../../res/R";
import styles from "./skeletonStyles";

interface ISkeletonProps {
  style: ViewStyle;
}

export default function Skeleton({ style }: ISkeletonProps) {
  return (
    <LottieView
      testID="skeletonTestId"
      resizeMode="cover"
      loop
      autoPlay
      style={[styles.container, style]}
      source={R.images.skeleton}
    />
  );
}
