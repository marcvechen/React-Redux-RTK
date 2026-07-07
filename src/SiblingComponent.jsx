import React, { useState } from "react";

function Redev() {
  const [text, setText] = useState("Какой то текст");
  return (
    <div>
      <h2>Текущий текст: {text}</h2>
      <button onClick={() => setText((prevText) => "REDEV")}>Redev</button>
    </div>
  );
}
export default Redev;
