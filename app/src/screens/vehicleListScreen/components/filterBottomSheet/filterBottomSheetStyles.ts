import { StyleSheet } from "react-native";
import R from "../../../../res/R";

export default StyleSheet.create({
  contentContainer: {
    paddingTop: R.dimensions.vMargin10,
    paddingBottom: R.dimensions.vMargin20,
    paddingHorizontal: R.dimensions.hMargin20,
    minHeight: R.dimensions.vMargin300,
  },
  categoriesContainer: {
    flexDirection: "row",
  },
  title: {
    marginVertical: R.dimensions.vMargin10,
  },
  chip: {
    marginHorizontal: R.dimensions.hMargin2,
    marginVertical: R.dimensions.vMargin2,
    paddingVertical: R.dimensions.vMargin2,
  },
  submitButton: {
    height: R.dimensions.buttonHeight34,
    marginVertical: R.dimensions.vMargin10,
    width: R.dimensions.windowWidth * 0.7,
  },
  contentContainerStyle: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
