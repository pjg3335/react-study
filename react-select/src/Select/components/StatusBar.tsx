import { lightBaseColor } from "../styles/common";

interface StatusBarProps {
  selectedlength: number;
  allLength: number;
}

const StatusBar: React.FC<StatusBarProps> = ({ selectedlength, allLength }) => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "2px",
        fontSize: "13px",
        backgroundColor: lightBaseColor,
      }}
    >
      {selectedlength}/{allLength} 개 선택됨
    </div>
  );
};

export default StatusBar;
