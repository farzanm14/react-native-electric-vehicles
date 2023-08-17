import React from "react";
import { Text, View } from "react-native";
import R from "../../../res/R";
import MyImage from "../../atoms/image/Image";
import styles from "./detailBoxStyles";

interface Props {
  title: string;
  value: string;
  icon?: keyof typeof R.images;
  style?: any;
}

export default function DetailBox({ title, style, value, icon }: Props) {
  return (
    <View style={[styles.boxContainer, style]}>
      <MyImage name={icon} style={styles.icon} />
      <View style={styles.horizontalSeparator} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}
