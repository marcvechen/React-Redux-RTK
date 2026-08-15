import { useState, useEffect } from "react";
function DarkMode() {
  const [isDark, setIsDark] = useState(false);
  const handleMode = () => {
    setIsDark((prevMode) => !prevMode);
  };
  useEffect(() => {
    isDark
      ? document.body.classList.add("dark-theme")
      : document.body.classList.remove("dark-theme");
  }, [isDark]);
  return (
    <div>
      <button onClick={handleMode}>
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}
export default DarkMode;
