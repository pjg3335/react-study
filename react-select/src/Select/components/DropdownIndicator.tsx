import {
  components,
  GroupTypeBase,
  IndicatorProps,
  OptionTypeBase,
} from "react-select";

const DropdownIndicator = <
  OptionType extends OptionTypeBase,
  IsMulti extends boolean,
  GroupType extends GroupTypeBase<OptionType>
>({
  children,
  ...rest
}: IndicatorProps<OptionType, IsMulti, GroupType>) => (
  <components.DropdownIndicator<OptionType, IsMulti, GroupType> {...rest}>
    <div
      style={{
        height: "10px",
        fontSize: "10px",
        color: "#999999",
        fontWeight: 700,
        WebkitTransform: "rotate(90deg)",
      }}
    >
      &gt;
    </div>
  </components.DropdownIndicator>
);

export default DropdownIndicator;
