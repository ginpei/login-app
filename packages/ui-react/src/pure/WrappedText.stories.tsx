import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { WrappedText } from "./WrappedText";

export default {
  title: "Pure/WrappedText",
  component: WrappedText,
} as ComponentMeta<typeof WrappedText>;

export const Basic: ComponentStory<typeof WrappedText> = (props) => (
  <WrappedText {...props} />
);

Basic.args = {
  children: `    ← 4 spaces.

4 spaces →    ← 4 spaces.

↓ an empty line

↑ an empty line
↓ 2 empty lines


↑ 2 empty lines

Long words like SupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidocious get wrapped.

Supercalifragilisticexpialidocious-SupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidociousSupercalifragilisticexpialidocious

Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illum debitis ex, voluptatibus quo voluptate consequatur libero, minus obcaecati velit quas alias non corrupti exercitationem possimus quod repellendus veritatis veniam.

Itaque aut veniam nesciunt ut id! Ducimus non quod harum, numquam voluptatem debitis architecto pariatur ut praesentium error rem dolore neque commodi adipisci laborum quae hic dolorem possimus impedit voluptates! Id, repudiandae. Animi sequi quidem sunt sint beatae eaque voluptatibus ab adipisci sapiente inventore exercitationem harum molestias possimus qui dolore enim expedita nam, modi, numquam consectetur ipsum asperiores unde maiores.

Officia atque excepturi maxime eveniet, veritatis impedit natus beatae molestias tenetur iste expedita dolor error earum voluptatem delectus quia cupiditate. Ipsum perferendis minima obcaecati itaque atque eaque voluptate sunt iure!

Facilis ipsam deserunt accusamus quas libero quibusdam, repudiandae itaque eveniet necessitatibus assumenda incidunt magni quae sunt sint! Dicta facilis inventore ratione cupiditate itaque reiciendis, nam earum qui corrupti quam vel. Doloribus consequatur repellat rerum esse harum officia aliquid nihil necessitatibus error natus eos similique non incidunt repellendus iure quibusdam eaque, quae placeat at odit eveniet. Iste, nemo doloribus. Itaque, laboriosam? Quas sed id distinctio, at velit doloremque necessitatibus adipisci libero maxime repellendus explicabo nemo? Magnam sequi consequatur qui aliquid, consequuntur reiciendis ipsam, iste numquam, soluta magni rerum. Aliquam, soluta itaque? Laborum aperiam minima repudiandae cum temporibus adipisci necessitatibus veritatis repellendus! Itaque eos deserunt praesentium quisquam dicta aspernatur, commodi magnam eligendi optio neque ullam quae ad necessitatibus asperiores dolorum, fugiat consequatur. Libero optio, sint officia ad modi sit, temporibus eos ipsum nisi dolore magni soluta. Aperiam facilis ea natus libero incidunt recusandae minus eveniet excepturi asperiores dicta, sed non, quaerat repellat?

Hic quisquam ad dolore soluta ullam ea nobis iste quia rerum quos numquam similique, illum ex, neque et sapiente tempora. Quod cupiditate explicabo aliquam assumenda a aspernatur numquam excepturi aliquid!

Done!  `,
};
