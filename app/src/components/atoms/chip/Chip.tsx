import React from "react";
import R from "../../../res/R";
import styles from "./chipStyles";
import { TouchableOpacity, ViewStyle } from "react-native";
import MyText from "../text/Text";
import MyImage from "../image/Image";

interface IChipProp {
  title: string;
  style?: ViewStyle;
  onPress?: () => void;
  closable?: boolean;
  pressable?: boolean;
}
const MyChip = ({
  title,
  onPress,
  style,
  closable = false,
  pressable = false,
}: IChipProp) => (
  <TouchableOpacity
    testID="chipTestId"
    disabled={!pressable}
    style={[styles.container, style]}
    onPress={onPress}
  >
    <MyText style={styles.title}>{title}</MyText>
    {closable && (
      <MyImage
        testID="closeIconTestId"
        name="ic_back"
        style={styles.closeIcon}
        color={R.colors.gray}
      />
    )}
  </TouchableOpacity>
);

export default MyChip;
