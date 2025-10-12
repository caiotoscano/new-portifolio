import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../context/LanguageContext';
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
      className="bg-gray-900 text-white py-20 px-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          {t.habilidadesTitulo}
        </h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg transition-transform duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.1, backgroundColor: '#5b21b6' }} // Efeito de hover melhorado
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="h-20 w-20 mb-4" />
            <p className="text-xl font-medium">Python</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg transition-transform duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.1, backgroundColor: '#5b21b6' }}
          >
            <img src="/excel.png" alt="excel" className="h-20 w-20 mb-4" />
            <p className="text-xl font-medium">Excel</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg transition-transform duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.1, backgroundColor: '#5b21b6' }}
          >
            <img src="data_science.png" alt="Data Science" className="h-20 w-20 mb-4" />
            <p className="text-xl font-medium">Data-science</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg transition-transform duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.1, backgroundColor: '#5b21b6' }}
          >
            <img src="/powerbi.png" alt="Power BI" className="h-20 w-20 mb-4" />
            <p className="text-xl font-medium">Power BI</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg transition-transform duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.1, backgroundColor: '#5b21b6' }}
          >
            <img src="/sql-server.png" alt="SQL" className="h-20 w-20 mb-4" />
            <p className="text-xl font-medium">sql</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
    </AnimatedSection>
  );
};

export default Habilidades;