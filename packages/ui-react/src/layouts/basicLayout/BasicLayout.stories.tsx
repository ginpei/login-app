import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BasicLayout } from "./BasicLayout";
import { NiceHeading } from "../../primitive/NiceHeading";
import { VStack } from "../../pure/VStack";

export default {
  title: "Layouts/BasicLayout",
  component: BasicLayout,
} as ComponentMeta<typeof BasicLayout>;

export const Basic: ComponentStory<typeof BasicLayout> = (props) => (
  <BasicLayout
    navPrimary={
      <a
        className="text-current no-underline hover:text-current hover:underline"
        href="/"
      >
        Primary navigation
      </a>
    }
    navSecondary={<>Secondary navigation</>}
    title={props.title}
  >
    <VStack>
      <NiceHeading>Content</NiceHeading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        molestias commodi, id tempore neque harum, nostrum alias debitis
        repellat esse quaerat eveniet sunt. Eos repudiandae possimus cum
        delectus, magni itaque.
      </p>
    </VStack>
  </BasicLayout>
);

Basic.args = {
  title: "Basic Layout",
};
