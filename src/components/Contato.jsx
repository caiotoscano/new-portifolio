import React, {useState} from 'react';
import AnimatedSection from './AnimatedSection';
import { useLanguage } from '../context/useLanguage'
const Contato = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

const [isSubmitting, setIsSubmitting] = useState(false);
const [resultMessage, setResultMessage] = useState('');
const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResultMessage('');
    const data = new FormData();
    data.append('access_key', '1d50d3b2-ede9-4d94-bc05-7c652f020ed4');
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('message', formData.message);
    data.append('subject', `Novo Contato de ${formData.name} (Portfólio)`);
    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: data,
        });
    const result = await response.json();
    if (result.success) {
        setResultMessage(t.contatoSucesso);
        setFormData({name: '', email:'', message: ''});
    } else{
        console.error("Erro do servidor:", result);
        setResultMessage(t.contatoErroServidor);
    }
}catch (error){
    console.error("Erro de rede:", error);
    setResultMessage(t.contatoErroRede);
} finally {
    setIsSubmitting(false);
}
};

return (
    <AnimatedSection>
    <section 
    id = "contato" className = "bg-gray-900 text-white pt-2 sm:pt-4 pb-16 sm:pb-20 px-5 sm:px-8 lg:px-10">
        <div className = "container mx-auto max-w-2xl text-center">
            <h2 className = "text-3xl sm:text-4xl font-bold mb-4 leading-tight">{t.contatoTitulo}</h2>
            <p className = "text-gray-400 mb-8 text-sm sm:text-base">
                {t.contatoSubtitulo}
            </p>
            <form onSubmit={handleSubmit} className = "space-y-6 text-left">
                <div>
                    <label htmlFor = "name" className = "block mb-2 text-sm font-medium text-gray-300">{t.contatoNome}</label>
                    <input
                    type = "text"
                    id = "name"
                    name = "name"
                    value = {formData.name}
                    onChange = {handleChange}
                    required
                    className = "w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-violet-500 focus:border-violet-500"/>             
                </div>
                <div>
                    <label htmlFor = "email" className = "block mb-2 text-sm font-medium text-gray-300">{t.contatoEmail}</label>
                    <input
                type = "email"
                id = "email"
                name = "email"
                value = {formData.email}
                onChange = {handleChange}
                required
                className = "w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-violet-500 focus:border-violet-500" />
                </div>
                <div>
                <label htmlFor="message" className = "block mb-2 text-sm font-medium text-gray-300">{t.contatoMensagem}</label>
                <textarea
                id = "message"
                name = "message"
                rows = "4"
                value = {formData.message}
                onChange = {handleChange}
                required
                className = "w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-violet-500 focus:border-violet-500"></textarea>
                </div>
                <button type = "submit"
                disabled = {isSubmitting}
                 className = "w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-5 rounded-lg transition-colors"
                 >
                {isSubmitting ? t.contatoEnviando : t.contatoEnviar}
                </button>
                {resultMessage && (
                    <p className = "text-center mt-4">{resultMessage}</p>
                )}
            </form>
        </div>
    </section>
    </AnimatedSection>
);
};

export default Contato;
