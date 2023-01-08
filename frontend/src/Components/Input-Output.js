// Library Imports
import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

// Project Imports
import "../styles.css";

const InputEditor = ({ inputValue, outputValue, onInputChange }) => {
  const onLoadInput = () => {
    console.log("input editor loaded");
  };
  const onLoadOutput = () => {
    console.log("output editor loaded");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AceEditor
        className="inputEditor"
        placeholder="Input Parameters"
        mode="python"
        theme="monokai"
        name="input_editor"
        onLoad={onLoadInput}
        onChange={onInputChange}
        fontSize={14}
        value={inputValue}
        showPrintMargin={true}
        showGutter={true}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: true,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
      <AceEditor
        className="outputLogs"
        placeholder="Output Logs"
        mode="python"
        theme="monokai"
        name="outputlogs"
        onLoad={onLoadOutput}
        fontSize={14}
        value={outputValue}
        showPrintMargin={true}
        showGutter={true}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>
  );
};

export default InputEditor;
