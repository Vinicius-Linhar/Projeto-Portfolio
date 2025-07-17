// src/pages/About.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiCode, FiTrendingUp, FiUsers } from 'react-icons/fi';
import aboutPhoto from '../assets/SobreMim.jpg'; // Certifique-se de que o caminho está correto

const values = [
  { icon: <FiCpu />, title: 'Problem Solver', description: 'Abordagem analítica para desafios técnicos complexos.'},
  { icon: <FiCode />, title: 'Clean Code Advocate', description: 'Escrevendo código legível, escalável e eficiente.'},
  { icon: <FiTrendingUp />, title: 'Continuous Learner', description: 'Sempre atualizado com as tecnologias e melhores práticas emergentes.'},
  { icon: <FiUsers />, title: 'Team Collaborator', description: 'Experiência em trabalhar com metodologias ágeis e equipes multifuncionais.'},
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 }},
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    // SUGESTÃO 2: Adicionado um fundo cinza claro para a seção
    <section id="about" className="min-h-screen flex items-center bg-gray-50 py-16 sm:py-24">
      <motion.div 
        className="container mx-auto px-4 sm:px-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="text-center mb-12">
            <h3 className="text-teal-500 font-semibold">SOBRE MIM</h3>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Um Pouco da Minha Jornada
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            variants={itemVariants} 
            className="relative w-full max-w-sm mx-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.div 
                className="absolute -top-4 -left-4 w-full h-full border-2 border-gray-200 rounded-lg"
                initial={{ rotate: '-3deg' }}
                whileHover={{ rotate: '3deg' }}
                transition={{ type: 'spring', stiffness: 300 }}
            ></motion.div>
            <div className="relative bg-white p-2 rounded-lg shadow-lg">
                <img src={aboutPhoto} alt="Vinicius Linhar" className="w-full h-auto object-cover rounded-md"/>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-gray-600 mb-8 text-base lg:text-lg text-center md:text-left">
              Com mais de X anos de experiência em desenvolvimento, minha paixão é transformar problemas complexos em soluções simples e bonitas. Eu acredito em código bem escrito, aprendizado contínuo e no poder da colaboração para criar produtos incríveis.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value) => (
                // SUGESTÃO 1: Adicionadas classes de 'group' e 'hover' para mais interatividade
                <div key={value.title} className="group flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  {/* O ícone agora muda de cor no hover do 'group' (o card todo) */}
                  <div className="text-gray-400 text-xl mt-1 group-hover:text-teal-500 transition-colors duration-300">{value.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-800">{value.title}</h4>
                    <p className="text-sm text-gray-500">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;