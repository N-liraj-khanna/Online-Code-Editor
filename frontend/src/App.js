// Library Imports
import React, { useState } from "react";
import axios from "axios";

// Project Imports
import CodeEditor from "./Components/CodeEditor";
import InputOutputEditor from "./Components/Input-Output";
import "./styles.css";

const App = () => {
  // state hooks
  const [language, setLanguage] = useState("py");
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [outputLogs, setOutputLogs] = useState("");
  const [status, setStatus] = useState("Run");

  // run button callback
  const runCode = () => {
    setStatus("Loading...");
    axios.post("/run", { language, code, input }).then((res) => {
      if (res.data.memory && res.data.cpuTime) {
        setOutputLogs("");
        setOutputLogs(
          `Memory Used: ${res.data.memory} \nCPU Time: ${res.data.cpuTime} \n${res.data.output} `
        );
      } else {
        setOutputLogs(`${res.data.output} `);
      }
      setStatus("Run");
    });
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div style={{ textAlign: "center", fontFamily: "Rockwell" }}>
        <h2>Online Code Compiler</h2>
      </div>
      <CodeEditor
        language={language}
        onChangeLanguage={({ value }) => setLanguage(value)}
        value={code}
        onCodeChange={(text) => setCode(text)}
        programmingLanguage={language}
        status={status}
        runCode={() => runCode()}
      />
      <div className="optionSegment">
        <InputOutputEditor
          inputValue={input}
          onInputChange={(text) => setInput(text)}
          outputValue={outputLogs}
        />
      </div>
    </div>
  );
};

export default App;
