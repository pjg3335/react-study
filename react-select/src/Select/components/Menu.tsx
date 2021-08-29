import {
  components,
  GroupTypeBase,
  MenuProps,
  OptionTypeBase,
} from "react-select";
import { CheckMultiSelectAdditionalProps } from "../MultiSelect";
import AllOption from "./AllOption";
import StatusBar from "./StatusBar";

const Menu = <
  OptionType extends OptionTypeBase,
  GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>({
  allowSelectAll,
  allOptionLabel,
  useCheckBox,
  useStatusBar,
}: Pick<
  CheckMultiSelectAdditionalProps,
  "allowSelectAll" | "allOptionLabel" | "useCheckBox" | "useStatusBar"
>) => {
  const Menu = ({ ...props }: MenuProps<OptionType, true, GroupType>) => {
    const { getValue, options, setValue, getStyles } = props;
    const values = getValue();
    const selectedlength = values.length;
    const allLength = options.length;
    const selectedAll = allLength === selectedlength;

    const optionStyle = getStyles("option", props);
    const onClick = () => {
      if (selectedAll) setValue([], "deselect-option");
      else setValue(options, "select-option");
    };

    return (
      <components.Menu<OptionType, true, GroupType> {...props}>
        <>
          {allowSelectAll && (
            <AllOption
              allOptionLabel={allOptionLabel}
              optionStyle={optionStyle}
              selectedAll={selectedAll}
              useCheckBox={useCheckBox}
              onClick={onClick}
            />
          )}
          {props.children}
          {useStatusBar && (
            <StatusBar allLength={allLength} selectedlength={selectedlength} />
          )}
        </>
      </components.Menu>
    );
  };
  return Menu;
};

export default Menu;
