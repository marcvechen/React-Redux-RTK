import { createContext, useState } from "react";
import { eng, ru } from "./translation.js";
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("eng");

  const handleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "eng" ? "ru" : "eng"));
  };

  return (
    <LanguageContext.Provider
      value={{ dictionary: language === "eng" ? eng : ru, handleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;
