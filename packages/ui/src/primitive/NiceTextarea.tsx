import React, { ComponentPropsWithRef } from "react";

export type NiceTextareaProps = ComponentPropsWithRef<"textarea">;

export const NiceTextarea: React.VFC<NiceTextareaProps> = ({
  className,
  ...inputProps
}) => {
  return (
    <textarea
      className={`NiceTextarea ${className} border border-black px-4 py-2`}
      {...inputProps}
    />
  );
};
