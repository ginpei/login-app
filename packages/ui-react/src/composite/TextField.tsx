import React, { ComponentPropsWithRef } from "react";
import { NiceTextInput } from "../primitive/NiceTextInput";
import { InputField } from "../pure/InputField";

export interface TextFieldProps extends ComponentPropsWithRef<"input"> {
  label: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  className = "",
  ...inputProps
}) => {
  return (
    <InputField className={`${className} TextField`} label={label}>
      <NiceTextInput {...inputProps} />
    </InputField>
  );
};
