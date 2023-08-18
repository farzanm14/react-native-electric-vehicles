import { StyleSheet } from "react-native";
import R from "../../../res/R";
import { constants } from "../../../services/charging/ChargingService";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: R.dimensions.vMargin300,
  },
  barContainer: {
    width: "100%",
    height: "60%",
  },
  barBody: {
    top: R.dimensions.vMargin90,
    alignSelf: "center",
    width: constants.barLength,
    height: R.dimensions.vMargin40,
    position: "absolute",
  },
  informationContainer: {
    justifyContent: "space-between",
    width: constants.barLength,
    flexDirection: "row",
    alignSelf: "center",
  },
  values: {
    fontWeight: "normal",
  },
  title: {
    lineHeight: R.dimensions.vMargin16,
    fontWeight: "bold",
  },
  percentage: {
    fontWeight: "bold",
    color: R.colors.success,
    fontSize: R.dimensions.fs32,
  },
  fullChargedMessage: {
    marginTop: R.dimensions.vMargin14,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
    color: R.colors.success,
    fontSize: R.dimensions.fs20,
  },
});
