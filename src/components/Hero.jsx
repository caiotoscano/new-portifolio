import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();
    return (
        <section id = "hero" className = "bg-gray-900 text-white text-center py-20 px-4">
        <h1 className = 'text-5xl font-bold'>{t.heroTitulo}</h1>
        <p className = "text-xl mt-4 text-gray-300">{t.heroSubtitulo}</p>
        <a href="#contato" className = 'bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-6 rounded-lg mt-8 inline-block transition-colors'>
            {t.heroBotao}
        </a>
        </section>
    );
};
export default Hero;