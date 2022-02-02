import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LongTextField } from "./LongTextField";

export default {
  title: "Composite/LongTextField",
  component: LongTextField,
} as ComponentMeta<typeof LongTextField>;

export const Basic: ComponentStory<typeof LongTextField> = (props) => (
  <LongTextField {...props} />
);

Basic.args = {
  defaultValue: "Hello world!",
  disabled: false,
  label: "Text field",
  readOnly: false,
};
