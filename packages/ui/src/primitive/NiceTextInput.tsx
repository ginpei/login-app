import React, { ComponentPropsWithRef } from "react";

export type NiceTextInputProps = ComponentPropsWithRef<"input">;

export const NiceTextInput: React.VFC<NiceTextInputProps> = ({
  className,
  ...inputProps
}) => {
  return (
    <input
      className={`NiceTextInput ${className} border border-black px-4 py-2`}
      {...inputProps}
    />
  );
};
