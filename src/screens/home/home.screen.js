import React from "react";
import { HomeSearchBar } from "./components/home-search-bar.component";
import { ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HomeSliderCarouse } from "./components/home-slider-carousel.component";
import { HomeInfoCard } from "./components/home-info-card.component";
import { HomeSpecializationCard } from "./components/home-specialization-card.component";
import { FlashDealsCarousel } from "./components/flash-deals-carousel.component";

export const HomeScreen = () => {
  return (
    <>
      <StatusBar style="light" />
      <HomeSearchBar />
      <ScrollView>
        <HomeSliderCarouse />
        <HomeInfoCard />
        <HomeSpecializationCard />
        <FlashDealsCarousel />
      </ScrollView>
    </>
  );
};
