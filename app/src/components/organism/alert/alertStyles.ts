import { StyleSheet } from 'react-native';
import R from '../../../res/R';

export default StyleSheet.create({
  contentContainer: {
    paddingTop: R.dimensions.vMargin10,
    paddingBottom: R.dimensions.vMargin20,
    paddingHorizontal: R.dimensions.hMargin20,
  },
  message: {
    marginTop: R.dimensions.vMargin8,
    marginBottom: R.dimensions.vMargin32,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftButton: {
    flex: 1,
    height: R.dimensions.buttonHeight34,
    borderRadius: R.dimensions.radius10,
    marginHorizontal: 0,
    marginRight: R.dimensions.hMargin32,
  },
  rightButton: {
    flex: 1,
    height: R.dimensions.buttonHeight34,
    borderRadius: R.dimensions.radius10,
    marginHorizontal: 0,
  },
});
