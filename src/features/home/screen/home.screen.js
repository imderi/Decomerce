import React from "react";
import { HomeSearchBar } from "../components/home-search-bar.component";
import { ScrollView, RefreshControl } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HomeSliderCarouse } from "../components/home-slider-carousel.component";
import { HomeInfoCard } from "../components/home-info-card.component";
import { HomeSpecializationCard } from "../components/home-specialization-card.component";
import { FlashDealsCarousel } from "../components/flash-deals-carousel/flash-deals-carousel.component";
import { HomeAdsBanner } from "../components/home-ads-banner.component";

// ON PULL REFRESH - DELAY MOCK
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
// ============================

export const HomeScreen = () => {
  // ON PULL REFRESH - MOCK
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);
  // ======================

  return (
    <>
      <StatusBar style="light" />
      <HomeSearchBar />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <HomeSliderCarouse />
        <HomeInfoCard />
        <HomeSpecializationCard />
        <FlashDealsCarousel />
        <HomeAdsBanner />
      </ScrollView>
    </>
  );
};
