import React, { ReactNode } from "react";
import { VStack } from "../pure/VStack";

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

export function BasicNavBar(): JSX.Element {
  return (
    <div className="bg-ginpen text-white">
      <div className="container mx-auto px-4">Hello</div>
    </div>
  );
}
