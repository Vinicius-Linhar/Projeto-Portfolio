// src/pages/Home.jsx

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiDownload, FiArrowRight, FiArrowDown } from 'react-icons/fi';
import { FaCode } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const skills = t('home.skills', { returnObjects: true }) || []; // Garante que 'skills' seja sempre um array
  
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  useEffect(() => {
    if (skills.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentSkillIndex(prevIndex => (prevIndex + 1) % skills.length);
      }, 3000);
      return () => clearInterval(intervalId);
    }
  }, [skills]);

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } } };
  const textAnimationVariants = { initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 }, exit: { y: -20, opacity: 0 } };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[var(--color-soft-background)] overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[60rem] bg-[var(--color-primary)]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-8 py-24">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="md:w-1/2 text-center md:text-left">
            <motion.span variants={itemVariants} className="inline-block bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-semibold px-3 py-1 rounded-full mb-4">● {t('home.available')}</motion.span>
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-foreground)] leading-tight">{t('home.greeting')} <br /><span className="text-[var(--color-primary)]">{t('home.name')}</span></motion.h1>
            <motion.h2 variants={itemVariants} className="text-2xl lg:text-3xl font-light text-[var(--color-soft-foreground)] mt-4">{t('home.role')}</motion.h2>
            <motion.p variants={itemVariants} className="text-sm text-[var(--color-soft-foreground)] mt-6 h-6">{t('home.specializedIn')} {' '}<AnimatePresence mode="wait"><motion.strong key={currentSkillIndex} variants={textAnimationVariants} initial="initial" animate="animate" exit="exit" className="font-semibold text-[var(--color-foreground)] inline-block">{skills[currentSkillIndex]}</motion.strong></AnimatePresence></motion.p>
            
            {/* A CORREÇÃO FOI AQUI: Removido o '-' da tag de fechamento */}
            <motion.p variants={itemVariants} className="text-base text-[var(--color-soft-foreground)] mt-6 max-w-md mx-auto md:mx-0">
              {t('home.bio')}
            </motion.p>
            
            <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="projects" smooth={true} offset={-80} duration={500} className="cursor-pointer bg-[var(--color-primary)] text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center gap-2">{t('home.viewProjects')} <FiArrowRight /></Link>
              <a href="/CV-Vinicius-Linhar.pdf" download className="cursor-pointer bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-foreground)] font-bold py-3 px-6 rounded-lg hover:bg-[var(--color-soft-background)] transition-all duration-300 transform hover:scale-105 shadow-sm flex items-center justify-center gap-2">
                {t('home.downloadCv')} <FiDownload />
              </a>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="md:w-1/2 flex items-center justify-center mt-12 md:mt-0">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <div className="absolute inset-0 border-2 border-[var(--color-primary)]/40 border-dashed rounded-full spin-slow-custom"></div>
              <div className="absolute inset-8 border border-[var(--color-primary)]/20 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 sm:w-56 sm:h-56 bg-[var(--color-background)] rounded-full shadow-2xl flex items-center justify-center"><FaCode className="text-6xl sm:text-8xl text-[var(--color-primary)]" /></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div variants={itemVariants} className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2 text-[var(--color-soft-foreground)]"><FiArrowDown /><span className="text-sm">{t('home.scroll')}</span></motion.div>
      </div>
    </section>
  );
};
export default Home;