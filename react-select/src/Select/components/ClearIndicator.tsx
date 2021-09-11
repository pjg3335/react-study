import {
  components,
  GroupTypeBase,
  IndicatorProps,
  OptionTypeBase,
} from "react-select";

const ClearIndicator = <
  OptionType extends OptionTypeBase,
  IsMulti extends boolean,
  GroupType extends GroupTypeBase<OptionType>
>({
  children,
  ...rest
}: IndicatorProps<OptionType, IsMulti, GroupType>) => (
  <components.ClearIndicator {...rest}>
    <div style={{ fontSize: "8px", color: "#999999" }}>✕</div>
  </components.ClearIndicator>
);

export default ClearIndicator;
