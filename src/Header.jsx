import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import LanguageContext from "./LanguageContext";

function Header() {
  const { isDark, handleMode } = useContext(ThemeContext);
  const { dictionary, handleLanguage } = useContext(LanguageContext);
  return (
    <div>
      <h2>{dictionary.header}</h2>
    </div>
  );
}
export default Header;
