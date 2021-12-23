import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NiceHeading } from "./NiceHeading";

export default {
  title: "Pure/NiceHeading",
  component: NiceHeading,
} as ComponentMeta<typeof NiceHeading>;

export const Basic: ComponentStory<typeof NiceHeading> = (props) => (
  <NiceHeading {...props} />
);

Basic.args = {
  children: "Nice Heading",
};
