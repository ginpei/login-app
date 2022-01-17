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
      <div className="container mx-auto px-4 py-2 flex justify-between">
        {primary}
        {secondary}
      </div>
    </div>
  );
}
