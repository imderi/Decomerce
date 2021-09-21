import React from "react";
import styled from "styled-components";
import { Text } from "react-native";

const SliderItemContainer = styled.View`
  border-radius: 5px;
  width: 125px;
  height: 200px;
  background-color: skyblue;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const ProductImage = styled.Image`
  width: 100%;
  height: 125px;
`;

export const ProductItem = ({ item }) => {
  const { title, price, image } = item;
  return (
    <SliderItemContainer>
      <ProductImage source={{ uri: image }} />
      <Text numberOfLines={1} ellipsizeMode="tail">
        {title}
      </Text>
      <Text>$ {price}</Text>
    </SliderItemContainer>
  );
};
