import React from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedSection from './AnimatedSection.jsx';
import { TypeAnimation } from 'react-type-animation';
import { useLanguage } from '../context/LanguageContext';
const SobreMim = () => {
    const { t } = useLanguage();
    const fullText = `${t.sobreTexto1}\n\n${t.sobreTexto2}`;
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    return (
    <section ref = {ref} id = "sobre" 
    className = "bg-gray-800 text-white py-20 px-10">
        <div className = "container mx-auto max-w-4xl">
            <h2 className = "text-4xl font-bold text-center mb-12">
                {t.sobreTitulo}
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className = "md:w-1/3">
                <img
                    src = "/fotocaio.JPEG"
                    alt = "Foto do Caião"
                    className = "rounded-full shadow-lg mx-auto"
                    />
                </div>
                <div className = "md:w-2/3 text-lg text-gray-300 leading-relaxed">
                {isInView && (
                    <TypeAnimation
                    key = {t.sobreTexto1}
                    sequence = {[
                        fullText,
                    ]}
                    wrapper = "p"
                    speed = {60}
                    style = {{ whiteSpace: 'pre-line' }}
                    repeat = {0}
                    cursor = {true}
                />
                )}
                </div>
            </div>
        </div>
    </section>
    );
};
export default SobreMim;