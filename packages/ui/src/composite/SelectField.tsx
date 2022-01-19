import React, { ComponentPropsWithRef } from "react";
import { NiceSelect } from "../primitive/NiceSelect";

export interface SelectFieldProps extends ComponentPropsWithRef<"select"> {
  label: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  className,
  ...inputProps
}) => {
  return (
    <label className={`SelectField flex flex-col ${className}`}>
      <span>{label}</span>
      <NiceSelect {...inputProps} />
    </label>
  );
};
