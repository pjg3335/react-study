import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import * as Quill from "quill";
import "react-quill/dist/quill.snow.css";

const App = () => {
  const quillRef = useRef<ReactQuill>(null);
  const [value, setValue] = useState<string>("");
  const modules: Quill.StringMap = {
    toolbar: ["strike"],
  };
  const formats: string[] = ["strike"];

  console.log(value, quillRef.current?.getEditor().getLength());

  return (
    <>
      <ReactQuill
        ref={quillRef}
        value={value}
        theme="snow"
        onChange={setValue}
        modules={modules}
        formats={formats}
      />
    </>
  );
};

export default App;
