import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Image from '../../assets/icon.svg';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
    const { lang, setLang, menuExperience, menuWorks, menuRepositories, menuContact } = useLanguage();
    const [open, setOpen] = useState(false);
    const [bgColor, setBgColor] = useState('transparent');

    useEffect(() => {
        const storedLang = localStorage.getItem('lang');
        if (storedLang) {
            setLang(storedLang);
        }

        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 100) {
                setBgColor('#F4F1EA');
            } else {
                setBgColor('transparent');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setLang]);

    const handleSetLang = (language: string) => {
        setLang(language);
        localStorage.setItem('lang', language);
        setOpen(false);
    };

    return (
        <header
            className="fixed top-0 left-0 z-50 w-full p-3 md:p-4 transition-all duration-300"
            style={{ backgroundColor: bgColor }}
        >
            <div className="container mx-auto flex items-center justify-between">
                {/* LOGO */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#F4F1EA]/70 shadow-sm">
                        <img
                            src={Image}
                            alt="Logo Gabriel Santana"
                            className="h-7 w-7 object-contain"
                            decoding="async"
                        />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2F2F2F] md:text-xs">
                        Gabriel Santana
                    </span>
                </Link>

                {/* BOTÃO HAMBURGUER (MOBILE) */}
                <button
                    className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[#2F2F2F]/20 bg-[#F4F1EA]/80 shadow-sm md:hidden"
                    onClick={() => setOpen(prev => !prev)}
                    aria-label="Toggle menu"
                    type="button"
                >
                    <span className="relative flex h-4 w-5 flex-col justify-between">
                        <span
                            className={`block h-[2px] w-full rounded-full bg-[#2F2F2F] transition-all duration-300 ${
                                open ? 'translate-y-[7px] rotate-45' : ''
                            }`}
                        />
                        <span
                            className={`block h-[2px] w-full rounded-full bg-[#2F2F2F] transition-all duration-300 ${
                                open ? 'opacity-0' : 'opacity-100'
                            }`}
                        />
                        <span
                            className={`block h-[2px] w-full rounded-full bg-[#2F2F2F] transition-all duration-300 ${
                                open ? '-translate-y-[7px] -rotate-45' : ''
                            }`}
                        />
                    </span>
                </button>

                {/* MENU DESKTOP */}
                <nav className="hidden md:block">
                    <ul className="flex items-center space-x-6 md:space-x-8">
                        <li>
                            <Link
                                to="/experiences"
                                className="relative text-xs uppercase tracking-wide text-[#2F2F2F] md:text-sm"
                            >
                                {menuExperience}
                                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#BFF7E1] transition-transform duration-300 group-hover:scale-x-100" />
                            </Link>
                        </li>
                        {/* <li>
                            <Link
                                to="/works"
                                className="relative text-xs uppercase tracking-wide text-[#2F2F2F] md:text-sm"
                            >
                                {menuWorks}
                                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#BFF7E1] transition-transform duration-300 group-hover:scale-x-100" />
                            </Link>
                        </li> */}
                        {/* <li>
                            <Link
                                to="#repositories"
                                className="relative text-xs uppercase tracking-wide text-[#2F2F2F] md:text-sm"
                            >
                                {menuRepositories}
                                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#BFF7E1] transition-transform duration-300 group-hover:scale-x-100" />
                            </Link>
                        </li> */}
                        <li>
                            <Link
                                to="/contact"
                                className="relative text-xs uppercase tracking-wide text-[#2F2F2F] md:text-sm"
                            >
                                {menuContact}
                                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#BFF7E1] transition-transform duration-300 group-hover:scale-x-100" />
                            </Link>
                        </li>

                        <li className="ml-4 flex items-center">
                            <div className="relative flex items-center rounded-full bg-[#F4F1EA]/60 p-[2px] shadow-sm">
                                <span
                                    className={`
                                        absolute inset-[2px] w-1/2 rounded-full bg-[#2F2F2F]
                                        transition-transform duration-300
                                        ${lang === 'pt' ? 'translate-x-0' : 'translate-x-full'}
                                    `}
                                />
                                <button
                                    onClick={() => handleSetLang('pt')}
                                    className={`
                                        relative z-10 px-3 py-1 text-[10px] font-semibold tracking-wide transition-colors duration-300
                                        ${lang === 'pt' ? 'text-[#F4F1EA]' : 'text-[#2F2F2F]'}
                                    `}
                                    type="button"
                                >
                                    PT
                                </button>
                                <button
                                    onClick={() => handleSetLang('en')}
                                    className={`
                                        relative z-10 px-3 py-1 text-[10px] font-semibold tracking-wide transition-colors duration-300
                                        ${lang === 'en' ? 'text-[#F4F1EA]' : 'text-[#2F2F2F]'}
                                    `}
                                    type="button"
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
                <div className="mt-3 px-3 md:hidden">
                    <nav className="rounded-2xl border border-[#C7B8A6] bg-[#F4F1EA]/95 p-4 shadow-xl backdrop-blur-sm">
                        <ul className="flex flex-col gap-3 text-sm text-[#2F2F2F]">
                            <li>
                                <Link
                                    to="/experiences"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center justify-between rounded-xl px-3 py-2 transition hover:bg-[#E8E0D5]"
                                >
                                    <span>{menuExperience}</span>
                                    <span className="text-base">→</span>
                                </Link>
                            </li>
                            {/* <li>
                                <Link
                                    to="/works"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center justify-between rounded-xl px-3 py-2 transition hover:bg-[#E8E0D5]"
                                >
                                    <span>{menuWorks}</span>
                                    <span className="text-base">→</span>
                                </Link>
                            </li> */}
                            {/* <li>
                                <Link
                                    to="#repositories"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center justify-between rounded-xl px-3 py-2 transition hover:bg-[#E8E0D5]"
                                >
                                    <span>{menuRepositories}</span>
                                    <span className="text-base">→</span>
                                </Link>
                            </li> */}
                            <li>
                                <Link
                                    to="/contact"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center justify-between rounded-xl px-3 py-2 transition hover:bg-[#E8E0D5]"
                                >
                                    <span>{menuContact}</span>
                                    <span className="text-base">→</span>
                                </Link>
                            </li>

                            <li className="pt-2">
                                <div className="relative inline-flex items-center rounded-full bg-[#F4F1EA]/80 p-[2px] shadow-sm">
                                    <span
                                        className={`
                                            absolute inset-[2px] w-1/2 rounded-full bg-[#2F2F2F]
                                            transition-transform duration-300
                                            ${lang === 'pt' ? 'translate-x-0' : 'translate-x-full'}
                                        `}
                                    />
                                    <button
                                        onClick={() => handleSetLang('pt')}
                                        className={`
                                            relative z-10 px-3 py-1 text-[10px] font-semibold tracking-wide transition-colors duration-300
                                            ${lang === 'pt' ? 'text-[#F4F1EA]' : 'text-[#2F2F2F]'}
                                        `}
                                        type="button"
                                    >
                                        PT
                                    </button>
                                    <button
                                        onClick={() => handleSetLang('en')}
                                        className={`
                                            relative z-10 px-3 py-1 text-[10px] font-semibold tracking-wide transition-colors duration-300
                                            ${lang === 'en' ? 'text-[#F4F1EA]' : 'text-[#2F2F2F]'}
                                        `}
                                        type="button"
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