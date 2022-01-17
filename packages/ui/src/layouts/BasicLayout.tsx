import React, { ReactNode } from "react";
import { VStack } from "../pure/VStack";
import { BasicNavBar, BasicNavBarProps } from "./BasicNavBar";

export interface BasicLayoutProps {
  children: ReactNode;
  navPrimary: BasicNavBarProps["primary"];
  navSecondary: BasicNavBarProps["secondary"];
  title: string;
}

export function BasicLayout(props: BasicLayoutProps): JSX.Element {
  return (
    <VStack>
      <BasicNavBar primary={props.navPrimary} secondary={props.navSecondary} />
      <main className="container mx-auto px-4">{props.children}</main>
    </VStack>
  );
}
