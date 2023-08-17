import { StyleSheet } from 'react-native';
import R from '../../res/R';

export default StyleSheet.create({
  mainContainer: {
    paddingHorizontal: R.dimensions.hMargin10,
  },

  infoContainer: {
    marginTop: R.dimensions.vMargin32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    position: 'absolute',
    bottom: R.dimensions.vMargin20,
  },
  submitButton: {
    marginTop: R.dimensions.vMargin64,
    height: R.dimensions.buttonHeight50,
    borderRadius: R.dimensions.radius15,
  },
  buttonTitle: {
    fontWeight: 'bold',
    color: R.colors.primaryText,
  },
  backButton: {
    width: R.dimensions.iconSize12,
    height: R.dimensions.iconSize12,
  },
  detailBoxLoading: {
    width: R.dimensions.windowWidth * 0.4,
    height: R.dimensions.vMargin90 * 1.5,
  },
  boxContainerLoading: {
    marginTop: R.dimensions.vMargin16,
    width: R.dimensions.windowWidth * 0.9,
    height: R.dimensions.vMargin64,
  },
  submitButtonLoading: {
    marginTop: R.dimensions.vMargin55,
    width: R.dimensions.windowWidth * 0.9,
    height: R.dimensions.vMargin50,
  },
});
