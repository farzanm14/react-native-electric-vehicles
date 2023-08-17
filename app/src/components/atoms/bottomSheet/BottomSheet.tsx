import React, { Dispatch, SetStateAction } from "react";
import { Keyboard, StyleProp, View, ViewStyle } from "react-native";
import { Modalize, ModalizeProps } from "react-native-modalize";
import { Portal } from "react-native-portalize";
import R from "../../../res/R";
import styles from "./bottomSheetStyles";

interface BottomSheetType extends ModalizeProps {
  visible: boolean;
  dimmerColor?: string;
  handleClose: Dispatch<SetStateAction<boolean>>;
  wrapperStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  handleStyle?: StyleProp<ViewStyle>;
}

const BottomSheet: React.FC<BottomSheetType> = ({
  visible,
  dimmerColor = R.colors.withAlpha(R.colors.black, 0.7),
  handleClose,
  wrapperStyle,
  containerStyle,
  contentContainerStyle,
  handleStyle,

  children,
  ...otherProps
}) => {
  const modalizeRef = React.useRef<Modalize | null>(null);

  const _visible = React.useRef<boolean>(visible);
  React.useEffect(() => {
    _visible.current = visible;
  }, [visible]);

  React.useEffect(() => {
    if (modalizeRef.current) {
      if (visible) {
        modalizeRef.current.open();
        Keyboard.dismiss();
      } else modalizeRef.current.close();
    }
  }, [visible]);

  function handleCloseModal() {
    if (_visible.current) handleClose(false);
  }

  return (
    <Portal>
      <Modalize
        adjustToContentHeight={true}
        {...otherProps}
        ref={modalizeRef}
        onClosed={handleCloseModal}
        handlePosition="inside"
      >
        {!otherProps.flatListProps && (
          <View style={[styles.children, contentContainerStyle]}>
            {children}
          </View>
        )}
      </Modalize>
    </Portal>
  );
};

export default BottomSheet;
