import ThemeContext from "./ThemeContext";
import LanguageContext from "./LanguageContext";
import { useContext } from "react";

function Toggle() {
  const { isDark, handleMode } = useContext(ThemeContext);
  const { dictionary, handleLanguage } = useContext(LanguageContext);
  return (
    <div>
      <button onClick={handleMode}>{dictionary.buttons.switchMode}</button>
      <button onClick={handleLanguage}>{dictionary.buttons.switchLang}</button>
    </div>
  );
}
export default Toggle;
