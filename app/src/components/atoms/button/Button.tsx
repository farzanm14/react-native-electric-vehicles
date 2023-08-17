import React from "react";
import {
  ActivityIndicator,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import R from "../../../res/R";
import MyText from "../text/Text";
import styles from "./buttonStyles";

export interface MyButtonProps {
  style?: StyleProp<ViewStyle>;
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  loading?: boolean;
  loadingColor?: string;
  onPress?: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({
  style,
  title,
  titleStyle,
  disabled = false,
  loading = false,
  loadingColor = R.colors.primaryVeryLight,
  ...rest
}) => {
  return (
    <TouchableOpacity
      testID="buttonTouchable"
      activeOpacity={0.8}
      {...rest}
      disabled={disabled || loading}
      style={[styles.button, style, disabled ? styles.disabled : {}]}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={loadingColor}
          testID="buttonLoading"
        />
      ) : (
        <MyText
          style={[
            styles.title,
            titleStyle,
            disabled ? styles.disabledText : {},
          ]}
          testID="buttonTitle"
        >
          {title}
        </MyText>
      )}
    </TouchableOpacity>
  );
};

export default MyButton;
