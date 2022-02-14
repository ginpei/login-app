import React, { ComponentPropsWithRef } from "react";
import { NiceTextarea } from "../primitive/NiceTextarea";
import { InputField } from "../pure/InputField";

export interface LongTextFieldProps extends ComponentPropsWithRef<"textarea"> {
  label: string;
}

export const LongTextField: React.FC<LongTextFieldProps> = ({
  label,
  className = "",
  ...inputProps
}) => {
  return (
    <InputField className={`${className} LongTextField`} label={label}>
      <NiceTextarea {...inputProps} />
    </InputField>
  );
};
