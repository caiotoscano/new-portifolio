import React from 'react';
import { motion as Motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../context/useLanguage';

const certificates = [
  {
    id: 'python',
    titleKey: 'certPythonTitulo',
    images: {
      pt: '/certificates/python-pt.png',
      en: '/certificates/python-en.png',
    },
  },
  {
    id: 'data-science',
    titleKey: 'certDataScienceTitulo',
    images: {
      pt: '/certificates/data-science-pt.png',
      en: '/certificates/data-science-en.png',
    },
  },
  {
    id: 'power-bi',
    titleKey: 'certPowerBiTitulo',
    images: {
      pt: '/certificates/power-bi-pt.png',
      en: '/certificates/power-bi-en.png',
    },
  },
  {
    id: 'algorithms',
    titleKey: 'certAlgorithmsTitulo',
    images: {
      pt: '/certificates/algorithms-pt.png',
      en: '/certificates/algorithms-en.png',
    },
  },
  {
    id: 'javascript',
    titleKey: 'certJavaScriptTitulo',
    images: {
      pt: '/certificates/javascript-pt.png',
      en: '/certificates/javascript-en.png',
    },
  },
  {
    id: 'vba',
    titleKey: 'certVbaTitulo',
    images: {
      pt: '/certificates/vba-pt.png',
      en: '/certificates/vba-en.png',
    },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { y: 28, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Certificados = () => {
  const { language, t } = useLanguage();

  return (
    <AnimatedSection>
      <section
        id="certificados"
        className="bg-gray-800 text-white py-16 sm:py-20 px-5 sm:px-8 lg:px-10"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 leading-tight">
            {t.certificadosTitulo}
          </h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed text-sm sm:text-base">
            {t.certificadosTexto}
          </p>

          <Motion.div
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {certificates.map((certificate) => {
              const image = certificate.images[language];

              return (
                <Motion.article
                  key={certificate.id}
                  className="group overflow-hidden rounded-2xl border border-violet-700/30 bg-gray-900 shadow-xl shadow-gray-950/30"
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                >
                  <div className="border-b border-violet-700/20 px-5 py-4">
                    <h3 className="text-lg sm:text-xl font-bold text-violet-300 leading-tight">
                      {t[certificate.titleKey]}
                    </h3>
                  </div>
                  <a
                    href={image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gray-950/60 p-3"
                  >
                    <img
                      src={image}
                      alt={t[certificate.titleKey]}
                      loading="lazy"
                      className="aspect-[842/595] w-full rounded-lg object-cover shadow-lg transition-transform duration-500 group-hover:scale-[1.025]"
                    />
                  </a>
                </Motion.article>
              );
            })}
          </Motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Certificados;
