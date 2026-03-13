import React from 'react';
import computer from '../../../assets/computer.svg';
import { useLanguage } from '../../../context/LanguageContext';

const Banner = () => {
  const { t } = useLanguage();

  return (
    <div
      className="
        flex items-center justify-between min-h-screen text-white p-8
        bg-[linear-gradient(to_right,#F4F1EA_0%,#F4F1EA_35%,#C7B8A6_20%,#C7B8A6_100%)]
      "
    >
      <div className="hidden md:flex justify-center flex-1">
        <img
          src={computer}
          alt="Computer illustration"
          className="w-[220px] md:w-[360px] lg:w-[580px] drop-shadow-xl translate-x-[-10%] -translate-y-10"
        />
      </div>

      <div className="max-w-lg">
        <h1 className="text-[#2F2F2F] text-8xl font-bold mb-4">
          {t.banner.hi}
        </h1>
        <p className="text-xl mb-8 text-[#2F2F2F]">
          {t.banner.description}
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-[#BFF7E1] hover:bg-[#2F2F2F] text-[#2F2F2F] hover:text-[#F4F1EA] font-semibold rounded-lg transition duration-300"
        >
          {t.banner.button}
        </a>
      </div>
    </div>
  );
};

export default Banner;
