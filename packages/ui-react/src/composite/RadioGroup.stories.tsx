import React, { ChangeEventHandler, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RadioGroup } from "./RadioGroup";

export default {
  title: "Composite/RadioGroup",
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

export const Basic: ComponentStory<typeof RadioGroup> = (props) => {
  const [selected, setSelected] = useState(props.checked);
  const onSelectChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.currentTarget;
    setSelected(value);
  };

  return (
    <>
      <RadioGroup {...props} checked={selected} onChange={onSelectChange} />
      <p>
        <small>Selected: {selected}</small>
      </p>
    </>
  );
};

Basic.args = {
  checked: "item-1",
  name: "example",
  options: [
    { label: "Item 1", value: "item-1" },
    { label: "Item 2", value: "item-2" },
    { disabled: true, label: "Item 3", value: "item-3" },
  ],
};

export const CustomWrappers: ComponentStory<typeof RadioGroup> = (props) => (
  <RadioGroup {...props} />
);

CustomWrappers.args = {
  name: "example",
  options: [
    { label: "Item 1", value: "item-1" },
    { label: "Item 2", value: "item-2" },
    { label: "Item 3", value: "item-3" },
  ],
  itemWrapper: ({ children }) => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "3rem auto 3rem",
        margin: "4px",
      }}
    >
      🍣
      {children}
      🍡
    </div>
  ),
  listWrapper: ({ children }) => (
    <div style={{ border: "4px solid skyblue" }}>{children}</div>
  ),
};
