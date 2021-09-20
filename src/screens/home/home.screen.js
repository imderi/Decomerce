import React from "react";
import { SafeArea } from "../../components/safe-area.component";
import { ScrollView } from "react-native";
import { Carousel } from "../../components/carousel.component";
import { HomeInfoCard } from "./components/home-info-card.component";

export const HomeScreen = () => {
  return (
    <SafeArea>
      <ScrollView>
        <Carousel />
        <HomeInfoCard />
      </ScrollView>
    </SafeArea>
  );
};
