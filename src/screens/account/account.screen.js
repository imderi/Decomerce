import React from "react";
import { SafeArea } from "../../components/safe-area.component";
import { Text } from "react-native";

import { LoginCard } from "./account.component";

export const AccountScreen = () => {
  return (
    <SafeArea>
      <LoginCard />
    </SafeArea>
  );
};
