import React from "react";
import { AntDesign } from "@expo/vector-icons";

// NAVIGATION
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// OTHERS NAVIGATOR *NOT YET IMPLEMENTED
import { AccountNavigator } from "./account.navigator";

// SCREENS *TEMPORARY
import { HomeScreen } from "../screens/home/home.screen";
import { CategoryScreen } from "../screens/category/category.screen";
import { CartScreen } from "../screens/cart/cart.screen";
import { TransactionScreen } from "../screens/transaction/transaction.screen";

// NAVIGATION - TAB
const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "HomeStacks") {
            iconName = "home";
          } else if (route.name === "CategoryStacks") {
            iconName = "appstore-o";
          } else if (route.name === "CartStacks") {
            iconName = "shoppingcart";
          } else if (route.name === "TransactionStacks") {
            iconName = "profile";
          } else if (route.name === "AccountNavigator") {
            iconName = "user";
          }

          return <AntDesign name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="HomeStacks"
        options={{ title: "Home" }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="CategoryStacks"
        options={{ title: "Category" }}
        component={CategoryScreen}
      />
      <Tab.Screen
        name="CartStacks"
        options={{ title: "Cart" }}
        component={CartScreen}
      />
      <Tab.Screen
        name="TransactionStacks"
        options={{ title: "Transaction" }}
        component={TransactionScreen}
      />
      <Tab.Screen
        name="AccountNavigator"
        options={{ title: "Account" }}
        component={AccountNavigator}
      />
    </Tab.Navigator>
  );
};
