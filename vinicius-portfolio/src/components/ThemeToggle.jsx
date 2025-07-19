// src/components/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className="bg-[var(--color-soft-background)] p-3 rounded-full text-[var(--color-foreground)] hover:scale-110 transition-transform" aria-label="Trocar tema">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={theme} initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ duration: 0.2 }}>
          {theme === 'light' ? <FiMoon size={20}/> : <FiSun size={20}/>}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};
export default ThemeToggle;