import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./main.navigator";

// NAVIGATION TREE * not finished
// index.js
// ├── main.navigator.js
// │   └── tab.navigator.js
// │       ├── account.navigator.js
// │       │   ├── AccountScreen
// │       │   ├── LoginScreen
// │       │   └── RegisterScreen
// │       ├── transaction.navigation.js
// │       ├── cart.navigation.js
// │       ├── category.navigation.js
// │       └── home.navigator.js
// ├── products.navigator.js
// ├── other.navigator.js

export const Navigation = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};
