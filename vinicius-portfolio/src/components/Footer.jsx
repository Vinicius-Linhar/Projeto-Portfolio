// src/components/Footer.jsx

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // 1. Importamos o hook

const Footer = () => {
    const { t } = useTranslation(); // 2. Usamos o hook
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[var(--color-soft-background)] text-[var(--color-soft-foreground)] py-8">
            <div className="container mx-auto px-4 sm:px-8 text-center">
                <div className="flex justify-center space-x-6 mb-4">
                    
                    <a 
                        href="https://github.com/Vinicius-Linhar" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-[var(--color-primary)] transition-colors"
                        aria-label="GitHub Profile"
                    >
                        <FaGithub size={24} />
                    </a>
                    
                    <a 
                        href="https://www.linkedin.com/in/vinicius-linhar-72b858346/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-[var(--color-primary)] transition-colors"
                        aria-label="LinkedIn Profile"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>
                <p className="text-sm">
                    {/* 3. O texto de copyright agora é traduzido */}
                    &copy; {currentYear} Vinicius Linhar. {t('footer.copyright')}
                </p>
            </div>
        </footer>
    );
};

export default Footer;