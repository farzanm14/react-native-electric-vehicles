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
  isSelected?: boolean;
}
const MyChip = ({
  title,
  onPress,
  style,
  closable = false,
  pressable = false,
  isSelected = false,
}: IChipProp) => (
  <TouchableOpacity
    testID="chipTestId"
    disabled={!pressable}
    style={[styles.container, isSelected && styles.selectedContainer, style]}
    onPress={onPress}
  >
    {isSelected && (
      // <MyImage
      //   tintColor={R.colors.success}
      //   testID="closeIconTestId"
      //   name="ic_search"
      //   style={styles.checkIcon}
      //   color={R.colors.gray}
      // />
      <MyText style={styles.check}>✔︎</MyText>
    )}
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
