import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { ChangeEventHandler, useState } from "react";
import { NiceCheckbox } from "./NiceCheckbox";

export default {
  title: "Primitive/NiceCheckbox",
  component: NiceCheckbox,
} as ComponentMeta<typeof NiceCheckbox>;

export const Basic: ComponentStory<typeof NiceCheckbox> = (props) => {
  const radioName = "nice-radio-name";
  const values = ["apple", "banana", "cherry"] as const;

  const [selected, setSelected] = useState<
    Record<typeof values[number], boolean>
  >({ apple: true, banana: false, cherry: false });
  const onSelectChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { checked, value } = event.currentTarget;
    setSelected({ ...selected, [value]: checked });
  };

  return (
    <>
      <div style={{ display: "flex", gap: "1rem" }}>
        {values.map((v) => (
          <NiceCheckbox
            checked={selected[v]}
            disabled={props.disabled}
            key={v}
            label={v}
            name={radioName}
            onChange={onSelectChange}
            value={v}
          />
        ))}
      </div>
      <p>
        <small>
          {" "}
          Selected:{" "}
          {Object.keys(selected)
            .filter((v) => selected[v as typeof values[number]])
            .join(", ")}{" "}
        </small>
      </p>
    </>
  );
};

Basic.args = {
  disabled: false,
};
