import styled from "styled-components/native";
import { Button } from "react-native-paper";

// if needed
export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const OutlinedButton = styled(Button).attrs((props) => ({
  mode: "outlined",
  uppercase: false,
  color: props.theme.colors.button.primary,
}))`
  flex: 1;
  margin: 6px;
`;

export const ContainedButton = styled(Button).attrs({
  mode: "contained",
  uppercase: false,
})`
  flex: 1;
  margin: 6px;
  background-color: ${(props) => props.theme.colors.button.primary};
`;
