import React, {useState} from 'react';
import { motion } from 'framer-motion';
const Contato = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });


const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário enviados: ', formData);

    setFormData({name: '', email: '', message: '' });
};

return (
    <motion.section 
    id = "contato" className = "bg-gray-900 text-white py-20 px-10"
        initial = {{ opacity: 0, y: 50}}
        whileInView = {{ opacity: 1, y: 0}}
        transition = {{ duration: 0.6}}
        viewport = {{once: true}}
    >
        <div className = "container mx-auto max-w-2xl text-center">
            <h2 className = "text-4xl font-bold mb-4"> Vamos conversar?</h2>
            <p className = "text-gray-400 mb-8">
                Adoraria saber mais em que posso ajudar.
            </p>
            <form onSubmit={handleSubmit} className = "space-y-6 text-left">
                <div>
                    <label htmlFor = "name" className = "block mb-2 text-sm font-medium text-gray-300"> Seu nome</label>
                    <input
                    type = "text"
                    id = "name"
                    name = "name"
                    value = {formData.name}
                    onChange = {handleChange}
                    required
                    className = "w-full p-2.5 bg-gray-800 border border-gray-600 rounded-lg text-white focus: ring-violet-500 focus:border-violet-500"/>             
                </div>
                <div>
                    <label htmlFor = "email" className = "block mb-2 text-sm font-medium text-gray-300"> Seu Email</label>
                    <input
                type = "email"
                id = "email"
                name = "email"
                value = {formData.email}
                onChange = {handleChange}
                required
                className = "w-full p-2.5 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-violet-500 focus:border-violet-500"/>
                </div>
                <div>
                <label htmlFor="message" className = "block mb-2 text-sm font-medium text-gray-300">Sua mensagem</label>
                <textarea
                id = "message"
                name = "message"
                rows = "4"
                value = {formData.message}
                onChange = {handleChange}
                required
                className = "w-full p-2.5 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-violet-500 focus:border-violet-500"></textarea>
                </div>
                <button type = "submit" className = "w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-5 rounded-lg transition-colors">
                Enviar mensagem
                </button>
            </form>
        </div>
    </motion.section>
);
};

export default Contato;
