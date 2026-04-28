import React, { useState } from 'react';
import { translations } from '../translations';
import { LanguageContext } from './languageContext';

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'pt' ? 'en' : 'pt'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
