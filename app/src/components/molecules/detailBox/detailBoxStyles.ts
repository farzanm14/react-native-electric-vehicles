import { StyleSheet } from "react-native";
import R from "../../../res/R";

export default StyleSheet.create({
  boxContainer: {
    alignItems: "center",
    borderColor: R.colors.primary,
    borderWidth: R.dimensions.borderWidth,
    paddingHorizontal: R.dimensions.hMargin10,
    paddingVertical: R.dimensions.vMargin16,
    marginVertical: R.dimensions.vMargin10,
    marginHorizontal: R.dimensions.hMargin10,
    borderRadius: R.dimensions.radius15,
    flex: 1,
  },
  title: {
    color: R.colors.secondaryText,
    fontSize: R.dimensions.fs12,
    textAlign: "center",
  },
  value: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: R.dimensions.vMargin2,
    fontSize: R.dimensions.fs18,
  },
  horizontalSeparator: {
    backgroundColor: R.colors.primary,
    height: R.dimensions.borderWidth,
    width: "70%",
    marginVertical: R.dimensions.vMargin10,
  },
  icon: {
    width: R.dimensions.iconSize64,
    height: R.dimensions.iconSize64,
  },
});
