import React from "react";
import styled from "styled-components/native";

const BannerImage = styled.Image`
  width: 100%;
  height: 220px;
`;

const BannerContainer = styled.TouchableOpacity``;

export const HomeAdsBanner = () => {
  return (
    <BannerContainer>
      <BannerImage source={require("../../../../assets/banner.jpeg")} />
    </BannerContainer>
  );
};
