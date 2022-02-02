import React, { ComponentPropsWithRef } from "react";

export type VStackProps = ComponentPropsWithRef<"div">;

export const VStack: React.FC<VStackProps> = ({ className = "", ...props }) => {
  return <div className={`${className} flex flex-col gap-4`} {...props} />;
};
