// src/pages/Skills.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiReact, SiNodedotjs, SiPython, SiJavascript, SiTailwindcss, SiPostgresql, SiHtml5, SiCss3, SiGit, SiGithub } from 'react-icons/si';
import { FaBrain } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // 1. Importamos o hook

const Skills = () => {
  const { t } = useTranslation(); // 2. Usamos o hook

  // 3. A lista de Habilidades agora busca os dados do arquivo de tradução
  const skillsData = [
    { name: 'HTML5 & CSS3', icon: <div className="flex gap-3"><SiHtml5 /><SiCss3 /></div>, description: t('skills.desc.html_css'), category: 'Frontend' },
    { name: 'JavaScript', icon: <SiJavascript />, description: t('skills.desc.javascript'), category: 'Frontend' },
    { name: 'Lógica & Algoritmos', icon: <FaBrain />, description: t('skills.desc.logic'), category: 'Backend' },
    { name: 'Python', icon: <SiPython />, description: t('skills.desc.python'), category: 'Backend' },
    { name: 'Git & GitHub', icon: <div className="flex gap-3"><SiGit /><SiGithub /></div>, description: t('skills.desc.git'), category: 'Tools'},
    { name: 'Bancos de Dados', icon: <SiPostgresql />, description: t('skills.desc.database'), category: 'Database' },
    { name: 'React', icon: <SiReact />, description: t('skills.desc.react'), category: 'Frontend' },
    { name: 'Node.js', icon: <SiNodedotjs />, description: t('skills.desc.node'), category: 'Backend' },
  ];

  const cardVariants = { /* ...código inalterado... */ };

  const [activeFilter, setActiveFilter] = useState('Todos');
  const categories = ['Todos', 'Frontend', 'Backend', 'Database', 'Tools'];
  const filteredSkills = activeFilter === 'Todos' ? skillsData : skillsData.filter(skill => skill.category === activeFilter);

  return (
    <section id="skills" className="min-h-screen flex items-center bg-[var(--color-soft-background)] py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-8">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5 }}>
          {/* 4. Títulos traduzidos */}
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">{t('skills.title')}</h2>
          <p className="text-lg text-[var(--color-soft-foreground)] mt-2">{t('skills.subtitle')}</p>
          <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto mt-4"></div>
        </motion.div>

        <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                activeFilter === category 
                ? 'bg-[var(--color-primary)] text-white shadow-md' 
                : 'bg-[var(--color-background)] text-[var(--color-soft-foreground)] hover:bg-[var(--color-border)]'
              }`}
            >
              {/* 5. Categorias dos botões traduzidas */}
              {t(`skills.categories.${category.toLowerCase()}`)}
            </button>
          ))}
        </div>

        <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                className="bg-[var(--color-background)] p-6 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center"
                layout variants={cardVariants} initial="hidden" animate="visible" exit="exit"
              >
                <div className="text-5xl mb-4 text-[var(--color-soft-foreground)]">{skill.icon}</div>
                <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-4">{skill.name}</h3>
                <p className="text-sm text-[var(--color-soft-foreground)] h-full flex items-center">{skill.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;