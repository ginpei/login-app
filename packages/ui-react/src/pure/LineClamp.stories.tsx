import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LineClamp } from "./LineClamp";

export default {
  title: "Pure/LineClamp",
  component: LineClamp,
} as ComponentMeta<typeof LineClamp>;

export const Basic: ComponentStory<typeof LineClamp> = (props) => (
  <LineClamp {...props} />
);

Basic.args = {
  children:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam esse, a, obcaecati rem quasi sequi voluptate provident aliquid sed placeat maiores. Quod illo unde amet distinctio porro nam aliquam nemo. Cum nostrum sed id voluptatem eveniet labore officia laboriosam tenetur blanditiis cumque, suscipit, numquam aliquam! Aspernatur animi blanditiis, quo ex aperiam odit voluptates excepturi expedita libero consectetur praesentium doloremque aliquam. Voluptatem, facilis cumque. Rerum quisquam temporibus quidem laboriosam, quos explicabo aliquam labore optio nesciunt iusto, obcaecati, maiores praesentium? Voluptas enim quae atque! Sunt amet consequuntur cupiditate, rerum pariatur quia nesciunt. Quae dolores voluptatem adipisci culpa incidunt? Sapiente non explicabo et voluptatum repudiandae, quis nemo, quod aperiam totam reiciendis a aspernatur ab voluptate recusandae voluptatem magnam natus? Aut porro minus esse? Veniam tempora sit aliquid recusandae debitis ad autem eveniet, nostrum distinctio tempore quos animi molestias totam excepturi delectus exercitationem eligendi odit voluptatibus sint quidem tenetur fuga. Blanditiis debitis ipsum eligendi!",
  lines: 3,
};
