import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard.jsx';

const projects = [
    {
        id: 1,
        title: 'Controle de acesso a laboratórios',
        description: "Aplicação desktop desenvolvida em C# com Windows Forms para gerenciar o acesso de usuários a laboratórios acadêmicos. O sistema inclui controle de permissões por nível de usuário, registros de entrada/saída e logs de auditoria. Projeto acadêmico com nota final de 9.5/10.0",
        tags: ["C#", "SQLite", "Windows Forms", "Git & GitHub"],
        repolink: "https://github.com/caiotoscano/controle-acesso-laboratorios"
    },
    {
        id: 2,
        title: 'Criando fake pinterest',
        description: "Desenvolvido como um laboratório prático, o objetivo deste projeto foi criar do zero uma base de código sólida para autenticação e gerenciamento de perfis. A aplicação implementa as funcionalidades essenciais de registro, login e atualização de dados do usuário, conectando a interface (HTML) a um banco de dados.",
        tags: ["HTML", "CSS", "Python"],
        repolink: "https://github.com/caiotoscano/fakepinterest"
    },
{
    id: 3,
    title: 'Automação de indicadores',
    description: 'Projeto de automação de processos (RPA) que simula a otimização de uma rotina corporativa. A aplicação calcula indicadores de desempenho para uma rede de lojas, gerando e enviando automaticamente relatórios "One Page" para gerentes e um resumo com rankings para a diretoria, eliminando a tarefa manual diária.',
    tags: ["Python"],
    repolink: "https://github.com/caiotoscano/Automacao-de-Indicadores-"
},
{
    id: 4,
    title: 'Web Scraping - Busca de preço',
    description: 'Um robô de web scraping que automatiza a pesquisa e comparação de preços de produtos na web. O script foi programado para extrair dados de e-commerces, filtrar os resultados por uma faixa de valor definida e apresentar as melhores ofertas, consolidando habilidades em automação e extração de dados.',
    tags: ["Python"],
    repolink: "https://github.com/caiotoscano/Web-Scraping-Pesquisa-de-Preco"
},
{
    id: 5,
    title: 'Projeto Airbnb - Ferramenta de Previsão de Preço de Imóvel',
    description: 'Um projeto de Machine Learning para prever o valor de imóveis com base em suas características (como área, quartos, etc.). Utilizando a biblioteca Scikit-learn, foi treinado um modelo de árvore de decisão para analisar os dados e realizar estimativas de preço de forma automatizada, aplicando os fundamentos da modelagem preditiva.',
    tags: ["Python"],
    repolink: "https://github.com/caiotoscano/Projeto-Data-Science"
},
{
    id: 6,
    title: 'Cópia do Flappy bird - Desenvolvimento de jogos',
    description: 'Uma recriação do icônico jogo Flappy Bird, desenvolvida do zero utilizando apenas Python. O projeto foi um estudo prático para implementar a arquitetura de um jogo 2D, incluindo a física de gravidade e pulo, geração procedural de obstáculos, detecção de colisões e o sistema de pontuação.',
    tags: ["Python"],
    repolink: "https://github.com/caiotoscano/CopiaDoFlappyBirdCaioToscano"
}
];
const Projetos = () => {
  return (
    <motion.section
      id="projetos"
      className="bg-gray-800 text-white py-20 px-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          Meus Projetos
        </h2>

        {/* 2. O layout da grade volta a ser simples. */}
        {/* 'md:grid-cols-2 lg:grid-cols-3' -> 2 colunas em telas médias, 3 em telas grandes. */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* 3. O map agora é super limpo! Para cada projeto, ele apenas renderiza um <ProjectCard /> */}
          {/* e passa os dados do projeto ('project') para dentro dele. */}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projetos;