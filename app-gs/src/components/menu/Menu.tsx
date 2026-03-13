import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Image from '../../assets/icon.svg'

const Menu = () => {
    const { lang, setLang, t } = useLanguage();
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-transparent p-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* LOGO */}
                <div className="flex items-center gap-1">
                    <div className="w-15 h-15 flex items-center justify-center overflow-hidden">
                        <img
                            src={Image}
                            alt="Logo Gabriel Santana"
                            className="w-10 h-10 object-contain block"
                            decoding="async"
                        />
                    </div>

                    <span className="text-xs md:text-sm text-[#2F2F2F] uppercase tracking-[0.2em]">
                        Gabriel Sant ana
                    </span>
                </div>

                {/* BOTÃO HAMBURGUER (MOBILE) */}
                <button
                    className="md:hidden text-[#2F2F2F]"
                    onClick={() => setOpen(prev => !prev)}
                    aria-label="Toggle menu"
                >
                    <span className="block w-5 h-[2px] bg-[#2F2F2F] mb-1" />
                    <span className="block w-5 h-[2px] bg-[#2F2F2F] mb-1" />
                    <span className="block w-5 h-[2px] bg-[#2F2F2F]" />
                </button>

                {/* MENU DESKTOP */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-6 md:space-x-8 items-center">
                        <li>
                            <a
                                href="#experience"
                                className="text-[#2F2F2F] text-xs md:text-sm uppercase tracking-wide relative group"
                            >
                                {t.menu.experience}
                                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#BFF7E1] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#works"
                                className="text-[#2F2F2F] text-xs md:text-sm uppercase tracking-wide relative group"
                            >
                                {t.menu.works}
                                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#BFF7E1] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#repositories"
                                className="text-[#2F2F2F] text-xs md:text-sm uppercase tracking-wide relative group"
                            >
                                {t.menu.repositories}
                                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#BFF7E1] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="text-[#2F2F2F] text-xs md:text-sm uppercase tracking-wide relative group"
                            >
                                {t.menu.contact}
                                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#BFF7E1] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                            </a>
                        </li>

                        {/* Seletor de idioma */}
                        <li className="flex items-center ml-4">
                            <div className="relative flex items-center bg-[#F4F1EA]/60 rounded-full p-[2px] shadow-sm">
                                <span
                                    className={`
                    absolute inset-[2px] w-1/2 rounded-full bg-[#2F2F2F]
                    transition-transform duration-300
                    ${lang === 'pt' ? 'translate-x-0' : 'translate-x-full'}
                  `}
                                />
                                <button
                                    onClick={() => setLang('pt')}
                                    className={`
                    relative z-10 px-3 py-1 text-[10px] font-semibold tracking-wide
                    transition-colors duration-300
                    ${lang === 'pt' ? 'text-[#F4F1EA]' : 'text-[#2F2F2F]'}
                  `}
                                >
                                    PT
                                </button>
                                <button
                                    onClick={() => setLang('en')}
                                    className={`
                    relative z-10 px-3 py-1 text-[10px] font-semibold tracking-wide
                    transition-colors duration-300
                    ${lang === 'en' ? 'text-[#F4F1EA]' : 'text-[#2F2F2F]'}
                  `}
                                >
                                    EN
                                </button>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* MENU MOBILE DROPDOWN */}
            {open && (
                <div className="md:hidden bg-[#F4F1EA]/90 backdrop-blur-sm border-t border-[#C7B8A6]">
                    <nav className="container mx-auto py-3">
                        <ul className="flex flex-col gap-3 text-sm text-[#2F2F2F]">
                            <li>
                                <a href="#experience">{t.menu.experience}</a>
                            </li>
                            <li>
                                <a href="#works">{t.menu.works}</a>
                            </li>
                            <li>
                                <a href="#repositories">{t.menu.repositories}</a>
                            </li>
                            <li>
                                <a href="#contact">{t.menu.contact}</a>
                            </li>
                            <li className="pt-2">
                                <div className="relative inline-flex items-center bg-[#F4F1EA]/80 rounded-full p-[2px] shadow-sm">
                                    <span
                                        className={`
                      absolute inset-[2px] w-1/2 rounded-full bg-[#2F2F2F]
                      transition-transform duration-300
                      ${lang === 'pt' ? 'translate-x-0' : 'translate-x-full'}
                    `}
                                    />
                                    <button
                                        onClick={() => setLang('pt')}
                                        className={`
                      relative z-10 px-3 py-1 text-[10px] font-semibold tracking-wide
                      transition-colors duration-300
                      ${lang === 'pt' ? 'text-[#F4F1EA]' : 'text-[#2F2F2F]'}
                    `}
                                    >
                                        PT
                                    </button>
                                    <button
                                        onClick={() => setLang('en')}
                                        className={`
                      relative z-10 px-3 py-1 text-[10px] font-semibold tracking-wide
                      transition-colors duration-300
                      ${lang === 'en' ? 'text-[#F4F1EA]' : 'text-[#2F2F2F]'}
                    `}
                                    >
                                        EN
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Menu;
