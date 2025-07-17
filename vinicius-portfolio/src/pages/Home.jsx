// src/pages/Home.jsx

// --- NOVO: Hooks e componentes de animação adicionados ---
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
// ---------------------------------------------------------

import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiArrowDown } from 'react-icons/fi';
import { FaCode } from 'react-icons/fa';

const Home = () => {
  // --- NOVO: Lógica para o texto dinâmico ---
  const skills = [
    'React & Node.js',
    'JavaScript ',
    'HTML & CSS',
    'SQL',
    'APIs RESTful'
  ];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSkillIndex(prevIndex => (prevIndex + 1) % skills.length);
    }, 3000); // Muda a cada 3 segundos
    return () => clearInterval(intervalId);
  }, []);
  // --- FIM da lógica ---

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  // --- NOVO: Variantes para a animação do texto ---
  const textAnimationVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
    exit: { y: -20, opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 py-24">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* --- COLUNA DA ESQUERDA (Textos e Botões) --- */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.span variants={itemVariants} className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              ● Disponível para oportunidades
            </motion.span>
            
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Olá, eu sou <br />
              <span className="text-teal-500">Vinicius Linhar</span>
            </motion.h1>

            <motion.h2 variants={itemVariants} className="text-2xl lg:text-3xl font-light text-gray-600 mt-4">
              Full-Stack Developer
            </motion.h2>

            {/* --- ÁREA DO TEXTO DINÂMICO --- */}
            {/* Adicionei h-6 para evitar que o layout "pule" quando o texto muda */}
            <motion.p variants={itemVariants} className="text-sm text-gray-500 mt-6 h-6">
              Especializado em {' '}
              <AnimatePresence mode="wait">
                <motion.strong
                  key={skills[currentSkillIndex]} // A 'key' é essencial para a animação
                  variants={textAnimationVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="font-semibold text-gray-700 inline-block"
                >
                  {skills[currentSkillIndex]}
                </motion.strong>
              </AnimatePresence>
            </motion.p>
            {/* --- FIM DA ÁREA DO TEXTO DINÂMICO --- */}

            <motion.p variants={itemVariants} className="text-base text-gray-600 mt-6 max-w-md mx-auto md:mx-0">
              Eu crio aplicações web e mobile modernas e responsivas que entregam experiências de usuário excepcionais e impulsionam o crescimento de negócios.
            </motion.p>

            {/* Botões de Ação */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="projects" smooth={true} offset={-80} duration={500} className="cursor-pointer bg-teal-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center gap-2">
                Ver Meus Projetos <FiArrowRight />
              </Link>
              <a href="/seu-curriculo.pdf" download className="cursor-pointer bg-white border border-gray-300 text-gray-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-sm flex items-center justify-center gap-2">
                Download CV <FiDownload />
              </a>
            </motion.div>
          </div>

          {/* --- COLUNA DA DIREITA (Elemento Gráfico) --- */}
          <motion.div variants={itemVariants} className="md:w-1/2 flex items-center justify-center mt-12 md:mt-0">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <div className="absolute inset-0 border-2 border-teal-400 border-dashed rounded-full spin-slow-custom"></div>
              <div className="absolute inset-8 border border-teal-200 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 sm:w-56 sm:h-56 bg-white rounded-full shadow-2xl flex items-center justify-center">
                    <FaCode className="text-6xl sm:text-8xl text-teal-500" />
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* --- SCROLL TO EXPLORE --- */}
        <motion.div 
            variants={itemVariants} 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2 text-gray-500"
        >
            <FiArrowDown />
            <span className="text-sm">Role para explorar</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;