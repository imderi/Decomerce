import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Text, FlatList } from "react-native";
import { Card, CardHeader } from "../../../../components/card.component";

// child component
import { ProductItem } from "./product-item.component";

const HeaderTitle = styled.Text`
  font-size: 18px;
`;

export const FlashDealsCarousel = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // GET PRODUCTS DATA
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://fakestoreapi.com/products?limit=5")
      .then((res) => {
        setIsLoading(false);
        setProducts(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <Card>
      <CardHeader>
        <HeaderTitle>FLASH DEAL!</HeaderTitle>
      </CardHeader>
      {isLoading && <Text>Lagi Loading</Text>}
      {!products && <Text>No Data!</Text>}
      <FlatList
        horizontal={true}
        data={products}
        renderItem={(item) => <ProductItem {...item} />}
        keyExtractor={(item, index) => item.title + index}
      />
    </Card>
  );
};
