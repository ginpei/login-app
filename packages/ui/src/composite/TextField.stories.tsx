import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextField } from "./TextField";

export default {
  title: "Composite/TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>;

export const Basic: ComponentStory<typeof TextField> = (props) => (
  <TextField {...props} />
);

Basic.args = {
  defaultValue: "Hello world!",
  disabled: false,
  label: "Text field",
  readOnly: false,
  type: "text",
};
