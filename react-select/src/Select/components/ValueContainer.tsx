import {
  components,
  GroupTypeBase,
  OptionTypeBase,
  ValueContainerProps,
} from "react-select";
import { borderColor } from "../styles/common";

const ValueContainer = <
  OptionType extends OptionTypeBase,
  IsMulti extends boolean = false,
  GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>({
  children,
  ...props
}: ValueContainerProps<OptionType, IsMulti, GroupType>) => {
  const { selectProps } = props;
  const selectedlength = selectProps.value?.length;
  const selectedAll = selectProps.options?.length === selectedlength;
  const selectNone = selectedlength === 0 || selectedlength === undefined;

  const child = (children as (object | [])[])?.filter(
    (child) => !Array.isArray(child)
  );

  return (
    <components.ValueContainer<OptionType, IsMulti, GroupType> {...props}>
      <>
        {selectedAll ? "전체" : !selectNone && `${selectedlength}개 선택됨`}
        {child}
      </>
    </components.ValueContainer>
  );
};

export default ValueContainer;
