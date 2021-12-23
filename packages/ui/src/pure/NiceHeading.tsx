import React, { ComponentPropsWithRef } from "react";

export type NiceHeadingProps = ComponentPropsWithRef<"h1">;

export const NiceHeading: React.FC<NiceHeadingProps> = ({
  className = "",
  ...props
}) => {
  const TagName = "h1";
  return <TagName className={`${className} text-3xl font-bold`} {...props} />;
};
