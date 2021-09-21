import React from "react";
import styled from "styled-components/native";
import { Card } from "../../../components/card.component";
import { Spacer } from "../../../components/spacer.component";
import { Ionicons } from "@expo/vector-icons";

const TextInfo = styled.Text`
  flex-shrink: 1;
  font-size: 12px;
  align-self: center;
`;

export const HomeInfoCard = () => {
  return (
    <Spacer position="top" size="large">
      <Card horizontal={true}>
        <Spacer position="right" size="small">
          <Ionicons
            name="information-circle-outline"
            size={32}
            color="orange"
          />
        </Spacer>
        <TextInfo>
          Due to COVID-19 pandemic, delivery may be a bit longer than normal
        </TextInfo>
      </Card>
    </Spacer>
  );
};
