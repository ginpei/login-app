import React, { ComponentPropsWithRef } from "react";

export type NiceButtonProps = ComponentPropsWithRef<"button">;

export const NiceButton: React.FC<NiceButtonProps> = ({
  className = "",
  ...props
}) => {
  return (
    <button
      className={`
        ${className}
        focus:bg-blue-100
        border-2 border-ginpen hover:border-current active:border-current
        px-4 py-2
        text-ginpen hover:text-red-700 active:text-red-400
      `}
      {...props}
    />
  );
};
