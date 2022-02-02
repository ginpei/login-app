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
          border-ginpen hover:border-neutral-500 disabled:border-gray-300
          bg-ginpen disabled:bg-gray-200
          text-white disabled:text-gray-500
        `}
        props={props}
      />
    );
  }

  return (
    <InnerButton
      className={`
        border-ginpen hover:border-current active:border-current disabled:border-gray-300
        focus:bg-blue-100
        text-ginpen hover:text-red-700 active:text-red-400 disabled:text-gray-500
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
