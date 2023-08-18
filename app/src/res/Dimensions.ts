import { Dimensions } from "react-native";
import { mvs, s, vs } from "react-native-size-matters";

const window = Dimensions.get("window");

export default {
  windowWidth: window.width,
  windowHeight: window.height,
  windowAspectRatio: window.height / window.width,

  zero: 0,

  // icon
  iconSize10: vs(10),
  iconSize12: vs(12),
  iconSize16: vs(16),
  iconSize24: vs(24),
  iconSize32: vs(32),
  iconSize64: vs(64),
  iconSize100: vs(100),

  borderWidth: vs(1),
  borderWidth2: vs(2),
  borderWidth3: vs(3),
  borderWidth15: vs(15),

  // button
  buttonHeight24: vs(24),
  buttonHeight34: vs(34),
  buttonHeight50: vs(50),
  buttonHeight56: vs(56),
  buttonHeight64: vs(64),

  // input
  inputHeight55: vs(55),

  // vertical margin
  vMargin2: vs(2),
  vMargin4: vs(4),
  vMargin6: vs(6),
  vMargin8: vs(8),
  vMargin10: vs(10),
  vMargin12: vs(12),
  vMargin14: vs(14),
  vMargin16: vs(16),
  vMargin18: vs(18),
  vMargin20: vs(20),
  vMargin24: vs(24),
  vMargin32: vs(32),
  vMargin36: vs(36),
  vMargin40: vs(40),
  vMargin46: vs(46),
  vMargin50: vs(50),
  vMargin55: vs(55),
  vMargin64: vs(64),
  vMargin90: vs(90),
  vMargin300: vs(300),

  // horizontal margin
  hMargin2: s(2),
  hMargin4: s(4),
  hMargin6: s(6),
  hMargin8: s(8),
  hMargin10: s(10),
  hMargin12: s(12),
  hMargin14: s(14),
  hMargin16: s(16),
  hMargin18: s(18),
  hMargin20: vs(20),
  hMargin24: vs(24),
  hMargin32: s(32),
  hMargin36: s(36),
  hMargin40: s(40),
  hMargin46: s(46),
  hMargin50: s(50),
  hMargin56: s(56),
  hMargin64: s(64),
  hMargin70: s(70),
  hMargin82: s(82),
  hMargin100: s(100),

  // radius
  radius5: vs(5),
  radius10: vs(10),
  radius15: vs(15),
  radius20: vs(20),
  radius30: vs(30),

  //fontSizes
  fs8: mvs(8),
  fs10: mvs(10),
  fs12: mvs(12),
  fs14: mvs(14),
  fs16: mvs(16),
  fs18: mvs(18),
  fs20: mvs(20),
  fs24: mvs(24),
  fs28: mvs(28),
  fs32: mvs(32),
};
