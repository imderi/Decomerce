import styled from "styled-components";
import { Button } from "react-native-paper";

// if needed
export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const OutlinedButton = styled(Button).attrs({
  mode: "outlined",
  uppercase: false,
})`
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
