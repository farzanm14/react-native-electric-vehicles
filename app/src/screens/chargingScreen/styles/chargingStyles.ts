import { StyleSheet } from "react-native";
import R from "../../../res/R";
import { constants } from "../../../services/charging/ChargingService";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: R.dimensions.hMargin40,
    height: R.dimensions.vMargin40,
    alignSelf: "center",
  },
  backButton: {
    width: R.dimensions.iconSize12,
    height: R.dimensions.iconSize12,
  },
  barContainer: {
    width: "100%",
    height: "100%",
  },
  barBody: {
    top: R.dimensions.vMargin64,
    alignSelf: "center",
    width: constants.barLength,
    height: R.dimensions.vMargin40,
    position: "absolute",
  },
  informationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  values: {
    fontWeight: "normal",
  },
  title: {
    lineHeight: 20,
    fontWeight: "bold",
  },
  percentage: {
    fontWeight: "bold",
    color: R.colors.success,
    fontSize: R.dimensions.fs32,
  },
});
