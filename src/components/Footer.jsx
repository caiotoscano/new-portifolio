import React from'react';
import { useLanguage } from '../context/useLanguage';
const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className = "bg-gray-950 text-white py-8 px-5 sm:px-8 lg:px-10">
            <div className = "container mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-5 sm:gap-6 text-center sm:text-left">
                <div className = "flex gap-6">
                    <a href = "https://github.com/caiotoscano" target = "_blank" rel = "noopener noreferrer" className = "text-gray-400 hover:text-violet-400 transition-colors text-lg">
                        {t.footerGithub}
                    </a>
                    <a href = "https://www.linkedin.com/in/caio-toscano-601647265" target = "_blank" rel = "noopener noreferrer" className = "text-gray-400 hover:text-violet-400 transition-colors text-lg">
                        {t.footerLinkedin}
                    </a>
                </div>
                <p className = "text-gray-500 text-xs sm:text-sm leading-relaxed">
                    © {new Date().getFullYear()} Caio T. {t.footerDireitos}
                </p>
                </div> 
        </footer>
    );
};
export default Footer;
