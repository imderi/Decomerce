import React from "react";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/safe-area.component";
import { Ionicons } from "@expo/vector-icons";

const SearchSafeArea = styled(SafeArea)`
  background-color: black;
`;

const ItemWrapper = styled.View`
  flex-direction: row;
  background-color: black;
  padding: 10px;
`;

const AppIcon = styled.View`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const SearchBarButton = styled.TouchableOpacity`
  flex: 1;
  height: 40px;
  border-radius: 5px;
  background-color: white;
  justify-content: center;
`;

const SearchPlaceholder = styled.Text`
  color: grey;
  font-size: 16px;
  margin-left: 12px;
`;

export const HomeSearchBar = () => {
  return (
    <>
      <SearchSafeArea />
      <ItemWrapper>
        <AppIcon>
          <Ionicons name="md-logo-react" size={40} color="white" />
        </AppIcon>
        <SearchBarButton>
          <SearchPlaceholder>Search something...</SearchPlaceholder>
        </SearchBarButton>
      </ItemWrapper>
    </>
  );
};
