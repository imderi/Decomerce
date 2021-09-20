import React from "react";
import styled from "styled-components";
import { Text, FlatList, Slider } from "react-native";

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
  {
    title: "Second Item",
  },
  {
    title: "Third Item",
  },
];

const SliderContainer = styled.View`
  background-color: white;
  justify-content: center;
`;

const SliderItemContainer = styled.View`
  width: 125px;
  height: 150px;
  background-color: green;
  margin: 20px 10px 20px 10px;
`;

const SliderItem = ({ item }) => {
  const { title } = item;
  return (
    <SliderItemContainer>
      <Text>{title}</Text>
    </SliderItemContainer>
  );
};

export const ProductsCarousel = () => {
  return (
    <SliderContainer>
      <RowFlatList
        horizontal={true}
        data={SLIDERDATA}
        renderItem={(item) => <SliderItem {...item} />}
        keyExtractor={(item, index) => item.title + index}
      />
    </SliderContainer>
  );
};
