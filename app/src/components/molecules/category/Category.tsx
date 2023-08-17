import React from "react";
import { Category } from "../../../models/Category";
import MyChip from "../../atoms/chip/Chip";

interface Props {
  category: Category;
  style?: any;
}

export default function CategoryComponent({ category, style }: Props) {
  const title =
    category === "VAN"
      ? "van"
      : category === "MOTORCYCLE"
      ? "motorcycle"
      : "car";

  if (!category) {
    return null;
  } else {
    return <MyChip title={title} style={style} />;
  }
}
