// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { FiX, FiMenu } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();
  const [navStyle, setNavStyle] = useState('top');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // A lista de links agora é traduzida corretamente
  const navLinks = [ 
    { title: t('navbar.home'), path: 'home' }, 
    { title: t('navbar.about'), path: 'about' }, 
    { title: t('navbar.skills'), path: 'skills' }, 
    { title: t('navbar.projects'), path: 'projects' }, 
    { title: t('navbar.certifications'), path: 'certifications' }, 
    { title: t('navbar.contact'), path: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 10) setNavStyle('top');
      else setNavStyle('solid');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isMenuOpen]);

  const navClasses = `fixed w-full top-0 z-50 transition-all duration-300 ${navStyle === 'solid' ? 'bg-[var(--color-background)] shadow-lg' : 'bg-transparent'}`;
  
  // Lógica de cor corrigida para o texto dos links
  const linkClasses = `cursor-pointer font-semibold transition-colors relative ${navStyle === 'top' ? 'text-gray' : 'text-[var(--color-soft-foreground)]'} hover:text-[var(--color-primary)]`;
  
  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} spy={true} smooth={true} offset={-80} duration={500} activeClass="active" className={linkClasses}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <LanguageSwitcher />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${navStyle === 'top' && !isMenuOpen ? 'text-white' : 'text-[var(--color-foreground)]'} focus:outline-none`}>
            {isMenuOpen ? <FiX className="w-6 h-6"/> : <FiMenu className="w-6 h-6"/>}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            key="mobile-menu" 
            initial={{ y: '-100%', opacity: 0 }} 
            animate={{ y: '0%', opacity: 1 }} 
            exit={{ y: '-100%', opacity: 0 }} 
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full h-screen bg-[var(--color-background)]"
          >
            <ul className="flex flex-col items-center justify-center h-full space-y-8">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link onClick={() => setIsMenuOpen(false)} to={link.path} spy={true} smooth={true} offset={-80} duration={500} activeClass="active" className="cursor-pointer text-2xl font-medium text-[var(--color-foreground)] hover:text-[var(--color-primary)]">
                      {link.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;