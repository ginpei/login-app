import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HStack } from "./HStack";
import { NiceButton } from "../primitive/NiceButton";
import { NiceHeading } from "../primitive/NiceHeading";

export default {
  title: "Pure/HStack",
  component: HStack,
} as ComponentMeta<typeof HStack>;

export const Basic: ComponentStory<typeof HStack> = (props) => (
  <HStack {...props}>
    <NiceHeading>HStack</NiceHeading>
    <small>and here is a small text</small>
    <NiceButton>Button 1</NiceButton>
    <NiceButton>Button 2</NiceButton>
    <NiceButton>Button 3</NiceButton>
    <NiceButton>Button 4</NiceButton>
    <NiceButton>Button 5</NiceButton>
    <NiceButton>Button 6</NiceButton>
    <NiceButton>Button 7</NiceButton>
    <NiceButton>Button 8</NiceButton>
    <NiceButton>Button 9</NiceButton>
    <NiceButton>Button 10</NiceButton>
  </HStack>
);

Basic.args = {
  wrap: true,
};
