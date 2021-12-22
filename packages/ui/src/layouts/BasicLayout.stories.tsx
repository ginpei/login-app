import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BasicLayout } from "./BasicLayout";

export default {
  title: "Layouts/BasicLayout",
  component: BasicLayout,
} as ComponentMeta<typeof BasicLayout>;

export const Basic: ComponentStory<typeof BasicLayout> = (props) => (
  <BasicLayout title={props.title}>
    <h1>Content</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
      molestias commodi, id tempore neque harum, nostrum alias debitis repellat
      esse quaerat eveniet sunt. Eos repudiandae possimus cum delectus, magni
      itaque.
    </p>
  </BasicLayout>
);

Basic.args = {
  title: "Basic Layout",
};
