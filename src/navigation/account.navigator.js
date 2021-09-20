import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// SCREENS
import { AccountScreen } from "../screens/account/account.screen";
import { LoginScreen } from "../screens/account/login.screen";
import { RegisterScreen } from "../screens/account/register.screen";

const Stack = createNativeStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountScreen"
        options={{ title: "Account" }}
        component={AccountScreen}
      />
      <Stack.Screen
        name="LoginScreen"
        options={{ title: "Login" }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="RegisterScreen"
        options={{ title: "Register" }}
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};
