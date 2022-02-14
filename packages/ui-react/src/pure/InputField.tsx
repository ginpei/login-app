import React from "react";

export interface InputFieldProps {
  className?: string;
  label: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  children,
  className = "",
  label,
}) => {
  return (
    <label className={`${className} InputField flex flex-col`}>
      <span>{label}</span>
      {children}
    </label>
  );
};
