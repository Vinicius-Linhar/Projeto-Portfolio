// src/components/ProjectModal.jsx

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const backdropVariants = { /* ...código inalterado... */ };
const modalVariants = { /* ...código inalterado... */ };

const ProjectModal = ({ project, onClose }) => {
  const { t } = useTranslation();
  useEffect(() => { /* ...código inalterado... */ }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4" variants={backdropVariants} initial="hidden" animate="visible" exit="exit" onClick={onClose}>
        <motion.div className="bg-[var(--color-background)] rounded-lg shadow-2xl max-w-2xl w-full mx-auto" variants={modalVariants} onClick={(e) => e.stopPropagation()}>
          <div className="p-6 relative">
            <button onClick={onClose} className="absolute top-4 right-4 bg-[var(--color-soft-background)] rounded-full p-1 text-[var(--color-foreground)] hover:bg-[var(--color-border)]">
              <FiX size={20} />
            </button>
            <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-2 mr-8">{project.title}</h2>
            <p className="text-[var(--color-soft-foreground)] mb-4">{project.longDescription}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-semibold px-2 py-1 rounded-full">{tag}</span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-[var(--color-primary)] text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-80 transition-all flex items-center justify-center gap-2">
                {t('modal.live_demo')} <FiExternalLink />
              </a>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="bg-[var(--color-soft-background)] text-[var(--color-foreground)] font-bold py-2 px-6 rounded-lg hover:bg-[var(--color-border)] transition-all flex items-center justify-center gap-2">
                {t('modal.view_code')} <FiGithub />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;