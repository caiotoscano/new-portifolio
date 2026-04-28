import React from 'react';
import { motion as Motion } from 'framer-motion';
import { useLanguage } from '../context/useLanguage';

const Hero = () => {
    const { t } = useLanguage();

    const scrollToContact = (event) => {
        event.preventDefault();
        document.querySelector('#contato')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <section id = "hero" className = "bg-gray-900 text-white text-center pt-28 pb-16 sm:py-20 px-5">
        <h1 className = 'text-4xl sm:text-5xl font-bold leading-tight'>{t.heroTitulo}</h1>
        <p className = "text-lg sm:text-xl mt-4 text-gray-300">{t.heroSubtitulo}</p>
        <Motion.a
            href="#contato"
            onClick={scrollToContact}
            whileHover={{ y: -3, scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 320, damping: 18 }}
            className = 'bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-6 rounded-lg mt-8 inline-block transition-colors shadow-lg shadow-violet-950/30'
        >
            {t.heroBotao}
        </Motion.a>
        </section>
    );
};
export default Hero;
