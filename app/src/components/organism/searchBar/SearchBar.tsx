import React, { Dispatch, SetStateAction } from "react";
import { TextInput, View } from "react-native";
import R from "../../../res/R";
import MyImage from "../../atoms/image/Image";
import styles from "./searchBarStyles";

interface ISearchBarProps {
  focused: boolean;
  setFocused: (value: boolean) => void;
  setSearchPhrase: Dispatch<SetStateAction<string>>;
  searchPhrase: string;
}

const SearchBar = ({
  focused,
  setFocused,
  setSearchPhrase,
  searchPhrase,
}: ISearchBarProps) => {
  return (
    <View style={[styles.container, focused && styles.focusedContainer]}>
      <MyImage name="ic_search" style={styles.searchIcon} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchPhrase}
        placeholderTextColor={R.colors.gray}
        onChangeText={setSearchPhrase}
        onFocus={() => {
          setFocused(true);
        }}
      />
    </View>
  );
};

export default SearchBar;
