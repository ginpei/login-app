import React, { ComponentPropsWithRef } from "react";

export type WrappedTextProps = ComponentPropsWithRef<"div">;

export const WrappedText: React.FC<WrappedTextProps> = ({ children }) => {
  return (
    <div className="WrappedText whitespace-pre-wrap break-words">
      {children}
    </div>
  );
};
