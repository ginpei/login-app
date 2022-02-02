import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NiceTextInput } from "./NiceTextInput";

export default {
  title: "Primitive/NiceTextInput",
  component: NiceTextInput,
} as ComponentMeta<typeof NiceTextInput>;

export const Basic: ComponentStory<typeof NiceTextInput> = (props) => (
  <>
    <NiceTextInput {...props} /> <NiceTextInput {...props} />
  </>
);

Basic.args = {
  defaultValue: "Nice text input",
  disabled: false,
  readOnly: false,
  type: "text",
};
