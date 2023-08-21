import React from "react";
import { TouchableOpacity } from "react-native";
import R from "../../../res/R";
import MyImage from "../../atoms/image/Image";
import styles from "./fabStyles";

interface Props {
  onPress?: () => void;
  icon?: keyof typeof R.images;
  style?: any;
}

export default function Fab({ style, onPress, icon = "ic_help" }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.fabButton, style]}>
      <MyImage
        name={icon}
        style={styles.icon}
        color={R.colors.primaryVeryDark}
      />
    </TouchableOpacity>
  );
}
