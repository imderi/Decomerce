import React from "react";
import { SafeArea } from "../../components/safe-area.component";

import {
  LoginCard,
  UserFeaturesList,
  SupportCenterCard,
} from "./account.component";

export const AccountScreen = () => {
  return (
    <SafeArea>
      <LoginCard />
      <UserFeaturesList />
      <SupportCenterCard />
    </SafeArea>
  );
};
