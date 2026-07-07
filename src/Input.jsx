import React, { useState } from "react";

function Input() {
  const [input, setInput] = useState("");
  return (
    <div>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
      />
      {<p>{input}</p>}
    </div>
  );
}
export default Input;
