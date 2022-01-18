import React from "react";

export interface BasicNavBarProps {
  primary: JSX.Element | null;
  secondary: JSX.Element | null;
}

export function BasicNavBar({
  primary,
  secondary,
}: BasicNavBarProps): JSX.Element {
  return (
    <div className="bg-ginpen text-white ">
      <div className="container h-8 leading-8 mx-auto px-4 flex justify-between">
        {primary}
        {secondary}
      </div>
    </div>
  );
}
