import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const SearchContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-grow: 1;
`;

const Search = styled(Searchbar)`
  flex: 1;
  margin: 15px;
`;

export const HomeSearchBar = () => {
  return (
    <SearchContainer>
      <Search />
      <Ionicons name="heart-outline" size={24} color="black" />
    </SearchContainer>
  );
};
