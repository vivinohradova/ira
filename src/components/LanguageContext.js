import { createContext, useState, useEffect, useContext } from "react";
import i18n from "i18next";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Получаем язык из localStorage или по умолчанию 'en'
  const storedLanguage = localStorage.getItem("language") || "en";

  const [language, setLanguage] = useState(storedLanguage);

  // Устанавливаем язык i18n при первом рендере
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    localStorage.setItem("language", lng); // сохраняем в localStorage
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
