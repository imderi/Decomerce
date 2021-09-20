import React from "react";
import styled from "styled-components";
import { Text, FlatList } from "react-native";

const RowFlatList = styled(FlatList)`
  flex-grow: 0;
`;

const SLIDERDATA = [
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Third Item",
  },
];

const SliderItemContainer = styled.View`
  width: 350px;
  height: 200px;
  background-color: green;
  margin-right: 16px;
`;

const SliderItem = ({ item }) => {
  const { title } = item;
  return (
    <SliderItemContainer>
      <Text>{title}</Text>
    </SliderItemContainer>
  );
};

export const Carousel = () => {
  return (
    <RowFlatList
      horizontal={true}
      data={SLIDERDATA}
      renderItem={(item) => <SliderItem {...item} />}
      keyExtractor={(item) => item.title + item.index}
    />
  );
};
