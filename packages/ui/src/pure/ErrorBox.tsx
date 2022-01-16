import React from "react";
import { NiceHeading } from "../primitive/NiceHeading";

export interface ErrorBoxProps {
  errors: Error[];
  title?: string;
}

export const ErrorBox: React.FC<ErrorBoxProps> = ({
  errors,
  title = "Error",
}) => {
  if (errors.length < 1) {
    return null;
  }

  return (
    <section className="flex flex-col gap-4 border border-red-500 p-2 text-red-900">
      <div>
        <NiceHeading>{title}</NiceHeading>
      </div>
      <ul className="flex flex-col gap-4">
        {errors.map((error) => (
          <li>{error.message}</li>
        ))}
      </ul>
    </section>
  );
};
