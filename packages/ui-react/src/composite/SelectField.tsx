import React, { ComponentPropsWithRef } from "react";
import { NiceSelect } from "../primitive/NiceSelect";
import { InputField } from "../pure/InputField";

export interface SelectFieldProps extends ComponentPropsWithRef<"select"> {
  label: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  className = "",
  ...inputProps
}) => {
  return (
    <InputField className={`${className} SelectField`} label={label}>
      <NiceSelect {...inputProps} />
    </InputField>
  );
};
