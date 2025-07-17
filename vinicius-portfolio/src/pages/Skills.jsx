// src/pages/Skills.jsx

import React from 'react';
import { motion } from 'framer-motion';
// Ícones do HTML5 e CSS3 estão na importação
import { SiReact, SiNodedotjs, SiPython, SiJavascript, SiTailwindcss, SiPostgresql, SiHtml5, SiCss3 } from 'react-icons/si';

// A lista de dados com o item para HTML & CSS
const skillsData = [
  // O item que não estava aparecendo antes está aqui
  { 
    name: 'HTML5 & CSS3', 
    icon: <div className="flex gap-3"><SiHtml5 /><SiCss3 /></div>, 
    description: 'Estruturação semântica e estilização para criar interfaces web ricas e acessíveis.' 
  },
  { name: 'JavaScript', icon: <SiJavascript />, description: 'ES6+ moderno e programação assíncrona.' },
  { name: 'React', icon: <SiReact />, description: 'Arquitetura de componentes e gerenciamento de estado.' },
  { name: 'Node.js', icon: <SiNodedotjs />, description: 'Desenvolvimento de backend e design de APIs.' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, description: 'Design responsivo e estilização de componentes.' },
  { name: 'Python', icon: <SiPython />, description: 'Análise de dados e automação de scripts.' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, description: 'Gerenciamento de banco de dados relacional e queries complexas.' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">Habilidades Técnicas</h2>
          <p className="text-lg text-gray-500 mt-2">
            Ferramentas e tecnologias que utilizo para construir soluções digitais.
          </p>
          <div className="w-24 h-1 bg-teal-500 mx-auto mt-4"></div>
        </motion.div>

        <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.1 }}
        >
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              className="bg-gray-50/50 p-6 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
              variants={cardVariants}
            >
              <div className="text-5xl mb-4 text-gray-700">{skill.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{skill.name}</h3>
              <p className="text-sm text-gray-600 h-full flex items-center">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;