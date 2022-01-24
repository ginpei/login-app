import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { WrappedText } from "./WrappedText";

export default {
  title: "Pure/WrappedText",
  component: WrappedText,
} as ComponentMeta<typeof WrappedText>;

export const Basic: ComponentStory<typeof WrappedText> = (props) => (
  <WrappedText {...props}>
    <h1 className="text-3xl">WrappedText</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione odit
      magnam, nostrum repellendus expedita, magni animi vel saepe modi
      voluptate, repudiandae blanditiis at libero rem quam molestias nesciunt.
      Mollitia, quidem.
    </p>
    <p>
      Quo, beatae, cum quia omnis non dolores ipsa accusamus repudiandae iure
      perferendis quos earum recusandae illum natus officiis minima. Quae sint
      magnam sequi mollitia molestias facere quia eos expedita doloribus.
    </p>
    <p>
      Quibusdam eaque aliquam, id minus laudantium cum fugiat. Quas quo
      inventore ipsam placeat architecto labore, reiciendis maiores quod dolor?
      Beatae officiis corrupti ratione fuga totam magni soluta. Ab, inventore
      aliquam?
    </p>
  </WrappedText>
);

Basic.args = {};
