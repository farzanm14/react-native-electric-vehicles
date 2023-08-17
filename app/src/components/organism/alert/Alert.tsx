import React, { Dispatch, SetStateAction } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import styles from "./alertStyles";
import R from "../../../res/R";
import MyText, { IMyTextProps } from "../../atoms/text/Text";
import MyButton, { MyButtonProps } from "../../atoms/button/Button";
import BottomSheet from "../../atoms/bottomSheet/BottomSheet";

interface MyAlertType {
  wrapperStyle?: StyleProp<ViewStyle>;
  visible: boolean;
  title: string;
  message: string | React.ReactElement<{}>;
  actionButtonText?: string;
  cancelButtonText?: string;
  actionButtonColor?: string;
  cancelButtonColor?: string;
  actionButtonPress?: () => void;
  cancelButtonPress?: () => void;
  actionButtonDisabled?: boolean;
  cancelButtonDisabled?: boolean;
  actionButtonLoading?: boolean;
  cancelButtonLoading?: boolean;
  buttonsWrapperStyle?: StyleProp<ViewStyle>;
  actionButtonStyle?: StyleProp<ViewStyle>;
  cancelButtonStyle?: StyleProp<ViewStyle>;
  actionButtonTextStyle?: IMyTextProps["style"];
  cancelButtonTextStyle?: IMyTextProps["style"];
  actionButtonProps?: MyButtonProps;
  hideCancelButton?: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
}

const MyAlert: React.FC<MyAlertType> = ({
  wrapperStyle,
  visible,
  title,
  message,
  actionButtonText = "OK",
  cancelButtonText = "Cancel",
  actionButtonColor = R.colors.primaryVeryDark,
  cancelButtonColor = R.colors.primaryLight,
  actionButtonPress,
  cancelButtonPress,
  actionButtonDisabled = false,
  cancelButtonDisabled = false,
  actionButtonLoading = false,
  cancelButtonLoading = false,
  buttonsWrapperStyle,
  actionButtonStyle,
  cancelButtonStyle,
  actionButtonTextStyle,
  cancelButtonTextStyle,
  actionButtonProps,
  hideCancelButton = false,
  handleClose,
}) => {
  function closeAlert() {
    handleClose(false);
  }

  return (
    <BottomSheet
      visible={visible}
      handleClose={closeAlert}
      contentContainerStyle={styles.contentContainer}
      wrapperStyle={wrapperStyle}
    >
      <MyText bold>{title}</MyText>
      <MyText light style={styles.message}>
        {message}
      </MyText>

      <View style={[styles.buttonWrapper, buttonsWrapperStyle]}>
        {!hideCancelButton && (
          <MyButton
            title={cancelButtonText}
            titleStyle={cancelButtonTextStyle}
            style={[
              styles.leftButton,
              { backgroundColor: cancelButtonColor },
              cancelButtonStyle,
            ]}
            onPress={cancelButtonPress ?? closeAlert}
            disabled={cancelButtonDisabled || cancelButtonLoading}
            loading={cancelButtonLoading}
            loadingColor={R.colors.white}
          />
        )}
        <MyButton
          {...actionButtonProps}
          title={actionButtonText}
          titleStyle={actionButtonTextStyle}
          style={[
            styles.rightButton,
            { backgroundColor: actionButtonColor },
            actionButtonStyle,
          ]}
          onPress={actionButtonPress ?? closeAlert}
          disabled={actionButtonDisabled || actionButtonLoading}
          loading={actionButtonLoading}
          loadingColor={R.colors.white}
        />
      </View>
    </BottomSheet>
  );
};

export default MyAlert;
