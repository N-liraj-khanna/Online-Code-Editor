// Library Imports
import React from "react";
import AceEditor from "react-ace";
import DropDown from "react-dropdown";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

// Project Imports
import "../styles.css";

const CodeEditor = ({
  value,
  onCodeChange,
  programmingLanguage,
  language,
  onChangeLanguage,
  status,
  runCode,
}) => {
  const onLoad = (editor) => {
    console.log("code editor loaded");
  }
  const options = [
    { value: "py", label: "Python 3" },
    { value: "java", label: "Java" },
    { value: "cpp", label: "C++" },
    { value: "c", label: "C" },
    { value: "cs", label: "C#	" },
    { value: "go", label: "GoLang" },
    { value: "js", label: "NodeJS" },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <DropDown
        onChange={onChangeLanguage}
        className="nm"
        options={options}
        value={language}
        placeholder="Select an option"
      />
      <br />
      <AceEditor
        height="400px"
        className="codeEditor"
        placeholder="Write em up..."
        mode={programmingLanguage}
        theme="monokai"
        name="editor"
        onLoad={onLoad}
        onChange={onCodeChange}
        fontSize={16}
        value={value}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
      <br />
      <button
        onClick={() => runCode()}
        disabled={status === "Run" ? false : true}
        className="customButton"
      >
        {status}
      </button>
    </div>
  );
};

export default CodeEditor;
