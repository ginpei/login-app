import React, { ComponentPropsWithRef } from "react";
import { NiceTextInput } from "../primitive/NiceTextInput";

export interface TextFieldProps extends ComponentPropsWithRef<"input"> {
  label: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  className,
  ...inputProps
}) => {
  return (
    <label className={`TextField flex flex-col ${className}`}>
      <span>{label}</span>
      <NiceTextInput {...inputProps} />
    </label>
  );
};
