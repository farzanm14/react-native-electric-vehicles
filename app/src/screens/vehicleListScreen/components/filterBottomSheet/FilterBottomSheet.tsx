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

  function handleCloseBottomSheet() {
    handleClose(false);
  }
  function handleFilterByCategory(item: Category) {
    setSelectedBrands([]);
    updateSelectedBrands([]);
    updateSelectedCategory(item);
    handleCloseBottomSheet();
  }
  function onToggleCategory(item: Category) {
    if (item == selectedCategory) {
      updateSelectedCategory(undefined);
    } else {
      handleFilterByCategory(item);
    }
  }
  const onToggleBrand = (brand: string) => {
    setSelectedBrands((prevSelectedBrands) => {
      if (prevSelectedBrands.includes(brand)) {
        return prevSelectedBrands.filter((id) => id !== brand);
      } else {
        return [...prevSelectedBrands, brand];
      }
    });
  };

  const renderCategoryItem = (item: Category) => {
    return (
      <MyChip
        key={item}
        pressable
        isSelected={item == selectedCategory}
        onPress={() => onToggleCategory(item)}
        style={styles.chip}
        title={item.toLowerCase()}
      />
    );
  };
  const renderBrandItem = (item: string) => {
    return (
      <MyChip
        style={styles.chip}
        pressable
        title={item}
        onPress={() => onToggleBrand(item)}
        isSelected={selectedBrands.includes(item)}
      />
    );
  };
  const renderBrandsFooter = () => {
    function handleFilterByBrands() {
      console.log(" handleSearchForBrands selectedBrands", selectedBrands);
      updateSelectedBrands(selectedBrands);
      handleCloseBottomSheet();
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
      handleClose={handleCloseBottomSheet}
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
