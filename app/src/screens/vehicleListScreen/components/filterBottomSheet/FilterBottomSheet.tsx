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
  categories: Category[];
  handleClose: Dispatch<SetStateAction<boolean>>;
  updateSelectedBrands: Dispatch<SetStateAction<string[]>>;
  selectedCategory: Category | undefined;
  updateSelectedCategory: Dispatch<SetStateAction<Category | undefined>>;
}

const FilterBottomSheet: React.FC<IFilterProps> = ({
  visible,
  brands,
  selectedCategory,
  categories,
  handleClose,
  updateSelectedBrands,
  updateSelectedCategory,
}) => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  function closeBottomSheet() {
    handleClose(false);
  }

  const renderCategoryItem = (item: Category) => {
    let isSelected = item == selectedCategory;

    function handleFilterByCategory() {
      setSelectedBrands([]);
      updateSelectedBrands([]);
      updateSelectedCategory(item);
      closeBottomSheet();
    }
    function onToggleCategory() {
      if (isSelected) {
        isSelected = false;
        updateSelectedCategory(undefined);
      } else {
        handleFilterByCategory();
      }
    }
    return (
      <MyChip
        key={item}
        pressable
        isSelected={isSelected}
        onPress={onToggleCategory}
        style={styles.chip}
        title={item.toLowerCase()}
      />
    );
  };
  const renderBrandItem = (item: string) => {
    const toggleBrandSelection = (brand: string) => {
      setSelectedBrands((prevSelectedBrands) => {
        if (prevSelectedBrands.includes(brand)) {
          return prevSelectedBrands.filter((id) => id !== brand);
        } else {
          return [...prevSelectedBrands, brand];
        }
      });
    };

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
  const renderBrandsFooter = () => {
    function handleFilterByBrands() {
      console.log(" handleSearchForBrands selectedBrands", selectedBrands);
      updateSelectedBrands(selectedBrands);
      closeBottomSheet();
    }

    return (
      <MyButton
        onPress={handleFilterByBrands}
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
        {categories.map((item) => renderCategoryItem(item))}
      </View>
      <MyText bold style={styles.title}>
        Filter By Brand
      </MyText>
      <FlatList
        data={brands}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item) => item}
        renderItem={({ item }) => renderBrandItem(item)}
        ListFooterComponent={renderBrandsFooter}
      />
    </BottomSheet>
  );
};

export default FilterBottomSheet;
