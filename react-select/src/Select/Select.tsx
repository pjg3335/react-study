import React, { CSSProperties, useMemo } from "react";
import {
  default as ReactSelect,
  GroupTypeBase,
  OptionTypeBase,
  Props,
} from "react-select";
import ClearIndicator from "./components/ClearIndicator";
import DropdownIndicator from "./components/DropdownIndicator";
import { selectStyle } from "./styles/common";

const Select = <
  OptionType extends OptionTypeBase,
  IsMulti extends boolean = false,
  GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>({
  style,
  ...props
}: Props<OptionType, IsMulti, GroupType> & {
  style?: CSSProperties;
}): JSX.Element => {
  const styles = useMemo(() => selectStyle(style), []);

  return (
    <ReactSelect<OptionType, IsMulti, GroupType>
      styles={styles}
      components={{
        DropdownIndicator,
        ClearIndicator,
      }}
      {...props}
    />
  );
};

export default Select;
