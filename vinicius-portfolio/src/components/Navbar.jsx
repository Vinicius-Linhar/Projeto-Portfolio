// src/components/Navbar.jsx

// 1. Importe 'motion' e 'AnimatePresence' do framer-motion
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [navStyle, setNavStyle] = useState('top');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: 'Home', path: 'home' },
    { title: 'About Me', path: 'about' },
    { title: 'Skills', path: 'skills' },
    { title: 'Projects', path: 'projects' },
    { title: 'Certifications', path: 'certifications' },
    { title: 'Contact', path: 'contact' },
  ];

  // Hooks para rolagem e trava de scroll (sem alterações)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition <= 10) setNavStyle('top');
      else if (scrollPosition > 10 && scrollPosition <= 80) setNavStyle('scrolling');
      else setNavStyle('solid');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen]);

  // Função para classes do Nav (sem alterações)
  const getNavClassName = (isMobileMenu = false) => {
    let baseClasses = 'transition-all duration-300';
    if (!isMobileMenu) baseClasses += ' fixed w-full top-0 z-50';
    
    switch (navStyle) {
      case 'scrolling': return `${baseClasses} bg-white/90 backdrop-blur-sm shadow-sm`;
      case 'solid': return `${baseClasses} bg-white shadow-lg`;
      case 'top':
      default: return isMobileMenu ? `${baseClasses} bg-white` : `${baseClasses} bg-transparent`;
    }
  };

  // 2. Definindo as variantes da animação para o menu
  const menuVariants = {
    hidden: {
      y: '-100%', // Começa totalmente acima da tela
      opacity: 0,
    },
    visible: {
      y: '0%', // Anima para a posição original
      opacity: 1,
      transition: {
        type: 'tween', // Animação suave, sem "pulo"
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
    exit: {
      y: '-100%', // Anima para cima ao sair
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    }
  };

  return (
    <nav className={getNavClassName()}>
      <div className="container mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        {/* Logo e links de desktop (sem alterações) */}
        <div className="text-2xl font-bold"><Link to="home" smooth={true} duration={500} className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-mono cursor-pointer">AT</Link></div>
        <ul className="hidden md:flex space-x-8">{navLinks.map((link) => (<li key={link.title}><Link to={link.path} spy={true} smooth={true} offset={-80} duration={500} activeClass="active" className="cursor-pointer text-gray-600 hover:text-teal-500 font-medium transition-colors"> {link.title} </Link></li>))}</ul>
        <div className="md:hidden"><button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">{isMenuOpen ? (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>) : (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>)}</button></div>
      </div>
      
      {/* 3. Envolvendo o menu mobile com AnimatePresence */}
      <AnimatePresence>
        {isMenuOpen && (
          // 4. Transformando o div em motion.div e aplicando as variantes
          <motion.div
            key="mobile-menu" // Adicionar uma key é uma boa prática aqui
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`md:hidden absolute top-full left-0 w-full h-screen ${getNavClassName(true)}`}
          >
            <ul className="flex flex-col items-center justify-center h-full space-y-8">{navLinks.map((link) => (<li key={link.title}><Link onClick={() => setIsMenuOpen(false)} to={link.path} spy={true} smooth={true} offset={-80} duration={500} activeClass="active" className="cursor-pointer text-gray-700 hover:text-teal-500 text-2xl font-medium transition-colors">{link.title}</Link></li>))}</ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;