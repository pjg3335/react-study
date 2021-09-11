import React from "react";
import MultiSelect from "./Select/MultiSelect";
import Select from "./Select/Select";

interface User {
  userId: number;
  name: string;
  email: string;
}

const datas: User[] = [
  { userId: 1, name: "민수", email: "민수@aa.aa" },
  { userId: 2, name: "철수", email: "철수@aa.aa" },
  { userId: 3, name: "영수", email: "영수@aa.aa" },
  { userId: 4, name: "정수", email: "정수@aa.aa" },
  { userId: 5, name: "이수", email: "이수@aa.aa" },
  { userId: 6, name: "강수", email: "강수@aa.aa" },
  { userId: 7, name: "고수", email: "고수@aa.aa" },
  { userId: 8, name: "여수", email: "여수@aa.aa" },
  { userId: 9, name: "가수", email: "가수@aa.aa" },
  { userId: 10, name: "지수", email: "지수@aa.aa" },
  { userId: 11, name: "비수", email: "비수@aa.aa" },
  { userId: 12, name: "미수", email: "미수@aa.aa" },
  {
    userId: 13,
    name: "옥수수수수수수수수수수수수수수수수수수",
    email: "미수@aa.aa",
  },
];

const App = () => {
  return (
    <div>
      <Select<User>
        style={{ width: "200px" }}
        getOptionLabel={({ name }) => name}
        getOptionValue={({ userId }) => `${userId}`}
        options={datas}
        isSearchable={false}
        placeholder={<>선택</>}
        noOptionsMessage={() => "비어있음"}
        hideSelectedOptions={false}
      />

      <MultiSelect<User>
        style={{ width: "300px" }}
        getOptionLabel={({ name }) => name}
        getOptionValue={({ userId }) => `${userId}`}
        options={datas}
        isSearchable={false}
        placeholder={<>선택</>}
        noOptionsMessage={() => "비어있음"}
        hideSelectedOptions={false}
        allowSelectAll={true}
        useCheckBox={true}
        useStatusBar={true}
        useValueCount={false}
      />
    </div>
  );
};

export default App;
