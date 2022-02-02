import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NiceSelect } from "./NiceSelect";

export default {
  title: "Primitive/NiceSelect",
  component: NiceSelect,
} as ComponentMeta<typeof NiceSelect>;

export const Basic: ComponentStory<typeof NiceSelect> = (props) => (
  <NiceSelect {...props}>
    <option value="item1">Item 1</option>
    <option value="item2">Item 2</option>
    <option value="item3">Item 3</option>
  </NiceSelect>
);

Basic.args = {
  defaultValue: "Nice text input",
  disabled: false,
};
