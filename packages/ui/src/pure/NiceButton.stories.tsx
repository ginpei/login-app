import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NiceButton } from "./NiceButton";

export default {
  title: "Pure/NiceButton",
  component: NiceButton,
} as ComponentMeta<typeof NiceButton>;

export const Basic: ComponentStory<typeof NiceButton> = (props) => (
  <>
    <NiceButton {...props} /> <NiceButton {...props} />
  </>
);

Basic.args = {
  children: "Nice Button",
};
