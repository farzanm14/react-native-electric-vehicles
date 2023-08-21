import { StyleSheet } from "react-native";
import R from "../../../res/R";

export default StyleSheet.create({
  container: {
    backgroundColor: R.colors.whiteSmoke,
    borderRadius: R.dimensions.radius20,
    paddingHorizontal: R.dimensions.hMargin8,
    height: R.dimensions.vMargin40,
    marginVertical: R.dimensions.vMargin10,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  focusedContainer: {
    borderColor: R.colors.gray,
    borderWidth: R.dimensions.borderWidth,
  },
  input: {
    fontSize: R.dimensions.fs16,
    marginLeft: R.dimensions.hMargin4,
    width: "90%",
  },
  searchIcon: {
    width: R.dimensions.iconSize16,
    height: R.dimensions.iconSize16,
  },
});
