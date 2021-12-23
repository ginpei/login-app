import React, { ReactNode } from "react";

export interface BasicLayoutProps {
  children: ReactNode;
  title: string;
}

export function BasicLayout(props: BasicLayoutProps): JSX.Element {
  return (
    <div>
      <BasicNavBar />
      <main className="container mx-auto px-4">{props.children}</main>
    </div>
  );
}

export function BasicNavBar(): JSX.Element {
  return (
    <div className="bg-ginpen text-white">
      <div className="container mx-auto px-4">Hello</div>
    </div>
  );
}
