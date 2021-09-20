import React from "react";
import { SafeArea } from "../../components/safe-area.component";
import { ScrollView } from "react-native";
import { Carousel } from "../../components/carousel.component";
import { HomeInfoCard } from "./components/home-info-card.component";
import { HomeSpecializationCard } from "./components/home-specialization-card.component";
import { ProductsCarousel } from "../../components/products-carousel.component";

export const HomeScreen = () => {
  return (
    <SafeArea>
      <ScrollView>
        <Carousel />
        <HomeInfoCard />
        <HomeSpecializationCard />
        <ProductsCarousel />
      </ScrollView>
    </SafeArea>
  );
};
