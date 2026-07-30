import React, { useState, useEffect, useRef } from "react";
import List from "./List";
function App() {
  const inputRef = useRef();
  function focusInput() {
    inputRef.current.focus();
  }
  const [list, setList] = useState([
    { id: 1, text: "one" },
    { id: 2, text: "two" },
    { id: 3, text: "three" },
  ]);
  const [refInput, setRefInput] = useState("");
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={refInput}
        onChange={(e) => {
          setRefInput(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            if (refInput.length > 0) {
              const newObj = { id: Date.now(), text: refInput };
              setList((prevList) => [...prevList, newObj]);
              setRefInput("");
            }
          }
        }}
      />
      <button onClick={focusInput}>Focus</button>
      <List arr={list} />
    </div>
  );
}

export default App;
