import React from "react";
import { SafeArea } from "../../components/safe-area.component";
import { Text } from "react-native";
import { HomeSlider } from "../../components/home-slider.component";

export const HomeScreen = () => {
  return (
    <SafeArea>
      <HomeSlider />
      <Text>Home Screen</Text>
    </SafeArea>
  );
};
