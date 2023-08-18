import React from "react";
import { TouchableOpacity, View } from "react-native";
import R from "../../../res/R";
import MyImage from "../../atoms/image/Image";
import MyText from "../../atoms/text/Text";
import styles from "./informationBoxStyles";

interface Props {
  title: string;
  value: string;
  onPress?: () => void;
  icon?: keyof typeof R.images;
  style?: any;
}

export default function InformationBox({
  title,
  style,
  value,
  onPress,
  icon = "ic_help",
}: Props) {
  return (
    <TouchableOpacity
      testID="infoBoxTestId"
      onPress={onPress}
      style={[styles.boxContainer, style]}
    >
      <MyImage
        name={icon}
        style={styles.icon}
        color={R.colors.primaryVeryDark}
      />
      <View style={styles.verticalSeparator} />
      <View>
        <MyText style={styles.title}>{title}</MyText>
        <MyText style={styles.value}>{value}</MyText>
      </View>
    </TouchableOpacity>
  );
}
