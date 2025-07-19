// src/pages/Contact.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiMapPin, FiClock, FiCopy, FiCheck } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [isCopied, setIsCopied] = useState(false);
  const userEmail = 'vinicius.linhar17@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(userEmail);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center bg-[var(--color-background)] py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">{t('contact.title')}</h2>
          <p className="text-lg text-[var(--color-soft-foreground)] mt-2">
            {t('contact.subtitle')}
          </p>
          <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.form 
            action="https://formspree.io/f/xrblbvon" 
            method="POST"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-[var(--color-soft-foreground)] font-semibold mb-2">{t('contact.form_name')}</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-[var(--color-border)] rounded-lg bg-[var(--color-soft-background)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-[var(--color-soft-foreground)] font-semibold mb-2">{t('contact.form_email')}</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-[var(--color-border)] rounded-lg bg-[var(--color-soft-background)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-[var(--color-soft-foreground)] font-semibold mb-2">{t('contact.form_message')}</label>
              <textarea id="message" name="message" rows="5" required className="w-full px-4 py-2 border border-[var(--color-border)] rounded-lg bg-[var(--color-soft-background)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"></textarea>
            </div>
            <button type="submit" className="w-full bg-[var(--color-primary)] text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-80 transition-all duration-300 shadow-md">
              {t('contact.form_submit')}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="p-6 bg-[var(--color-soft-background)] rounded-lg flex items-start gap-4">
              <FiMail className="text-2xl text-[var(--color-primary)] mt-1" />
              <div>
                <h4 className="font-bold text-[var(--color-foreground)]">{t('contact.info_email')}</h4>
                <button 
                  onClick={handleCopyEmail}
                  className="text-[var(--color-soft-foreground)] hover:text-[var(--color-primary)] transition-colors text-left flex items-center gap-2"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={isCopied ? 'copied' : 'copy'}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-2"
                    >
                      {isCopied ? (
                        <>
                          <FiCheck className="text-green-500" />
                          Email copiado!
                        </>
                      ) : (
                        <>
                          {userEmail}
                          <FiCopy />
                        </>
                      )}
                    </motion.span>
                  </AnimatePresence>
                </button>
              </div>
            </div>
            <div className="p-6 bg-[var(--color-soft-background)] rounded-lg flex items-start gap-4">
              <FiMapPin className="text-2xl text-[var(--color-primary)] mt-1" />
              <div>
                <h4 className="font-bold text-[var(--color-foreground)]">{t('contact.info_location')}</h4>
                <p className="text-[var(--color-soft-foreground)]">Florianópolis, SC - {t('contact.info_location_desc')}</p>
              </div>
            </div>
            <div className="p-6 bg-[var(--color-soft-background)] rounded-lg flex items-start gap-4">
              <FiClock className="text-2xl text-[var(--color-primary)] mt-1" />
              <div>
                <h4 className="font-bold text-[var(--color-foreground)]">{t('contact.info_response')}</h4>
                <p className="text-[var(--color-soft-foreground)]">{t('contact.info_response_desc')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;