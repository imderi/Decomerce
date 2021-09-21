import React from "react";
import { SafeArea } from "../../components/safe-area.component";
import { Text } from "react-native";
import { NoTransaction } from "./components/no-transaction.component";

export const TransactionScreen = () => {
  return (
    <SafeArea>
      <Text>Transaction Screen</Text>
      <NoTransaction />
    </SafeArea>
  );
};
