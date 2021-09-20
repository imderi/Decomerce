import React from "react";
import LottieView from "lottie-react-native";

export const NoTransaction = () => {
  return (
    <LottieView
      speed={1}
      key="animation"
      autoPlay={true}
      loop={false}
      source={require("../../../../assets/animation/no-data-iconimation.json")}
    />
  );
};
