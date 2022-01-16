import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ErrorBox } from "./ErrorBox";

export default {
  title: "Pure/ErrorBox",
  component: ErrorBox,
} as ComponentMeta<typeof ErrorBox>;

export const Basic: ComponentStory<typeof ErrorBox> = (props) => (
  <ErrorBox {...props} errors={[new Error("Something went wrong")]} />
);

Basic.args = {
  title: "",
};
