import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useLanguage } from '../context/useLanguage';
import { motion as Motion } from 'framer-motion';
const Navbar = () => {
    const { language, toggleLanguage, t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const links = [
        { id: 1, name: t.navSobre, to: "sobre" },
        { id: 2, name: t.navHabilidades, to: "habilidades" },
        { id: 3, name: t.navCertificados, to: "certificados" },
        { id: 4, name: t.navProjetos, to: "projetos" },
        { id: 5, name: t.navContato, to: "contato" },
    ];

    return (
        <nav className = "fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-sm z-50">
            <div className = "container mx-auto max-w-6xl flex justify-between items-center h-16 sm:h-20 px-5 sm:px-8 lg:px-10">
            <Link to = "hero" smooth = {true} duration = {500} className = "text-xl sm:text-2xl font-bold text-violet-400 cursor-pointer">
                Caio T.
            </Link>
            <div className = "flex items-center gap-4 md:gap-8">
            <ul className = "hidden md:flex gap-5 lg:gap-8">
                {links.map(link => (
                    <li key = {link.id} className = "text-base lg:text-lg text-gray-300 hover:text-violet-400 transition-colors cursor-pointer">
                     <Link to = {link.to} smooth = {true} duration = {500}>
                     {link.name}
                     </Link>
                    </li>
                ))}
            </ul>
            <button
                type="button"
                onClick={() => setIsMenuOpen((current) => !current)}
                aria-label="Abrir menu"
                aria-expanded={isMenuOpen}
                className="md:hidden h-10 w-10 rounded-lg border border-gray-700 flex flex-col items-center justify-center gap-1.5 text-gray-200"
            >
                <span className={`h-0.5 w-5 bg-current transition-transform ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`h-0.5 w-5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`h-0.5 w-5 bg-current transition-transform ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
            <Motion.button
                      type="button"
                      onClick={toggleLanguage}
                      whileTap={{ scale: 0.96 }}
                      animate={{
                        background: language === 'pt'
                          ? 'linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)'
                          : 'linear-gradient(135deg, #0f172a 0%, #0369a1 100%)',
                        boxShadow: language === 'pt'
                          ? '0 0 0 1px rgba(167, 139, 250, 0.35), 0 8px 22px rgba(124, 58, 237, 0.28)'
                          : '0 0 0 1px rgba(125, 211, 252, 0.30), 0 8px 22px rgba(3, 105, 161, 0.24)',
                      }}
                      transition={{ duration: 0.28, ease: 'easeOut' }}
                      aria-label="Alternar idioma"
                      className="relative h-9 w-[4.75rem] rounded-full p-1 cursor-pointer shrink-0 overflow-hidden"
                    >
  <span className="absolute inset-0 flex items-center justify-between px-3 text-[10px] font-bold tracking-wide text-white/65">
    <Motion.span animate={{ opacity: language === 'pt' ? 0 : 1 }} transition={{ duration: 0.2 }}>
      PT
    </Motion.span>
    <Motion.span animate={{ opacity: language === 'pt' ? 1 : 0 }} transition={{ duration: 0.2 }}>
      EN
    </Motion.span>
  </span>
  <Motion.span
    className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[10px] font-bold text-gray-950 shadow-md"
    animate={{
      x: language === 'pt' ? 0 : 40,
      rotate: language === 'pt' ? 0 : 360,
    }}
    transition={{ type: "spring", stiffness: 520, damping: 32 }}
  >
    {language === 'pt' ? 'PT' : 'EN'}
  </Motion.span>
</Motion.button>
                </div>
            </div>
            {isMenuOpen && (
                <Motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="md:hidden absolute top-16 left-0 w-full border-t border-gray-800 bg-gray-900/95 backdrop-blur-sm px-5 py-4 shadow-xl"
                >
                    <ul className="flex flex-col gap-3">
                        {links.map(link => (
                            <li key={link.id}>
                                <Link
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block rounded-lg px-3 py-3 text-gray-200 hover:bg-gray-800 hover:text-violet-400 transition-colors cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Motion.div>
            )}
        </nav>
    );
};

export default Navbar;
