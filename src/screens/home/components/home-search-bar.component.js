import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const SafeSearchContainer = styled.SafeAreaView`
  background-color: black;
`;

const FavoriteButton = styled.View`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const ItemWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const SearchBarButton = styled.TouchableOpacity`
  flex: 1;
  height: 40px;
  border-radius: 5px;
  background-color: white;
`;

export const HomeSearchBar = () => {
  return (
    <SafeSearchContainer>
      <ItemWrapper>
        <FavoriteButton>
          <Ionicons name="md-logo-react" size={40} color="white" />
        </FavoriteButton>
        <SearchBarButton />
      </ItemWrapper>
    </SafeSearchContainer>
  );
};
