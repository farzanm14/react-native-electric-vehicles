import React, { Dispatch, SetStateAction, useState } from "react";
import { FlatList, View } from "react-native";
import BottomSheet from "../../../../components/atoms/bottomSheet/BottomSheet";
import MyChip from "../../../../components/atoms/chip/Chip";
import MyText from "../../../../components/atoms/text/Text";
import { Category } from "../../../../models/Category";
import styles from "./filterBottomSheetStyles";
import MyButton from "../../../../components/atoms/button/Button";

interface IFilterProps {
  visible: boolean;
  brands: string[];
  categories?: Category[];
  selectedCategory: Category | undefined;
  handleClose: Dispatch<SetStateAction<boolean>>;
  updateSelectedBrands: (brands: string[]) => void;
  updateSelectedCategory: (category: Category) => void;
}

const FilterBottomSheet: React.FC<IFilterProps> = ({
  visible,
  brands,
  selectedCategory,
  categories = ["VAN", "CAR", "MOTORCYCLE"],
  handleClose,
  updateSelectedBrands,
  updateSelectedCategory,
}) => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const toggleBrandSelection = (brandId: string) => {
    setSelectedBrands((prevSelectedBrands) => {
      if (prevSelectedBrands.includes(brandId)) {
        return prevSelectedBrands.filter((id) => id !== brandId);
      } else {
        return [...prevSelectedBrands, brandId];
      }
    });
  };

  function closeBottomSheet() {
    handleClose(false);
  }

  const renderItem = (item: string) => {
    const isSelected = selectedBrands.includes(item);

    return (
      <MyChip
        style={styles.chip}
        pressable
        title={item}
        onPress={() => toggleBrandSelection(item)}
        isSelected={isSelected}
      />
    );
  };

  function handleSearchForCategory(category: Category) {
    updateSelectedCategory(category);
    closeBottomSheet();
  }
  function handleSearchForBrands() {
    updateSelectedBrands(selectedBrands);
    closeBottomSheet();
  }

  const renderFooter = () => {
    return (
      <MyButton
        onPress={handleSearchForBrands}
        style={styles.submitButton}
        title="Search for Brands"
      />
    );
  };
  return (
    <BottomSheet
      visible={visible}
      handleClose={closeBottomSheet}
      contentContainerStyle={styles.contentContainer}
    >
      <MyText bold style={styles.title}>
        Filter By Category
      </MyText>
      <View style={styles.categoriesContainer}>
        {categories.map((item) => (
          <MyChip
            key={item}
            pressable
            isSelected={item == selectedCategory}
            onPress={() => handleSearchForCategory(item)}
            style={styles.chip}
            title={item.toLowerCase()}
          />
        ))}
      </View>
      <MyText bold style={styles.title}>
        Filter By Brand
      </MyText>
      <FlatList
        data={brands}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item) => item}
        renderItem={({ item }) => renderItem(item)}
        ListFooterComponent={renderFooter}
      />
    </BottomSheet>
  );
};

export default FilterBottomSheet;
