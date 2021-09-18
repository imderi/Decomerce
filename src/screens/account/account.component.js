import React from "react";
import styled from "styled-components/native";
import { RoundContainer } from "../../components/round-container.component";
import { Text, Button } from "react-native-paper";

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  flex: 1;
  margin: 6px;
`;

export const LoginCard = () => {
  return (
    <RoundContainer>
      <Text>Come join us and get the best prices goods</Text>
      <ButtonContainer>
        <StyledButton mode="outlined">Login</StyledButton>
        <StyledButton mode="contained">Register</StyledButton>
      </ButtonContainer>
    </RoundContainer>
  );
};

export const UserFeaturesList = () => {
  return (
    <RoundContainer>
      <Text>Watchlist</Text>
      <Text>Last Seen</Text>
      <Text>Message / Products Discussion</Text>
      <Text>Review</Text>
    </RoundContainer>
  );
};

export const SupportCenterCard = () => {
  return (
    <RoundContainer>
      <Text>Help Center</Text>
      <Text>Your solution here</Text>
    </RoundContainer>
  );
};
