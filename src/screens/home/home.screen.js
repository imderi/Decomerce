import React, { useState } from "react";
import { SafeArea } from "../../components/safe-area.component";
import { ScrollView } from "react-native";
import { HomeSliderCarouse } from "./components/home-slider-carousel.component";
import { HomeInfoCard } from "./components/home-info-card.component";
import { HomeSpecializationCard } from "./components/home-specialization-card.component";
import { FlashDealsCarousel } from "./components/flash-deals-carousel.component";
import { Searchbar } from "react-native-paper";

export const HomeScreen = () => {
  return (
    <SafeArea>
      <Searchbar />
      <ScrollView>
        <HomeSliderCarouse />
        <HomeInfoCard />
        <HomeSpecializationCard />
        <FlashDealsCarousel />
        <FlashDealsCarousel />
        <FlashDealsCarousel />
        <FlashDealsCarousel />
      </ScrollView>
    </SafeArea>
  );
};
