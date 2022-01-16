import React, { ComponentPropsWithRef } from "react";

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
      <input className="border border-black" {...inputProps} />
    </label>
  );
};
