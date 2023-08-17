import { StyleSheet } from 'react-native';
import R from '../../res/R';

export default StyleSheet.create({
  container: {
    paddingHorizontal: R.dimensions.hMargin10,
    paddingVertical: R.dimensions.vMargin2,
    width: R.dimensions.windowWidth,
    height: R.dimensions.windowHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: R.dimensions.iconSize100,
    height: R.dimensions.iconSize100,
    alignSelf: 'center',
  },
  description: {
    fontWeight: 'bold',
    color: R.colors.secondaryText,
  },
});
