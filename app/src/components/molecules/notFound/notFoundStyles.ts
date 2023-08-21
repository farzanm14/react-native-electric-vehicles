import { StyleSheet } from "react-native";
import R from "../../../res/R";

export default StyleSheet.create({
  container: {
    position: "absolute",
    top: R.dimensions.vMargin90,
    right: 0,
    left: 0,
    alignItems: "center",
    padding: R.dimensions.hMargin20,
    justifyContent: "center",
  },
  icon: {
    width: R.dimensions.windowHeight / 2,
    height: R.dimensions.windowWidth / 2,
  },
  text: {
    marginTop: R.dimensions.vMargin10,
    fontSize: R.dimensions.fs16,
    color: R.colors.secondaryLightText,
  },
});
