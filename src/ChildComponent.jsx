import React, { useState } from "react";
import Counter from "./ParentComponent";

function Hello({ name, count }) {
  return (
    <div>
      <h2>
        Привет, {name}! Текущий счетчик:{count}
      </h2>
    </div>
  );
}
export default Hello;
