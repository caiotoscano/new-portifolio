import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const ProjectCard = ({ project }) => {
  const { t } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false);


  const flipVariants = {
    unflipped: { rotateY: 0 },
    flipped: { rotateY: 180 },
  };

  return (

    <div 
      className="w-full h-80 [perspective:1000px]"

      onMouseEnter={() => setIsFlipped(true)}

      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d]"
 
        animate={isFlipped ? 'flipped' : 'unflipped'}
        variants={flipVariants}
        transition={{ duration: 0.6 }}
      >

        <div className="absolute w-full h-full [backface-visibility:hidden] bg-gray-900 rounded-lg shadow-lg flex items-center justify-center p-6">
          <h3 className="text-2xl font-bold text-center text-violet-400">{t[project.titleKey]}</h3>
        </div>

        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-violet-800 rounded-lg shadow-lg p-6 flex flex-col">
          <p className="text-gray-200 mb-4 flex-grow break-words">{t[project.descriptionKey]}</p>
          <div className="flex gap-4 mt-auto">
            <a href={project.repolink} target="_blank" rel="noopener noreferrer" className="bg-gray-900 hover:bg-black text-white font-bold py-2 px-4 rounded transition-colors">
              {t.projetosBotao}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;