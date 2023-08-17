import React from "react";
import { TouchableOpacity } from "react-native";
import MyText from "../../atoms/text/Text";
import NotFound from "../../molecules/notFound/NotFound";
import styles from "./tryAgainStyles";

interface Props {
  style?: any;
  retryMethod: () => void;
  title: string;
}

export default function TryAgain({ title, retryMethod, style }: Props) {
  return (
    <NotFound style={style}>
      <TouchableOpacity onPress={retryMethod}>
        <MyText style={styles.text}>{title}</MyText>
      </TouchableOpacity>
    </NotFound>
  );
}
