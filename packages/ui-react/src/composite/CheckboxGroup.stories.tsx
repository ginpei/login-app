import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { InputField } from "../pure/InputField";
import { CheckboxGroup, useCheckboxGroupChange } from "./CheckboxGroup";

export default {
  title: "Composite/CheckboxGroup",
  component: CheckboxGroup,
} as ComponentMeta<typeof CheckboxGroup>;

export const Basic: ComponentStory<typeof CheckboxGroup> = (props) => {
  const [selected, onSelectChange] = useCheckboxGroupChange(props.selected);

  return (
    <>
      <InputField as="div" label="Checkbox Group">
        <CheckboxGroup
          {...props}
          selected={selected}
          onChange={onSelectChange}
        />
      </InputField>
      <p>
        <small>Selected: {selected.join(", ") || "(none)"}</small>
      </p>
    </>
  );
};

Basic.args = {
  selected: ["item-1"],
  name: "example",
  options: [
    { label: "Item 1", value: "item-1" },
    { label: "Item 2", value: "item-2" },
    { disabled: true, label: "Item 3", value: "item-3" },
  ],
};

export const CustomWrappers: ComponentStory<typeof CheckboxGroup> = (props) => {
  const [selected, onSelectChange] = useCheckboxGroupChange(props.selected);

  return (
    <CheckboxGroup {...props} selected={selected} onChange={onSelectChange} />
  );
};

CustomWrappers.args = {
  selected: ["item-1"],
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
