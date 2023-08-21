import { StyleSheet } from "react-native";
import R from "../../res/R";

export default StyleSheet.create({
  itemContainer: {
    margin: R.dimensions.hMargin10,
    marginTop: R.dimensions.vMargin20,
    padding: R.dimensions.hMargin10,
    borderWidth: R.dimensions.borderWidth,
    borderRadius: R.dimensions.radius15,
    borderColor: R.colors.mercury,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  brand: {
    fontSize: R.dimensions.fs12,
    marginBottom: R.dimensions.vMargin10,
    fontWeight: "600",
  },
  model: {
    color: R.colors.primaryText,
    fontWeight: "bold",
    fontSize: R.dimensions.fs18,
  },
  image: {
    marginTop: -R.dimensions.vMargin50,
    width: 140,
    height: 120,
  },
  version: {
    marginTop: R.dimensions.vMargin10,
    color: R.colors.secondaryText,
  },
  moreInfo: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
    marginRight: R.dimensions.hMargin20,
    marginTop: R.dimensions.vMargin10,
  },
  modelContainer: {
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
    paddingLeft: R.dimensions.hMargin10,
  },
  brandContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  category: {
    position: "absolute",
    bottom: 0,
    right: -R.dimensions.hMargin10,

    backgroundColor: R.colors.primaryVeryLight,
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,

    shadowColor: R.colors.gray,
    shadowOffset: {
      width: 0,
      height: R.dimensions.vMargin2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  loadingTitle: {
    width: R.dimensions.hMargin50,
    height: R.dimensions.vMargin10,
    marginVertical: R.dimensions.vMargin2,
  },
  loadingTag: {
    width: R.dimensions.hMargin24,
    height: R.dimensions.vMargin10,
    position: "absolute",
    bottom: 0,
    right: -R.dimensions.hMargin10,
  },
  loadingImage: {
    marginTop: -R.dimensions.vMargin20,
    width: R.dimensions.hMargin70,
    height: R.dimensions.vMargin50,
  },
  listEmpty: { height: R.dimensions.windowHeight },
});
