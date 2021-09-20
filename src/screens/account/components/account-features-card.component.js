import React from "react";
import { Text } from "react-native-paper";
import { CardContainer } from "../../../components/card-container.component";

export const AccountFeaturesCard = () => {
  return (
    <CardContainer>
      <Text>Watchlist</Text>
      <Text>Last Seen</Text>
      <Text>Message / Products Discussion</Text>
      <Text>Review</Text>
    </CardContainer>
  );
};
