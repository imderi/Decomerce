import React from "react";
import styled from "styled-components/native";

const Wrapper = styled.View`
  border-radius: 9px;
  padding: 12px;
  margin: 0px 12px 12px 12px;
  background-color: white;
`;

export const RoundContainer = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
