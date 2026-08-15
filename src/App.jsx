import { Route, Routes, NavLink, BrowserRouter } from "react-router";
import Components from "./Components/Components";
import Navbar from "./Components/Navbar";
import Main from "./Components/MainPage";
import DarkMode from "./Components/DarkMode";

function App() {
  return (
    <div>
      <DarkMode />
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:url" element={<Components />} />
      </Routes>
    </div>
  );
}

export default App;
