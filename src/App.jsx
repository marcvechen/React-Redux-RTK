import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Counter from "./Counter.jsx";
import ShowHide from "./ShowHide.jsx";
import Input from "./Input.jsx";
import Color from "./Color.jsx";
function App() {
  return (
    <div>
      <Counter />
      <ShowHide />
      <Input />
      <Color />
    </div>
  );
}
export default App;
