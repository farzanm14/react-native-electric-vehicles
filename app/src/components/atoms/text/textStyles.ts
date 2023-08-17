import { StyleSheet } from "react-native";
import R from "../../../res/R";

export default StyleSheet.create({
  baseStyle: {
    color: R.colors.primaryText,
    fontSize: R.dimensions.fs12,
  },
  bold: {
    fontWeight: "bold",
    fontSize: R.dimensions.fs14,
  },
  light: {
    fontSize: R.dimensions.fs10,
    color: R.colors.secondaryLightText,
  },
});
