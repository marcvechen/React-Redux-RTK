import React, { useState } from "react";

function Color() {
  const [color, setColor] = useState(true);
  return (
    <div>
      <button
        style={{ backgroundColor: color ? "blue" : "red" }}
        onClick={() => setColor((prevColor) => !prevColor)}
      >
        Кнопка с цветом
      </button>
    </div>
  );
}
export default Color;
