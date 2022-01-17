import React, { ComponentPropsWithRef } from "react";

export interface LineClampProps extends ComponentPropsWithRef<"div"> {
  lines: number;
}

export const LineClamp: React.FC<LineClampProps> = ({ children, lines }) => {
  return (
    <div
      className="LineClamp"
      style={{
        display: "-webkit-box",
        overflow: "hidden",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: lines,
      }}
    >
      {children}
    </div>
  );
};
