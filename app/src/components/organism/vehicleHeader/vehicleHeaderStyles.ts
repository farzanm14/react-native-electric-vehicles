import { StyleSheet } from 'react-native';
import R from '../../../res/R';

export default StyleSheet.create({
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: R.dimensions.vMargin10,
  },
  brand: {
    fontSize: R.dimensions.fs16,
    marginBottom: R.dimensions.vMargin10,
    fontWeight: '600',
  },
  model: {
    color: R.colors.primaryText,
    fontWeight: 'bold',
    fontSize: R.dimensions.fs20,
  },
  image: {
    alignSelf: 'center',
    marginBottom: -R.dimensions.vMargin46,
    width: R.dimensions.windowWidth * 0.6,
    height: R.dimensions.vMargin90 * 2,
  },
  version: {
    marginTop: R.dimensions.vMargin10,
    color: R.colors.secondaryText,
    textAlign: 'right',
  },
  category: {},
});
