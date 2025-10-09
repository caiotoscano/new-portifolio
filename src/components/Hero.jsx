import React from 'react';

const Hero = () => {
    return (
        <section id = "hero" className = "bg-gray-900 text-white text-center py-20 px-4">
        <h1 className = 'text-5xl font-bold'> Olá, eu sou o Caio!</h1>
        <p className = "text-xl mt-4 text-gray-300">Desenvolvedor de Software</p>
        <a href="#contato" className = 'bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-6 rounded-lg mt-8 inline-block transition-colors'>
            Entre em Contato
        </a>
        </section>
    );
};
export default Hero;