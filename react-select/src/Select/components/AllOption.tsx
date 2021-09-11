import { CSSProperties, useRef } from "react";
import { baseColor, borderColor, optionHoverColor } from "../styles/common";

interface AllOptionProps {
  selectedAll: boolean;
  optionStyle: CSSProperties;
  useCheckBox?: boolean;
  allOptionLabel?: string;
  onClick: () => void;
}

const AllOption: React.FC<AllOptionProps> = ({
  selectedAll,
  useCheckBox,
  optionStyle,
  allOptionLabel,
  onClick,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    // FIXME: @emotion/react가 안먹혀서 일단 반 수동으로 스타일 적용 해둠
    <div
      ref={ref}
      style={{
        borderBottom: `1px solid #eeeeee`,
        ...optionStyle,
        ...(selectedAll && { color: baseColor }),
      }}
      onMouseOver={() => {
        ref.current!.style.backgroundColor = optionHoverColor;
      }}
      onMouseOut={() => {
        ref.current!.style.backgroundColor = "white";
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
        onClick={onClick}
      >
        {useCheckBox && (
          <input
            style={{ marginRight: "8px" }}
            type="checkbox"
            checked={selectedAll}
            onChange={() => null}
          />
        )}
        <div>{allOptionLabel}</div>
      </div>
    </div>
  );
};

export default AllOption;
