import React, { CSSProperties, useMemo } from "react";
import {
  default as ReactSelect,
  GroupTypeBase,
  OptionTypeBase,
  Props,
} from "react-select";
import { selectStyle } from "./styles/common";
import ClearIndicator from "./components/ClearIndicator";
import DropdownIndicator from "./components/DropdownIndicator";
import Menu from "./components/Menu";
import Option from "./components/Option";
import ValueContainer from "./components/ValueContainer";

export interface CheckMultiSelectAdditionalProps {
  useCheckBox?: boolean;
  useStatusBar?: boolean;
  allowSelectAll?: boolean;
  allOptionLabel?: string;
  useValueCount?: boolean;
}

const MultiSelect = <
  OptionType extends OptionTypeBase,
  GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>({
  style,
  allowSelectAll,
  allOptionLabel = "전체",
  useCheckBox,
  useStatusBar,
  useValueCount,
  ...props
}: Props<OptionType, true, GroupType> &
  CheckMultiSelectAdditionalProps & {
    style?: CSSProperties;
  }): JSX.Element => {
  const styles = useMemo(() => selectStyle(style), []);

  return (
    <ReactSelect<OptionType, true, GroupType>
      styles={styles}
      isMulti={true}
      components={{
        ...(useValueCount && { ValueContainer }),
        DropdownIndicator,
        ClearIndicator,
        Menu: Menu({
          allowSelectAll,
          allOptionLabel,
          useCheckBox,
          useStatusBar,
        }),
        ...(useCheckBox && { Option }),
      }}
      closeMenuOnSelect={false}
      {...props}
    />
  );
};

export default MultiSelect;
