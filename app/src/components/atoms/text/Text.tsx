import React from "react";
import { Text, StyleProp, TextStyle, TextProps } from "react-native";
import styles from "./textStyles";

export interface IMyTextProps extends TextProps {
  style?: StyleProp<TextStyle>;
  bold?: boolean;
  light?: boolean;
}

const MyText: React.FC<IMyTextProps> = ({ style, bold, light, ...props }) => {
  return (
    <Text
      {...props}
      style={[
        styles.baseStyle,
        bold && styles.bold,
        light && styles.light,
        style,
      ]}
      allowFontScaling={false}
    />
  );
};

export default MyText;
