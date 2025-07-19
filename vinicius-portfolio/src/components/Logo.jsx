// src/components/Logo.jsx
import React from 'react';
import { Link } from 'react-scroll';
import { motion, useAnimationControls } from 'framer-motion';
import logoImage from '../assets/logo-vl-transparente.png'; 

const Logo = () => {
  const controls = useAnimationControls();
  const handleClick = () => {
    controls.start({ rotateY: [0, 360], transition: { duration: 0.5, ease: 'easeInOut' } });
  };

  return (
    <Link to="home" smooth={true} duration={500} className="cursor-pointer" aria-label="Voltar ao topo" onClick={handleClick}>
      <motion.img src={logoImage} alt="Logo Vinicius Linhar" className="w-10 h-10 object-contain" animate={controls} />
    </Link>
  );
};
export default Logo;