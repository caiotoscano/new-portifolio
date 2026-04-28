import React from 'react';
import { motion as Motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../context/useLanguage';
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Habilidades = () => {
  const { t } = useLanguage();
  return (
    <AnimatedSection>
    <section
      id="habilidades"
      className="bg-gray-900 text-white py-16 sm:py-20 px-5 sm:px-8 lg:px-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
          {t.habilidadesTitulo}
        </h2>

        <Motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Motion.div
            className="flex flex-col items-center p-4 sm:p-6 bg-gray-800 rounded-lg transition-transform duration-300 min-h-36 sm:min-h-44"
            variants={itemVariants}
            whileHover={{ scale: 1.1, backgroundColor: '#5b21b6' }}
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="h-14 w-14 sm:h-20 sm:w-20 mb-4" />
            <p className="text-base sm:text-xl font-medium text-center">Python</p>
          </Motion.div>

          <Motion.div
            className="flex flex-col items-center p-4 sm:p-6 bg-gray-800 rounded-lg transition-transform duration-300 min-h-36 sm:min-h-44"
            variants={itemVariants}
            whileHover={{ scale: 1.1, backgroundColor: '#5b21b6' }}
          >
            <img src="/excel.png" alt="excel" className="h-14 w-14 sm:h-20 sm:w-20 mb-4" />
            <p className="text-base sm:text-xl font-medium text-center">Excel</p>
          </Motion.div>

          <Motion.div
            className="flex flex-col items-center p-4 sm:p-6 bg-gray-800 rounded-lg transition-transform duration-300 min-h-36 sm:min-h-44"
            variants={itemVariants}
            whileHover={{ scale: 1.1, backgroundColor: '#5b21b6' }}
          >
            <img src="data_science.png" alt="Data Science" className="h-14 w-14 sm:h-20 sm:w-20 mb-4" />
            <p className="text-base sm:text-xl font-medium text-center break-words">Data Science</p>
          </Motion.div>

          <Motion.div
            className="flex flex-col items-center p-4 sm:p-6 bg-gray-800 rounded-lg transition-transform duration-300 min-h-36 sm:min-h-44"
            variants={itemVariants}
            whileHover={{ scale: 1.1, backgroundColor: '#5b21b6' }}
          >
            <img src="/powerbi.png" alt="Power BI" className="h-14 w-14 sm:h-20 sm:w-20 mb-4" />
            <p className="text-base sm:text-xl font-medium text-center">Power BI</p>
          </Motion.div>

          <Motion.div
            className="flex flex-col items-center p-4 sm:p-6 bg-gray-800 rounded-lg transition-transform duration-300 min-h-36 sm:min-h-44 col-span-2 sm:col-span-1"
            variants={itemVariants}
            whileHover={{ scale: 1.1, backgroundColor: '#5b21b6' }}
          >
            <img src="/sql-server.png" alt="SQL" className="h-14 w-14 sm:h-20 sm:w-20 mb-4" />
            <p className="text-base sm:text-xl font-medium text-center">SQL</p>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
    </AnimatedSection>
  );
};

export default Habilidades;
