import React from "react";
import { Text } from "react-native-paper";
import { Spacer } from "../../../components/spacer.component";
import { RoundContainer } from "../../../components/round-container.component";
import {
  ButtonContainer,
  OutlinedButton,
  ContainedButton,
} from "../../../components/button.component";
import { useNavigation } from "@react-navigation/core";

export const AccountAuthCard = () => {
  const { navigate } = useNavigation();
  return (
    <Spacer position="top" size="large">
      <RoundContainer>
        <Text>Come join us and get the best prices goods</Text>
        <ButtonContainer>
          <OutlinedButton onPress={() => navigate("LoginScreen")}>
            Login
          </OutlinedButton>
          <ContainedButton
            mode="contained"
            onPress={() => navigate("RegisterScreen")}
          >
            Register
          </ContainedButton>
        </ButtonContainer>
      </RoundContainer>
    </Spacer>
  );
};
