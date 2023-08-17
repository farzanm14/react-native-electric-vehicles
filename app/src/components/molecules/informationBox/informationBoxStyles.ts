import { StyleSheet } from "react-native";
import R from "../../../res/R";

export default StyleSheet.create({
  boxContainer: {
    alignItems: "center",
    flexDirection: "row",
    borderColor: R.colors.primary,
    backgroundColor: R.colors.primaryVeryLight,
    borderWidth: R.dimensions.borderWidth,
    padding: R.dimensions.hMargin10,
    marginVertical: R.dimensions.vMargin10,
    marginHorizontal: R.dimensions.hMargin10,
    borderRadius: R.dimensions.radius10,
  },
  horizontalContainer: { flexDirection: "row" },
  title: {
    color: R.colors.secondaryText,
    fontSize: R.dimensions.fs10,
    fontWeight: "bold",
  },
  value: {
    fontWeight: "bold",
    marginTop: R.dimensions.vMargin2,
    fontSize: R.dimensions.fs12,
    color: R.colors.primaryText,
  },
  verticalSeparator: {
    backgroundColor: R.colors.primary,
    width: R.dimensions.borderWidth,
    height: R.dimensions.vMargin14,
    marginHorizontal: R.dimensions.hMargin10,
  },

  icon: {
    width: R.dimensions.iconSize24,
    height: R.dimensions.iconSize24,
  },
});
