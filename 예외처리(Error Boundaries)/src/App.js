import React, { useState } from "react";
import Component from "./Component";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  const [obj, setObj] = useState({});
  return (
    <>
      <button
        onClick={() => {
          if (obj) setObj();
          else setObj({});
        }}
      >
        {obj ? "props로 undefined넘기기" : "props로 {}넘기기"}
      </button>
      <ErrorBoundary>
        <Component obj={obj} />
      </ErrorBoundary>
    </>
  );
}

export default App;
