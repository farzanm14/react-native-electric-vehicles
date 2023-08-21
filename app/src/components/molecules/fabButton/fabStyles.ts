import { StyleSheet } from "react-native";
import R from "../../../res/R";

export default StyleSheet.create({
  fabButton: {
    position: "absolute",
    right: R.dimensions.hMargin16,
    bottom: R.dimensions.hMargin16,

    alignItems: "center",
    backgroundColor: R.colors.primaryVeryLight,
    padding: R.dimensions.hMargin10,
    marginVertical: R.dimensions.vMargin10,
    marginHorizontal: R.dimensions.hMargin10,
    borderRadius: R.dimensions.radius30,

    shadowColor: R.colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    width: R.dimensions.iconSize24,
    height: R.dimensions.iconSize24,
  },
});
