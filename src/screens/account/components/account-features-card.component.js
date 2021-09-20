import React from "react";
import { Text } from "react-native-paper";
import { RoundContainer } from "../../../components/round-container.component";

export const AccountFeaturesCard = () => {
  return (
    <RoundContainer>
      <Text>Watchlist</Text>
      <Text>Last Seen</Text>
      <Text>Message / Products Discussion</Text>
      <Text>Review</Text>
    </RoundContainer>
  );
};
