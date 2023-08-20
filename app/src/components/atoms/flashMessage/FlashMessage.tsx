import { MessageOptions, showMessage } from "react-native-flash-message";
import { FlashMessageType } from "../../../models/FlashMessage";

export default function showFlashMessage(
  message: string,
  type: FlashMessageType,
  duration?: number,
  description?: string
) {
  const theFlashMessage: MessageOptions = {
    message,
    description,
    type,
    autoHide: true,
    duration: duration ? duration : 3000,
  };

  showMessage(theFlashMessage);
}
