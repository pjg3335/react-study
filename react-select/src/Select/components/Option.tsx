import {
  components,
  GroupTypeBase,
  OptionProps,
  OptionTypeBase,
} from "react-select";
import CheckBoxIndicator from "./CheckBoxIndicator";

const Option = <
  OptionType extends OptionTypeBase,
  IsMulti extends boolean = false,
  GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>({
  children,
  ...props
}: OptionProps<OptionType, IsMulti, GroupType>) => {
  const labelWithCheckbox = (
    <div style={{ display: "flex", alignItems: "center" }}>
      <CheckBoxIndicator selected={props.isSelected} />
      {children}
    </div>
  );

  return (
    <components.Option<OptionType, IsMulti, GroupType> {...props}>
      {labelWithCheckbox}
    </components.Option>
  );
};

export default Option;
