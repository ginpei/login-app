import { ComponentPropsWithRef, ReactNode } from "react";
import { NiceCheckbox } from "../primitive/NiceCheckbox";
import { HStack } from "../pure/HStack";

export type ItemWrapper = (props: { children: ReactNode }) => JSX.Element;

type BasicInputProps = Omit<
  ComponentPropsWithRef<"input">,
  "checked" | "label" | "type" | "value"
>;

export interface CheckboxGroupProps<T extends string = string>
  extends BasicInputProps {
  selected: T[];
  itemWrapper?: ItemWrapper;
  listWrapper?: ItemWrapper;
  name: NonNullable<ComponentPropsWithRef<"input">["name"]>;
  options: (BasicInputProps & {
    label: string;
    value: T;
  })[];
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  selected: checked,
  itemWrapper,
  listWrapper,
  options,
  ...inputProps
}) => {
  const ListWrapper = listWrapper ?? DefaultListWrapper;
  const ItemWrapper = itemWrapper ?? DefaultItemWrapper;

  return (
    <div className="CheckboxGroup">
      <ListWrapper>
        {options.map(({ label, value, ...optionProps }) => (
          <ItemWrapper>
            <NiceCheckbox
              {...inputProps}
              {...optionProps}
              checked={checked.includes(value)}
              label={label}
              value={value}
            />
          </ItemWrapper>
        ))}
      </ListWrapper>
    </div>
  );
};

function DefaultListWrapper(props: { children: ReactNode }): JSX.Element {
  return <HStack>{props.children}</HStack>;
}

function DefaultItemWrapper(props: { children: ReactNode }): JSX.Element {
  return <>{props.children}</>;
}
