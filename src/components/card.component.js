import React from "react";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  border-radius: 9px;
  margin-bottom: 10px;
  background-color: white;
  flex-direction: ${({ horizontal }) => (horizontal ? "row" : "column")};
`;

export const CardHeader = styled.View`
  height: 40px;
  justify-content: center;
  padding-left: 10px;
`;

export const Card = ({ horizontal, children }) => {
  return <Wrapper horizontal={horizontal}>{children}</Wrapper>;
};

Card.defaultProps = {
  horizontal: false,
};
