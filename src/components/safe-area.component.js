import styled from "styled-components/native";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${Platform.OS === "android" &&
  StatusBar.currentHeight &&
  `margin-top: ${StatusBar.currentHeight}px`}
`;
