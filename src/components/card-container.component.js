import React from "react";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  border-radius: 9px;
  padding: 12px;
  margin: 0px 12px 12px 12px;
  background-color: white;
  flex-direction: ${({ horizontal }) => (horizontal ? "row" : "column")};
`;

export const CardContainer = ({ horizontal, children }) => {
  return <Wrapper horizontal={horizontal}>{children}</Wrapper>;
};

CardContainer.defaultProps = {
  horizontal: false,
};
