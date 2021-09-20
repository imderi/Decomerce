import React from "react";
import { SafeArea } from "../../components/safe-area.component";
import { ScrollView } from "react-native";
import { AccountAuthCard } from "./components/account-auth-card.component";
import { AccountFeaturesCard } from "./components/account-features-card.component";
import { AccountSupportCard } from "./components/account-support-card.component";

export const AccountScreen = () => {
  return (
    <SafeArea>
      <ScrollView>
        <AccountAuthCard />
        <AccountFeaturesCard />
        <AccountSupportCard />
      </ScrollView>
    </SafeArea>
  );
};
