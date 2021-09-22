import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const SliderItemContainer = styled.View`
  flex: 1;
  border-radius: 5px;
  width: 125px;
  height: 200px;
  background-color: skyblue;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const ProductImage = styled.Image.attrs({
  resizeMode: "cover",
})`
  flex: 1;
  width: 100%;
  height: 125px;
`;

const BodyContainer = styled.View`
  padding: 10px;
  justify-content: flex-end;
`;

const ProductName = styled.Text`
  margin-bottom: 5px;
`;

const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

export const ProductItem = ({ item }) => {
  const { title, price, image } = item;
  // this code under is NOT NEEDED - JUST API BUGS
  const newImage = image.slice(0, 4) + image.slice(5);
  //
  return (
    <SliderItemContainer>
      <ProductImage source={{ uri: newImage }} />
      <BodyContainer>
        <ProductName numberOfLines={1} ellipsizeMode="tail">
          {title}
        </ProductName>
        <ProductPrice>$ {price}</ProductPrice>
      </BodyContainer>
    </SliderItemContainer>
  );
};
