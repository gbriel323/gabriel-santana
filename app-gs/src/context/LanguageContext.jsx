import React, { createContext, useContext, useState } from 'react';
import experiences from './LanguageExperience';
import banner from './LanguageBanner';
import menus from './LanguageMenu';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en'); // O idioma padrão é o inglês

  const value = {
    lang,
    setLang,
    menuExperience: menus[lang].myexperience,  
    menuWorks: menus[lang].works,     // Acesse o menu corretamente
    menuRepositories: menus[lang].repositories, // Acesse o menu corretamente
    menuContact: menus[lang].contact, // Acesse o menu corretamente
    banner: banner[lang].banner, // Acesse o banner corretamente
    experiences: experiences[lang].experiences, // Acesse as experiências corretamente
    skills: experiences[lang].skills,           // Acesse as habilidades corretamente
    title: experiences[lang].title,              // Acesse o título corretamente
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
