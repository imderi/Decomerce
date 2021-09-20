import React from "react";
import styled from "styled-components/native";
import { CardContainer } from "../../../components/card-container.component";
import { ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Spacer } from "../../../components/spacer.component";

const Title = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: orange;
  margin-bottom: 10px;
`;

const ButtonText = styled.Text`
  font-size: 12px;
`;

const PromoButton = styled.TouchableOpacity`
  background-color: #fcf79a;
  margin-right: 10px;
  padding: 0px 10px 0px 10px;
  height: 30px;
  border-radius: 15px;
  border-width: 1px;
  border-color: orange;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const PROMODATA = [
  { title: "Free Shipping", icon: "truck-fast-outline" },
  { title: "Cheap AF", icon: "trophy-variant-outline" },
  { title: "Top 100", icon: "blur-radial" },
  { title: "All Promo", icon: "chart-bubble" },
];

export const HomeSpecializationCard = () => {
  return (
    <CardContainer>
      <Title>#BESTDEAL</Title>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {PROMODATA.map((item, index) => (
          <PromoButton key={item.icon + index}>
            <Spacer position="right" size="small">
              <MaterialCommunityIcons
                name={item.icon}
                size={20}
                color="black"
              />
            </Spacer>
            <ButtonText>{item.title}</ButtonText>
          </PromoButton>
        ))}
      </ScrollView>
    </CardContainer>
  );
};
