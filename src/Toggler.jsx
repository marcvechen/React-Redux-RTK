import MyContext from "./MyContext";
import { useContext } from "react";

function Toggle() {
  const { isDark, handleMode } = useContext(MyContext);
  return (
    <div>
      <button onClick={handleMode}>Switch mode</button>
    </div>
  );
}
export default Toggle;
