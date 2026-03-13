import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const texts = {
  'pt': {
    menu: {
      experience: 'Minha Experiência',
      works: 'Trabalhos',
      repositories: 'Repositórios',
      contact: 'Contato',
    },
    banner: {
      hi: 'Oi,',
      description:
        'Meu nome é Gabriel Francisco Sant Ana, sou desenvolvedor Front-End com foco em Angular e React. Tenho experiência em automação de testes e sou formado em Sistemas de Informação e em Banco de Dados por duas instituições de ensino superior. Ao todo, construí uma trajetória de 13 anos no mercado de tecnologia.',
      button: 'Fale comigo',
    },
  },
  en: {
    menu: {
      experience: 'My Experience',
      works: 'Works',
      repositories: 'Repositories',
      contact: 'Contact',
    },
    banner: {
      hi: 'Hi,',
      description:
        'My name is Gabriel Francisco Sant Ana, and I’m a Front-End developer specializing in Angular and React. I have experience with test automation and hold degrees in Information Systems and Database from two universities. Altogether, I’ve built a 13-year career in the technology industry.',
      button: 'Get in Touch',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en'); // 'pt-BR' ou 'en'

  const value = {
    lang,
    setLang,
    t: texts[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
