import React from "react";
import { ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./containerStyles";

interface IContainerProps {
  style?: ViewStyle;
  children: any;
}

export default function Container({ style, children }: IContainerProps) {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
}
