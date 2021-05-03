import React from "react";

const Component = (props) => {
  props.obj.message = "hello";
  return (
    <div>
      <h1>Component</h1>
      props.obj = {JSON.stringify(props.obj)}
      <br />
      (이 컴포넌트는 props.obj.message에 "hello"를 넣습니다.)
    </div>
  );
};

export default Component;
