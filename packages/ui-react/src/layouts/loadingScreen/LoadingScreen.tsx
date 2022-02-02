import React from "react";
import { BasicLayout } from "../basicLayout/BasicLayout";

export interface LoadingScreenProps {
  title: string;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ title }) => {
  return (
    <BasicLayout navPrimary={null} navSecondary={null} title={title}>
      {""}
    </BasicLayout>
  );
};
