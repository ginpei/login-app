import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NiceTextarea } from "./NiceTextarea";

export default {
  title: "Primitive/NiceTextarea",
  component: NiceTextarea,
} as ComponentMeta<typeof NiceTextarea>;

export const Basic: ComponentStory<typeof NiceTextarea> = (props) => (
  <>
    <NiceTextarea {...props} /> <NiceTextarea {...props} />
  </>
);

Basic.args = {
  defaultValue: "Nice text input",
  disabled: false,
  readOnly: false,
};
