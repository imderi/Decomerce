import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// ROUTES
import { TabNavigator } from "./tab.navigator";

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tab Navigator" component={TabNavigator} />
    </Stack.Navigator>
  );
};
