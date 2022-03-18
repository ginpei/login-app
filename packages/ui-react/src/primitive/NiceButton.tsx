import React, { ComponentPropsWithRef } from "react";

export interface NiceButtonProps extends ComponentPropsWithRef<"button"> {
  primary?: boolean;
}

interface InnerButtonProps {
  className: string;
  props: NiceButtonProps;
}

export const NiceButton: React.FC<NiceButtonProps> = ({
  primary = false,
  ...props
}) => {
  if (primary) {
    return (
      <InnerButton
        className={`
          border-ginpen active:border-current hover:border-neutral-500 disabled:border-gray-300
          bg-ginpen hover:bg-cyan-900 disabled:bg-gray-200
          text-white disabled:text-gray-500
        `}
        props={props}
      />
    );
  }

  return (
    <InnerButton
      className={`
        border-ginpen active:border-cyan-700 hover:border-cyan-600 disabled:border-gray-300
        bg-white active:bg-cyan-50
        text-ginpen active:text-cyan-600 disabled:text-gray-500
      `}
      props={props}
    />
  );
};

function InnerButton(props: InnerButtonProps): JSX.Element {
  const { className: userClassName, ...buttonRestProps } = props.props;
  const themeClassName = props.className;
  const className = `${userClassName} ${themeClassName}`;

  return (
    <button
      className={`
        ${className}
        border-2
        px-4 py-2
      `}
      {...buttonRestProps}
    />
  );
}
