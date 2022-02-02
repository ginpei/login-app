import React from "react";
import { NiceHeading } from "../primitive/NiceHeading";

export interface ErrorBoxProps {
  errors: Error[];
  title?: string;
}

export const ErrorBox: React.FC<ErrorBoxProps> = ({ errors, title }) => {
  if (errors.length < 1) {
    return null;
  }

  return (
    <section className="flex flex-col gap-4 border border-red-500 p-2 text-red-900">
      <div>
        <NiceHeading>{title || "Error"}</NiceHeading>
      </div>
      <ul className="flex flex-col gap-4">
        {errors.map((error) => (
          <li key={error.message}>{error.message}</li>
        ))}
      </ul>
    </section>
  );
};
