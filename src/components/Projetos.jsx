import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard.jsx';
import AnimatedSection from './AnimatedSection.jsx';
import { useLanguage } from '../context/LanguageContext';
const projects = [
    {
        id: 1,
        titleKey: 'proj1_titulo',
        descriptionKey: 'proj1_desc',
        tags: ["C#", "SQLite", "Windows Forms", "Git & GitHub"],
        repolink: "https://github.com/caiotoscano/controle-acesso-laboratorios"
    },
    {
        id: 2,
        titleKey: 'proj2_titulo',
        descriptionKey: "proj2_desc",    
        tags: ["HTML", "CSS", "Python"],
        repolink: "https://github.com/caiotoscano/fakepinterest"
    },
{
    id: 3,
    titleKey: 'proj3_titulo',
    descriptionKey: "proj3_desc",   
    tags: ["Python"],
    repolink: "https://github.com/caiotoscano/Automacao-de-Indicadores-"
},
{
    id: 4,
    titleKey: 'proj4_titulo',
    descriptionKey: 'proj4_desc',
    tags: ["Python"],
    repolink: "https://github.com/caiotoscano/Web-Scraping-Pesquisa-de-Preco"
},
{
    id: 5,
    titleKey: 'proj5_titulo',
    descriptionKey: 'proj5_desc',   
    tags: ["Python"],
    repolink: "https://github.com/caiotoscano/Projeto-Data-Science"
},
{
    id: 6,
    titleKey: 'proj6_titulo',
    descriptionKey: 'proj6_desc',    
    tags: ["Python"],
    repolink: "https://github.com/caiotoscano/CopiaDoFlappyBirdCaioToscano"
}
];
const Projetos = () => {
  const { t } = useLanguage();
  return (
    <AnimatedSection>
    <section
      id="projetos"
      className="bg-gray-800 text-white py-20 px-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          {t.projetosTitulo}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
};

export default Projetos;