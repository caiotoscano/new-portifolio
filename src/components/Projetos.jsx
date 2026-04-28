import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import AnimatedSection from './AnimatedSection.jsx';
import { useLanguage } from '../context/useLanguage';

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
        id: 6,
        titleKey: 'proj6_titulo',
        descriptionKey: 'proj6_desc',    
        tags: ["Python"],
        repolink: "https://github.com/caiotoscano/CopiaDoFlappyBirdCaioToscano"
    },
];

const dataScienceProjects = [
    {
        id: 5,
        titleKey: 'proj5_titulo',
        descriptionKey: 'proj5_desc',   
        tags: ["Python"],
        repolink: "https://github.com/caiotoscano/Projeto-Data-Science"
    },
    {
        id: 7,
        titleKey: 'proj7_titulo',
        descriptionKey: 'proj7_desc',
        tags: ["Python", "Pandas", "Scikit-learn"],
        repolink: "https://github.com/caiotoscano/Clustering-Customer-Segmentation"
    },
    {
        id: 8,
        titleKey: 'proj8_titulo',
        descriptionKey: 'proj8_desc',
        tags: ["Python", "Deep Learning", "MNIST"],
        repolink: "https://github.com/caiotoscano/mnist-cnn-deep-learning"
    },
    {
        id: 9,
        titleKey: 'proj9_titulo',
        descriptionKey: 'proj9_desc',
        tags: ["Python", "Machine Learning", "Data Analysis"],
        repolink: "https://github.com/caiotoscano/dataScienceProjetoCaseiFood"
    },
    {
        id: 10,
        titleKey: 'proj10_titulo',
        descriptionKey: 'proj10_desc',
        tags: ["Python", "Regression", "Machine Learning"],
        repolink: "https://github.com/caiotoscano/co2-emissions-prediction"
    },
    {
        id: 11,
        titleKey: 'proj11_titulo',
        descriptionKey: 'proj11_desc',
        tags: ["Python", "Machine Learning", "Fraud Detection"],
        repolink: "https://github.com/caiotoscano/credit-card-fraud-detection"
    },
    {
        id: 12,
        titleKey: 'proj12_titulo',
        descriptionKey: 'proj12_desc',
        tags: ["Python", "People Analytics", "Machine Learning"],
        repolink: "https://github.com/caiotoscano/AnaliseBaseIBM"
    },
];

const Projetos = () => {
  const { t } = useLanguage();

  return (
    <AnimatedSection>
      <section
        id="projetos"
        className="bg-gray-800 text-white pt-16 sm:pt-20 pb-2 sm:pb-4 px-5 sm:px-8 lg:px-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 leading-tight">
            {t.projetosTitulo}
          </h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed text-sm sm:text-base">
            {t.projetosTexto}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-14 sm:mt-20 rounded-2xl sm:rounded-3xl border border-sky-700/40 bg-gradient-to-br from-sky-950 via-sky-900 to-slate-900 p-5 sm:p-8 md:p-10 shadow-2xl shadow-sky-950/30">
            <div className="mb-8 sm:mb-12 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-sky-300 leading-tight">
                {t.projetosDataScienceTitulo}
              </h3>
              <p className="mt-3 text-sky-100/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                {t.projetosDataScienceTexto}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {dataScienceProjects.map((project) => (
                <ProjectCard key={`ds-${project.id}`} project={project} theme="dataScience" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Projetos;
