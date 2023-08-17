import React from "react";
import { FlatList } from "react-native";
import Container from "../../../components/atoms/container/Container";
import { createArray } from "../../../utils/helpers/helpers";
import LoadingItem from "./LoadingItem";

const SkeletonLoading = () => {
  const fakeList: number[] = createArray(1, 10);
  return (
    <Container>
      <FlatList
        data={fakeList}
        keyExtractor={(item) => item.toString()}
        renderItem={() => <LoadingItem />}
      />
    </Container>
  );
};

export default SkeletonLoading;
