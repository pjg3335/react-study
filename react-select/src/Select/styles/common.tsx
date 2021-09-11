import { CSSProperties } from "react";
import { Styles } from "react-select";

export const baseColor = "#1c90fb";
export const lightBaseColor = "#EBF7FF";
export const borderColor = "hsl(0, 0%, 80%)";
export const borderHoverColor = "black";
export const fontColor = "black";
export const optionHoverColor = "#eeeeee";

export const selectStyle = (style?: CSSProperties): Styles<any, any, any> => ({
  // 전체 감싸는거
  control: ({ minHeight, boxShadow, ...provided }, state) => {
    return {
      ...provided,
      borderRadius: state.menuIsOpen ? "4px 4px 0 0" : "4px",
      borderColor: state.isFocused ? borderHoverColor : borderColor,
      ":hover": { borderColor: borderHoverColor },
      ...style,
    };
  },
  // 값 들어가는 container 감싸는거
  valueContainer: (provided) => {
    return {
      ...provided,
      fontSize: "14px",
      lineHeight: "28px",
      padding: "0 8px",
    };
  },
  // 이거 <input> 이 아니라 그거 감싸는 친구임
  input: ({ paddingBottom, paddingTop, margin, ...provided }) => {
    return {
      ...provided,
    };
  },
  // options나오는 창의 가장 밖
  menu: ({ marginTop, marginBottom, ...provided }) => {
    return {
      ...provided,
      borderRadius: "0 0 4px 4px",
      border: `1px solid ${borderHoverColor}`,
      borderTop: "0",
      ...style,
    };
  },
  // options들어있는거 한번더 감싸는거 (스크롤링 영역)
  menuList: ({ paddingTop, paddingBottom, ...provided }) => {
    return {
      ...provided,
      maxHeight: "150px",
    };
  },
  // 메뉴 아이템 각각
  option: ({ backgroundColor, ...provided }, state) => {
    return {
      ...provided,
      fontSize: "13px",
      lineHeight: "26px",
      padding: "0 12px",
      color: state.isSelected ? baseColor : "rgba(0,0,0,.8)",
      ":hover": { backgroundColor: optionHoverColor },
    };
  },
  //검색결과 없을때
  noOptionsMessage: ({ ...provided }) => {
    return {
      ...provided,
      fontSize: "13px",
    };
  },
  multiValue: ({ ...provided }) => {
    return {
      ...provided,
      backgroundColor: lightBaseColor,
    };
  },
  multiValueLabel: ({ padding, ...provided }) => {
    return {
      ...provided,
      paddingRight: "2px",
      fontSize: "13px",
      lineHeight: "20px",
      maxWidth: "100px",
    };
  },
  clearIndicator: (provided) => {
    return {
      ...provided,
      padding: 7,
    };
  },
  placeholder: (provided) => {
    return {
      ...provided,
      color: "#afb4be",
    };
  },
});
