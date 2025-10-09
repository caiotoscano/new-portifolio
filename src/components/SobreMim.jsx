import React from 'react';
import { motion } from 'framer-motion';
const SobreMim = () => {
    return (
    <motion.section id = "sobre" 
    className = "bg-gray-800 text-white py-20 px-10"
        initial = {{ opacity: 0, y: 50}}
        whileInView = {{ opacity: 1, y: 0}}
        transition = {{ duration: 0.6}}
        viewport = {{once: true}}
        >
        <div className = "container mx-auto max-w-4xl">
            <h2 className = "text-4xl font-bold text-center mb-12">
                Um pouco sobre minha história.
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
                {/*Coluna da imagem*/}
                <div className = "md:w-1/3">
                <img
                    src = "/fotocaio.JPEG"
                    alt = "Foto do Caião"
                    className = "rounded-full shadow-lg mx-auto"
                    />
                </div>
                {/*Coluna do Texto*/}
                <div className = "md:w-2/3 text-lg text-gray-300 leading-relaxed">
                    <p className = "mb-4">
                    Olá, sou o Caio. Sou um entusiasta da tecnologia, fascinado por todo o ecossistema computacional, 
                    do hardware ao software. Cursando o 8º semestre de Engenharia da Computação, 
                    já coloco meu conhecimento em prática no mercado: há 1 ano e 4 meses, 
                    atuo como estagiário na Urgo Medical Brazil, 
                    uma multinacional do setor de saúde. Essa experiência, 
                    somada a um aprendizado contínuo com algumas formações especializadas, 
                    me permite aprofundar cada vez mais no universo dos dados.
                    </p>
                    <p>
                    Trabalho para construir uma carreira sólida para me tornar um especialista em quem as pessoas confiam quando o assunto é dados. 
                    Sou movido por uma grande ambição de resolver problemas complexos e acredito que a melhor solução nasce da integração inteligente de diferentes ferramentas e tecnologias. 
                    Meu foco é aplicar inteligência de dados para transformá-los em decisões estratégicas, sempre comprometido com a entrega de resultados que fazem a diferença.
                    </p>
                </div>
            </div>
        </div>
    </motion.section>
    );
};
export default SobreMim;