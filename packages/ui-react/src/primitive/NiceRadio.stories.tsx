import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { ChangeEventHandler, useState } from "react";
import { HStack } from "../pure/HStack";
import { NiceRadio } from "./NiceRadio";

export default {
  title: "Primitive/NiceRadio",
  component: NiceRadio,
} as ComponentMeta<typeof NiceRadio>;

export const Basic: ComponentStory<typeof NiceRadio> = (props) => {
  const radioName = "nice-radio-name";
  const values = ["apple", "banana", "cherry"] as const;

  const [selected, setSelected] = useState<typeof values[number]>(values[0]);
  const onSelectChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.currentTarget;
    setSelected(value as typeof values[number]);
  };

  return (
    <>
      <HStack>
        {values.map((v) => (
          <NiceRadio
            checked={v === selected}
            disabled={props.disabled}
            key={v}
            label={v}
            name={radioName}
            onChange={onSelectChange}
            value={v}
          />
        ))}
      </HStack>
      <p>
        <small>Selected: {selected}</small>
      </p>
    </>
  );
};

Basic.args = {
  disabled: false,
};
