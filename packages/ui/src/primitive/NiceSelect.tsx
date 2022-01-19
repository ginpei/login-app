import React, { ComponentPropsWithRef } from "react";

export type NiceSelectProps = ComponentPropsWithRef<"select">;

export const NiceSelect: React.VFC<NiceSelectProps> = ({
  className,
  ...selectProps
}) => {
  return (
    <select
      className={`NiceSelect ${className} border border-black px-4 py-2`}
      {...selectProps}
    />
  );
};
