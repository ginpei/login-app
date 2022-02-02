import { ComponentPropsWithRef } from "react";

export type NiceRadioProps = Omit<ComponentPropsWithRef<"input">, "type"> & {
  label: string;
};

export const NiceRadio: React.FC<NiceRadioProps> = ({
  label,
  ...inputProps
}) => {
  return (
    <label className="NiceRadio">
      <input {...inputProps} type="radio" />
      {label}
    </label>
  );
};
