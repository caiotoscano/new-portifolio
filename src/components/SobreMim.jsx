import React from 'react';
import { useInView } from 'framer-motion';
import AnimatedSection from './AnimatedSection.jsx';
import { TypeAnimation } from 'react-type-animation';
import { useLanguage } from '../context/useLanguage';
const SobreMim = () => {
    const { t } = useLanguage();
    const fullText = `${t.sobreTexto1}\n\n${t.sobreTexto2}`;
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    return (
    <section ref = {ref} id = "sobre" 
    className = "bg-gray-800 text-white py-16 sm:py-20 px-5 sm:px-8 lg:px-10">
        <div className = "container mx-auto max-w-4xl">
            <h2 className = "text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12 leading-tight">
                {t.sobreTitulo}
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className = "md:w-1/3">
                <img
                    src = "/fotocaio.JPEG"
                    alt = "Foto do Caião"
                    className = "rounded-full shadow-lg mx-auto h-44 w-44 sm:h-56 sm:w-56 md:h-auto md:w-auto object-cover"
                    />
                </div>
                <div className = "relative md:w-2/3 text-base sm:text-lg text-gray-300 leading-relaxed text-left">
                    <p className="invisible whitespace-pre-line">
                        {fullText}
                    </p>
                    <div className="absolute inset-0">
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
        </div>
    </section>
    );
};
export default SobreMim;
