import { StyleSheet } from "react-native";
import R from "../../../res/R";

export default StyleSheet.create({
  button: {
    height: R.dimensions.buttonHeight64,
    backgroundColor: R.colors.primary,
    borderRadius: R.dimensions.radius20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: R.dimensions.fs20,
  },
  disabled: {
    opacity: 0.4,
  },
  disabledText: {
    color: R.colors.gray,
  },
});
