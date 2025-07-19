// src/pages/Projects.jsx
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { FiSmartphone, FiBarChart2 } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t, i18n } = useTranslation();

  const projectsData = useMemo(() => [
    { 
      id: 1,
      icon: <FiSmartphone />, 
      title: t('projects.project1.title'), 
      shortDescription: t('projects.project1.short_desc'),
      longDescription: t('projects.project1.long_desc'),
      tags: ['React Native', 'JavaScript', 'API Integration'],
      liveLink: '#',
      repoLink: '#',
    },
    { 
      id: 2,
      icon: <FiBarChart2 />, 
      title: t('projects.project2.title'), 
      shortDescription: t('projects.project2.short_desc'), 
      longDescription: t('projects.project2.long_desc'),
      tags: ['HTML5', 'CSS3', 'SQL', 'Chart.js'],
      repoLink: '#',
      liveLink: '#',
    },
  ], [i18n.language]);

  const [selectedProject, setSelectedProject] = useState(null);
  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <>
      <section id="projects" className="min-h-screen flex items-center bg-[var(--color-background)] py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-8">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">{t('projects.title')}</h2>
            <p className="text-lg text-[var(--color-soft-foreground)] mt-2">{t('projects.subtitle')}</p>
            <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto mt-4"></div>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} transition={{ staggerChildren: 0.15 }}>
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={() => handleOpenModal(project)}
              />
            ))}
          </motion.div>
        </div>
      </section>
      <ProjectModal 
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </>
  );
};
export default Projects;