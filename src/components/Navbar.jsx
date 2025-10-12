import React from 'react';
import { Link } from 'react-scroll';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
const Navbar = () => {
    const { language, toggleLanguage, t } = useLanguage();
    const links = [
        { id: 1, name: t.navSobre, to: "sobre" },
        { id: 2, name: t.navHabilidades, to: "habilidades" },
        { id: 3, name: t.navProjetos, to: "projetos" },
        { id: 4, name: t.navContato, to: "contato" },
    ];

    return (
        <nav className = "fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-sm z-50">
            <div className = "container mx-auto max-w-6xl flex justify-between items-center h-20 px-10">
            <Link to = "hero" smooth = {true} duration = {500} className = "text-2xl font-bold text-violet-400 cursor-pointer">
                Caio T.
            </Link>
            <div className = "flex items-center gap-8">
            <ul className = "hidden md:flex gap-8">
                {links.map(link => (
                    <li key = {link.id} className = "text-lg text-gray-300 hover:text-violet-400 transition-colors cursor-pointer">
                     <Link to = {link.to} smooth = {true} duration = {500}>
                     {link.name}
                     </Link>
                    </li>
                ))}
            </ul>
            <div
                      onClick={toggleLanguage}
                      className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                        language === 'pt' ? 'bg-violet-600 justify-start' : 'bg-gray-700 justify-end'
                      }`}
                    >
  <motion.div
    className="w-6 h-6 bg-white rounded-full flex items-center justify-center"
    layout
    transition={{ type: "spring", stiffness: 700, damping: 30 }}
  >
    <span className="text-xs font-bold text-black">
      {language === 'pt' ? 'PT' : 'EN'}
    </span>
  </motion.div>
</div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;