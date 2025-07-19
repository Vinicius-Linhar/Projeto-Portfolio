// src/pages/About.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiCode, FiTrendingUp, FiUsers } from 'react-icons/fi';
import aboutPhoto from '../assets/SobreMim.jpg'; // Verifique o nome/extensão da sua foto
import { useTranslation } from 'react-i18next'; // 1. Importamos o hook

const About = () => {
  const { t } = useTranslation(); // 2. Usamos o hook

  // 3. A lista de valores agora usa as traduções
  const values = [
    { icon: <FiCpu />, title: t('about.values.value1_title'), description: t('about.values.value1_desc')},
    { icon: <FiCode />, title: t('about.values.value2_title'), description: t('about.values.value2_desc')},
    { icon: <FiTrendingUp />, title: t('about.values.value3_title'), description: t('about.values.value3_desc')},
    { icon: <FiUsers />, title: t('about.values.value4_title'), description: t('about.values.value4_desc')},
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 }},
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="min-h-screen flex items-center bg-[var(--color-background)] py-16 sm:py-24">
      <motion.div 
        className="container mx-auto px-4 sm:px-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="text-center mb-12">
            {/* 4. Textos do título traduzidos */}
            <h3 className="text-[var(--color-primary)] font-semibold">{t('about.title')}</h3>
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-foreground)]">
              {t('about.subtitle')}
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
                className="absolute -top-4 -left-4 w-full h-full border-2 border-[var(--color-border)] rounded-lg"
                initial={{ rotate: '-3deg' }}
                whileHover={{ rotate: '3deg' }}
                transition={{ type: 'spring', stiffness: 300 }}
            ></motion.div>
            <div className="relative bg-[var(--color-background)] p-2 rounded-lg shadow-lg">
                <img src={aboutPhoto} alt={t('home.name')} className="w-full h-auto object-cover rounded-md"/>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            {/* 5. Parágrafo da biografia traduzido */}
            <p className="text-[var(--color-soft-foreground)] mb-8 text-base lg:text-lg text-center md:text-left" dangerouslySetInnerHTML={{ __html: t('about.bio') }} />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value) => (
                <div key={value.title} className="group flex items-start gap-3 p-4 bg-[var(--color-soft-background)] rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="text-[var(--color-soft-foreground)] text-xl mt-1 group-hover:text-[var(--color-primary)] transition-colors duration-300">{value.icon}</div>
                  <div>
                    <h4 className="font-bold text-[var(--color-foreground)]">{value.title}</h4>
                    <p className="text-sm text-[var(--color-soft-foreground)]">{value.description}</p>
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