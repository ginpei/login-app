import React, { ComponentPropsWithRef } from "react";

export type HStackProps = ComponentPropsWithRef<"div"> & {
  wrap?: boolean | "reverse";
};

export const HStack: React.FC<HStackProps> = ({
  className = "",
  wrap,
  ...props
}) => {
  const wrapClassName = getWrapClassName(wrap);
  const itemsClassName = className.includes("items-") ? "" : "items-baseline";
  const className2 = [className, wrapClassName, itemsClassName]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={`HStack ${className2} flex flex-row gap-4`} {...props} />
  );
};

function getWrapClassName(wrap: HStackProps["wrap"]): string {
  if (wrap === true) {
    return "flex-wrap";
  }

  if (wrap === "reverse") {
    return "flex-wrap-reverse";
  }

  return "";
}
