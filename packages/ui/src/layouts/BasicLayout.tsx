import React, { ReactNode } from "react";
import { VStack } from "../pure/VStack";
import { BasicNavBar } from "./BasicNavBar";

export interface BasicLayoutProps {
  children: ReactNode;
  title: string;
}

export function BasicLayout(props: BasicLayoutProps): JSX.Element {
  return (
    <VStack>
      <BasicNavBar />
      <main className="container mx-auto px-4">{props.children}</main>
    </VStack>
  );
}
