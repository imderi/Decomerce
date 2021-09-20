import { StatusBar } from "expo-status-bar";
import React from "react";
import { Navigation } from "./src/navigation";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
