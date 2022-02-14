import React from "react";

export interface InputFieldProps {
  as?: "label" | "div";
  className?: string;
  label: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  as = "label",
  children,
  className = "",
  label,
}) => {
  const Wrapper = as;

  return (
    <Wrapper className={`${className} InputField flex flex-col`}>
      <span>{label}</span>
      {children}
    </Wrapper>
  );
};
