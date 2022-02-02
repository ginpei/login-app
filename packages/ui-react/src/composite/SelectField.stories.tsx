import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SelectField } from "./SelectField";

export default {
  title: "Composite/SelectField",
  component: SelectField,
} as ComponentMeta<typeof SelectField>;

export const Basic: ComponentStory<typeof SelectField> = (props) => (
  <SelectField {...props}>
    <option value="item1">Item 1</option>
    <option value="item2">Item 2</option>
    <option value="item3">Item 3</option>
  </SelectField>
);

Basic.args = {
  disabled: false,
  label: "Select field",
};
