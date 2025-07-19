// src/components/ProjectCard.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const cardVariants = { /* ...código inalterado... */ };

const ProjectCard = ({ project, onOpenModal }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="bg-[var(--color-soft-background)] p-6 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
      variants={cardVariants}
    >
      <div className="text-3xl mb-4 text-[var(--color-primary)]">{project.icon}</div>
      <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-2">{project.title}</h3>
      <p className="text-[var(--color-soft-foreground)] text-sm flex-grow">{project.shortDescription}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-semibold px-2 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <button 
        onClick={onOpenModal}
        className="mt-6 w-full bg-transparent border border-[var(--color-primary)] text-[var(--color-primary)] font-bold py-2 px-4 rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
      >
        {t('projects.details_button')}
      </button>
    </motion.div>
  );
};

export default ProjectCard;