import React, { ComponentPropsWithRef } from "react";

export type NiceButtonProps = ComponentPropsWithRef<"button">;

export const NiceButton: React.FC<NiceButtonProps> = ({
  className = "",
  ...props
}) => {
  return (
    <button
      className={`${className} border-2 border-ginpen text-ginpen px-4 py-2`}
      {...props}
    />
  );
};
