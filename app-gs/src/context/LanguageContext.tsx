import React, { createContext, useContext, useState, ReactNode } from 'react';
import experiences from './LanguageExperience';
import banner from './LanguageBanner';
import menu from './LanguageMenu';
import contact from './LanguageContact';
import work from './LanguageWork';

// Defina uma interface para o contexto
interface LanguageContextType {
  lang: string; // O idioma atual
  setLang: (lang: string) => void; // Função para mudar o idioma
  menuExperience: string;
  menuWorks: string;
  menuRepositories: string;
  menuContact: string;
  bannerHi: string;
  bannerDescription: string;
  bannerButton: string;
  experiences: any[]; // Ajuste o tipo conforme sua estrutura de dados
  skills: string[];
  title: string;
  titlePage: string;
  contactTitlePage: string;
  contactTextEmail: string;
  contactTextPhone: string;
  contactFeedbackEmail: string;
  contactNomeEmail: string;
  contactEmailEmail: string;
  contactMessageEmail: string;
  contactButtonEmail: string;
  worktitlePage: string;
  works: any[]; 

  
}

// Use a interface para criar o contexto com um valor padrão
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [lang, setLang] = useState<string>('en'); // O idioma padrão é o inglês

  const value: LanguageContextType = {
    lang,
    setLang,
    menuExperience: menu[lang].menu.myexperience,
    menuWorks: menu[lang].menu.works,
    menuRepositories: menu[lang].menu.repositories,
    menuContact: menu[lang].menu.contact,
    bannerHi: banner[lang].banner.hi,
    bannerDescription: banner[lang].banner.description,
    bannerButton: banner[lang].banner.button,
    experiences: experiences[lang].experiences,
    skills: experiences[lang].skills,
    title: experiences[lang].title,
    titlePage: experiences[lang].titlePage,
    contactTitlePage: contact[lang].contact.titlePage,
    contactTextEmail: contact[lang].contact.textEmail,
    contactTextPhone: contact[lang].contact.textPhone,
    contactFeedbackEmail: contact[lang].contact.feedbackEmail,
    contactNomeEmail: contact[lang].contact.nomeEmail,
    contactEmailEmail: contact[lang].contact.emailEmail,
    contactMessageEmail: contact[lang].contact.messageEmail,
    contactButtonEmail: contact[lang].contact.buttonEmail,
    worktitlePage: work[lang].work.titlePage,
    works: work[lang].work.cardDetails,


  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Atualizando o useLanguage para lançar um erro se o contexto não estiver definido
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
