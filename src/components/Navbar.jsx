import React from 'react';
import { Link } from 'react-scroll';
const Navbar = () => {
    const links = [
        { id: 1, name: "Sobre", to: "sobre" },
        { id: 2, name: "Habilidades", to: "habilidades" },
        { id: 3, name: "Projetos", to: "projetos" },
        { id: 4, name: "Contato", to: "contato" },
    ];

    return (
        <nav className = "fixed top-0 lef-0 w-full bg-gray-900/80 backdrop-blur-sm z-50">
            <div className = "container mx-auto max-w-6xl flex justify-between items-center h-20 px-10">
            <Link to = "hero" smooth = {true} duration = {500} className = "text-2xl font-bold text-violet-400 cursor-pointer">
                Caio T.
            </Link>
            <ul className = "hidden md:flex gap-8">
                {links.map(link => (
                    <li key = {link.id} className = "text-lg text-gray-300 hover:text-violet-400 transition-colors cursor-pointer">
                     <Link to = {link.to} smooth = {true} duration = {500}>
                     {link.name}
                     </Link>
                    </li>
                ))}
            </ul>
            </div>
        </nav>
    );
};

export default Navbar;