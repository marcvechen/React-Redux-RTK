import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Counter from "./ParentComponent";
import Hello from "./ChildComponent";
import Redev from "./SiblingComponent";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Counter />
    <Redev />
  </StrictMode>,
);
