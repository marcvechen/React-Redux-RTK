import React, { useState } from "react";
import LifeCycle from "./LifecycleComponent";
import LifeCycleFunction from "./LifecycleComponent-function";
function App() {
  const [showLifecycle, setShowLifecycle] = useState(true);
  const [showComponent, setshowComponent] = useState(true);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {showComponent && <LifeCycleFunction />}
      <button
        style={{ padding: 10, backgroundColor: "blue", margin: 10 }}
        onClick={() => {
          setshowComponent(!showComponent);
        }}
      >
        Kill
      </button>
      {showLifecycle && <LifeCycle />}
      <button
        style={{ padding: 10, backgroundColor: "red", margin: 10 }}
        onClick={() => {
          setShowLifecycle(!showLifecycle);
        }}
      >
        Kill
      </button>
    </div>
  );
}
export default App;
