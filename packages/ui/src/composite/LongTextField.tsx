import React, { ComponentPropsWithRef } from "react";
import { NiceTextarea } from "../primitive/NiceTextarea";

export interface LongTextFieldProps extends ComponentPropsWithRef<"textarea"> {
  label: string;
}

export const LongTextField: React.FC<LongTextFieldProps> = ({
  label,
  className,
  ...inputProps
}) => {
  return (
    <label className={`LongTextField flex flex-col ${className}`}>
      <span>{label}</span>
      <NiceTextarea {...inputProps} />
    </label>
  );
};
