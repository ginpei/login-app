import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { RadioGroup, useRadioGroupChange } from "./RadioGroup";

export default {
  title: "Composite/RadioGroup",
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

export const Basic: ComponentStory<typeof RadioGroup> = (props) => {
  const [selected, onChange] = useRadioGroupChange(props.selected);

  return (
    <>
      <RadioGroup {...props} selected={selected} onChange={onChange} />
      <p>
        <small>Selected: {selected}</small>
      </p>
    </>
  );
};

Basic.args = {
  selected: "item-1",
  name: "example",
  options: [
    { label: "Item 1", value: "item-1" },
    { label: "Item 2", value: "item-2" },
    { disabled: true, label: "Item 3", value: "item-3" },
  ],
};

export const CustomWrappers: ComponentStory<typeof RadioGroup> = (props) => {
  const [selected, onChange] = useRadioGroupChange(props.selected);

  return <RadioGroup {...props} selected={selected} onChange={onChange} />;
};

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
