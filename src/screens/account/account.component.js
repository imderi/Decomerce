import React from "react";
import styled from "styled-components/native";
import { RoundContainer } from "../../components/round-container.component";

const Text = styled.Text`
  font-size: 16px;
  text-align: center;
`;

export const LoginCard = () => {
  return (
    <RoundContainer>
      <Text>Bergabunglah dengan Decommerce</Text>
    </RoundContainer>
  );
};
