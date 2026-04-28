import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { useLanguage } from '../context/useLanguage';

const cardThemes = {
  default: {
    front: 'bg-gray-800 sm:bg-gray-900 border border-gray-700/70 sm:border-0',
    frontTitle: 'text-violet-400',
    back: 'bg-violet-700 sm:bg-violet-800',
    button: 'bg-gray-800 hover:bg-black sm:bg-gray-900',
  },
  dataScience: {
    front: 'bg-sky-900 sm:bg-sky-950/90 border border-sky-600/60 sm:border-sky-700/50',
    frontTitle: 'text-sky-300',
    back: 'bg-sky-600 sm:bg-sky-700',
    button: 'bg-sky-900 hover:bg-sky-800 sm:bg-sky-950 sm:hover:bg-sky-900',
  },
};

const ProjectCard = ({ project, theme = 'default' }) => {
  const { t } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false);
  const selectedTheme = cardThemes[theme] ?? cardThemes.default;


  const flipVariants = {
    unflipped: { rotateY: 0 },
    flipped: { rotateY: 180 },
  };

  return (

    <div
      className="w-full h-[26rem] sm:h-80 [perspective:1000px] outline-none"
      role="button"
      tabIndex={0}
      aria-label={t[project.titleKey]}

      onMouseEnter={() => setIsFlipped(true)}

      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((current) => !current)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          setIsFlipped((current) => !current);
        }
      }}
    >
      <Motion.div
        className="relative w-full h-full [transform-style:preserve-3d] transform-gpu"
        style={{ willChange: 'transform' }}
 
        animate={isFlipped ? 'flipped' : 'unflipped'}
        variants={flipVariants}
        transition={{ duration: 0.6 }}
      >

        <div
          className={`absolute w-full h-full rounded-lg shadow-lg flex items-center justify-center p-5 sm:p-6 antialiased ${selectedTheme.front}`}
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'translateZ(1px)',
          }}
        >
          <h3 className={`text-xl sm:text-2xl font-bold text-center leading-tight ${selectedTheme.frontTitle}`}>{t[project.titleKey]}</h3>
        </div>

        <div
          className={`absolute w-full h-full rounded-lg shadow-lg p-5 sm:p-6 flex flex-col antialiased ${selectedTheme.back}`}
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg) translateZ(1px)',
          }}
        >
          <p className="text-gray-50 text-sm sm:text-base mb-4 flex-grow break-words overflow-y-auto leading-relaxed">{t[project.descriptionKey]}</p>
          <div className="flex gap-4 mt-auto">
            <a
              href={project.repolink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className={`text-white font-bold py-2 px-4 rounded transition-colors text-sm sm:text-base ${selectedTheme.button}`}
            >
              {t.projetosBotao}
            </a>
          </div>
        </div>
      </Motion.div>
    </div>
  );
};

export default ProjectCard;
