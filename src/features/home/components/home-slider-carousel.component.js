import React from "react";
import styled from "styled-components";
import { FlatList } from "react-native";

const RowFlatList = styled(FlatList).attrs({
  // alignItems: "flex-end",
})`
  flex-grow: 1;
  background-color: white;
`;

const SLIDERDATA = [
  {
    title: "First Item",
    image: require("../../../../assets/home-slide-carousel-items/1.jpeg"),
  },
  {
    title: "Second Item",
    image: require("../../../../assets/home-slide-carousel-items/2.jpeg"),
  },
  {
    title: "Third Item",
    image: require("../../../../assets/home-slide-carousel-items/3.jpeg"),
  },
  {
    title: "Fourth Item",
    image: require("../../../../assets/home-slide-carousel-items/4.jpeg"),
  },
];

const SliderImage = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 320px;
  height: 210px;
  margin-right: 10px;
`;

const SliderItem = ({ item }) => {
  const { image } = item;
  return <SliderImage source={image} />;
};

export const HomeSliderCarouse = () => {
  return (
    <RowFlatList
      horizontal={true}
      data={SLIDERDATA}
      renderItem={(item) => <SliderItem {...item} />}
      keyExtractor={(item) => item.title + item.index}
    />
  );
};
