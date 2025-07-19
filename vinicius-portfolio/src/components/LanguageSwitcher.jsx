// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      <button 
        onClick={() => changeLanguage('pt')} 
        className={`font-semibold text-sm ${i18n.language === 'pt' ? 'text-[var(--color-primary)]' : 'text-[var(--color-soft-foreground)]'}`}
      >
        PT
      </button>
      <span className="text-[var(--color-soft-foreground)]">/</span>
      <button 
        onClick={() => changeLanguage('en')} 
        className={`font-semibold text-sm ${i18n.language === 'en' ? 'text-[var(--color-primary)]' : 'text-[var(--color-soft-foreground)]'}`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;