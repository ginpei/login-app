import {
  ChangeEventHandler,
  ComponentPropsWithRef,
  ReactNode,
  useState,
} from "react";
import { NiceRadio } from "../primitive/NiceRadio";
import { HStack } from "../pure/HStack";

export type ItemWrapper = (props: { children: ReactNode }) => JSX.Element;

type BasicInputProps = Omit<
  ComponentPropsWithRef<"input">,
  "checked" | "label" | "type" | "value"
>;

export interface RadioGroupProps<T extends string = string>
  extends BasicInputProps {
  selected: T;
  itemWrapper?: ItemWrapper;
  listWrapper?: ItemWrapper;
  name: NonNullable<ComponentPropsWithRef<"input">["name"]>;
  options: (BasicInputProps & {
    label: string;
    value: T;
  })[];
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  selected,
  itemWrapper,
  listWrapper,
  options,
  ...inputProps
}) => {
  const ListWrapper = listWrapper ?? DefaultListWrapper;
  const ItemWrapper = itemWrapper ?? DefaultItemWrapper;

  return (
    <div className="RadioGroup">
      <ListWrapper>
        {options.map(({ label, value, ...optionProps }) => (
          <ItemWrapper>
            <NiceRadio
              {...inputProps}
              {...optionProps}
              checked={selected === value}
              label={label}
              value={value}
            />
          </ItemWrapper>
        ))}
      </ListWrapper>
    </div>
  );
};

export function useRadioGroupChange<T extends string = string>(
  initial: RadioGroupProps<T>["selected"]
): [T, ChangeEventHandler<HTMLInputElement>] {
  const [selected, setSelected] = useState(initial);
  const onSelectChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.currentTarget;
    setSelected(value as T);
  };

  return [selected, onSelectChange];
}

function DefaultListWrapper(props: { children: ReactNode }): JSX.Element {
  return <HStack>{props.children}</HStack>;
}

function DefaultItemWrapper(props: { children: ReactNode }): JSX.Element {
  return <>{props.children}</>;
}
