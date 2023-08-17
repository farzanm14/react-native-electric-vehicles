import React from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import MyImage, { IMyImageProps } from "../../atoms/image/Image";

interface IMyImageButtonProps extends IMyImageProps {
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const MyImageButton: React.FC<IMyImageButtonProps> = ({
  onPress,
  containerStyle,
  ...props
}) => {
  return (
    <TouchableOpacity
      testID="imageButtonTestId"
      onPress={onPress}
      style={containerStyle}
    >
      <MyImage {...props} />
    </TouchableOpacity>
  );
};

export default MyImageButton;
