import React from'react';

const Footer = () => {
    return (
        <footer className = "bg-gray-950 text-white py-8 px-10">
            <div className = "container mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className = "flex gap-6">
                    <a href = "https://github.com/caiotoscano" target = "_blank" rel = "noopener noreferrer" className = "text-gray-400 hover:text-violet-400 transition-colors text-lg">
                        Github
                    </a>
                    <a href = "https://www.linkedin.com/in/caio-toscano-601647265" target = "_blank" rel = "noopener noreferrer" className = "text-gray-400 hover:text-violet-400 transition-colors text-lg">
                        Linkedin
                    </a>
                </div>
                <p className = "text-gray-500 text-sm">
                    © {new Date().getFullYear()}  Caio T. Todos os direitos reservados.
                </p>
                </div> 
        </footer>
    );
};
export default Footer;