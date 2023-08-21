import { StyleSheet } from "react-native";
import R from "../../../res/R";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: R.colors.gray,
    borderRadius: R.dimensions.radius10,
    borderWidth: R.dimensions.borderWidth,

    paddingHorizontal: R.dimensions.hMargin10,
  },
  title: {
    color: R.colors.secondaryText,
    textAlign: "center",
  },
  closeIcon: {
    width: R.dimensions.hMargin8,
    height: R.dimensions.hMargin8,
    alignSelf: "center",
    marginLeft: R.dimensions.hMargin4,
  },
  checkIcon: {
    width: R.dimensions.hMargin8,
    height: R.dimensions.hMargin8,
    alignSelf: "center",
    marginRight: R.dimensions.hMargin4,
  },
  check: {
    color: R.colors.success,
  },
  selectedContainer: {
    borderColor: R.colors.success,
  },
});
