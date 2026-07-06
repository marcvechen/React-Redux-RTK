import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Number from "./numberComp.jsx";
import String from "./stringComp.jsx";
import Array from "./arrayComp.jsx";
import Boolean from "./booleanComp.jsx";
import Function from "./functionComp.jsx";
import Object from "./objectComp.jsx";
import Destructuring from "./destructuring.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Number number={123} />
    <String str={"string"} />
    <Array arr={["a", "r", "r"]} />
    <Boolean boolean={true} />
    <Function
      func={function () {
        return <h1>return func</h1>;
      }}
    />
    <Object obj={{ name: "danil", age: 24 }} />
    <Destructuring
      str={"string"}
      number={123}
      arr={["a", "r", "r", 2].join("")}
    />
    <App />
  </StrictMode>,
);
