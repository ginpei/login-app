import { ComponentPropsWithRef } from "react";

export type NiceCheckboxProps = Omit<ComponentPropsWithRef<"input">, "type"> & {
  label: string;
};

export const NiceCheckbox: React.FC<NiceCheckboxProps> = ({
  label,
  ...inputProps
}) => {
  return (
    <label className="NiceCheckbox">
      <input {...inputProps} type="checkbox" />
      {label}
    </label>
  );
};
