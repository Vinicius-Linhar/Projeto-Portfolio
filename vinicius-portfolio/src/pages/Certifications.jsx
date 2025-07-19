// src/pages/Certifications.jsx

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiAward, FiBookOpen, FiCopy, FiCheck } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const Certifications = () => {
  const { t, i18n } = useTranslation();
  const [copiedCode, setCopiedCode] = useState(null);

  const certificationsData = useMemo(() => [
    // 1. Adicionamos um 'id' único e estável para cada item
    { id: 1, title: t('certifications.data.bacharelado.title'), issuer: t('certifications.data.bacharelado.issuer'), year: '2025 - Cursando', link: null, type: 'education', status: 'cursando', code: null },
    { id: 2, title: t('certifications.data.programador.title'), issuer: t('certifications.data.programador.issuer'), year: t('certifications.data.programador.year'), link: 'https://ecommerce.sesisenai.org.br/documentos/validar', type: 'education', status: 'link', code: 'DQWIZRIE5W' },
    { id: 3, title: t('certifications.data.python.title'), issuer: t('certifications.data.python.issuer'), year: t('certifications.data.python.year'), link: 'https://ecommerce.sesisenai.org.br/documentos/validar', type: 'certification', status: 'link', code: 'DQB4HMXNOZ' },
    { id: 4, title: t('certifications.data.logica.title'), issuer: t('certifications.data.logica.issuer'), year: t('certifications.data.logica.year'), link: 'https://cursos.sesisenai.org.br/documentos/validar', type: 'certification', status: 'link', code: 'D9W8NCPA3E' },
    { id: 5, title: t('certifications.data.pitch.title'), issuer: t('certifications.data.pitch.issuer'), year: t('certifications.data.pitch.year'), link: 'https://cursos.sesisenai.org.br/documentos/validar', type: 'certification', status: 'link', code: 'DUHQRU7PFZ' },
    { id: 6, title: t('certifications.data.hackathon.title'), issuer: t('certifications.data.hackathon.issuer'), year: t('certifications.data.hackathon.year'), link: 'https://cursos.sesisenai.org.br/documentos/validar', type: 'certification', status: 'link', code: 'DGX19R8WPM' },
  ], [i18n.language]);

  const listVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const itemVariants = { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } };
  
  const renderStatus = (cert) => {
    switch (cert.status) {
        case 'link': return ( <a href={cert.link} target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 text-[var(--color-primary)] hover:opacity-80"> {t('certifications.view_credential')} <FiExternalLink /> </a> );
        case 'cursando': return <span className="text-[var(--color-primary)] font-semibold">{t('certifications.in_progress')}</span>;
        default: return <span className="text-[var(--color-soft-foreground)]">{t('certifications.completed')}</span>;
    }
  }

  const handleCopy = (code, title) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(title);
    setTimeout(() => { setCopiedCode(null); }, 2000);
  };

  return (
    <section id="certifications" className="min-h-screen flex items-center bg-[var(--color-soft-background)] py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">{t('certifications.title')}</h2>
          <p className="text-lg text-[var(--color-soft-foreground)] mt-2">{t('certifications.subtitle')}</p>
          <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto mt-4"></div>
        </motion.div>

        <motion.div className="max-w-4xl mx-auto space-y-4" variants={listVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          {certificationsData.map((cert) => (
            <motion.div
              // 2. Usamos o 'id' como a key, em vez de 'cert.title'
              key={cert.id}
              className="border border-[var(--color-border)] p-4 rounded-lg transition-all duration-300 flex items-center gap-4 sm:gap-6 hover:shadow-md hover:bg-[var(--color-background)] hover:border-[var(--color-primary)]/20"
              variants={itemVariants}
            >
              <div className="text-2xl text-[var(--color-soft-foreground)]">
                {cert.type === 'education' ? <FiBookOpen /> : <FiAward />}
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-[var(--color-foreground)]">{cert.title}</h3>
                <p className="text-sm text-[var(--color-soft-foreground)]">{cert.issuer} • {cert.year}</p>
                {cert.code && (
                  <div className="text-xs text-[var(--color-soft-foreground)] mt-2">
                    <button onClick={() => handleCopy(cert.code, cert.title)} className="font-mono bg-[var(--color-soft-background)] border border-[var(--color-border)] px-2 py-1 rounded-md flex items-center gap-2 hover:bg-[var(--color-border)] transition-colors" aria-label={`Copiar código ${cert.code}`}>
                      {copiedCode === cert.title ? (<><FiCheck className="text-green-500" />Copiado!</>) : (<><FiCopy />{cert.code}</>)}
                    </button>
                  </div>
                )}
              </div>
              <div className="text-sm font-semibold">
                {renderStatus(cert)}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.p className="text-center text-[var(--color-soft-foreground)] mt-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
          {t('certifications.footer_text')}
        </motion.p>
      </div>
    </section>
  );
};

export default Certifications;