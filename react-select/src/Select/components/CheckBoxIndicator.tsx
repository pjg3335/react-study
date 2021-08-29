interface CheckBoxIndicatorProps {
  selected: boolean;
}

const CheckBoxIndicator: React.FC<CheckBoxIndicatorProps> = ({ selected }) => {
  return (
    <input style={{ marginRight: "8px" }} type="checkbox" checked={selected} />
  );
};

export default CheckBoxIndicator;
