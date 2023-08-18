import React from "react";
import { Image, ImageProps, ImageStyle, StyleProp } from "react-native";
import R from "../../../res/R";

export interface IMyImageProps extends Omit<ImageProps, "source"> {
  name?: keyof typeof R.images;
  uri?: string;
  color?: string;
  size?: number;
}

const MyImage: React.FC<IMyImageProps> = ({
  name,
  uri,
  color,
  size = R.dimensions.iconSize24,
  ...props
}) => {
  const sizeStyle: StyleProp<ImageStyle> = {
    width: size,
    height: size,
  };

  return (
    <Image
      testID="imageTestId"
      resizeMode="contain"
      style={[sizeStyle, props.style]}
      tintColor={color}
      source={name ? R.images[name] : { uri }}
      {...props}
    />
  );
};

export default MyImage;
