import React, { useState } from "react";

function Color() {
  const [color, setColor] = useState("red");
  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={() =>
          setColor((prevColor) => (prevColor === "blue" ? "red" : "blue"))
        }
      >
        {color}
      </button>
    </div>
  );
}
export default Color;
