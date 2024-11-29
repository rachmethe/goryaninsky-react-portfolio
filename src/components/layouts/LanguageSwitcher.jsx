import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex text-xs gap-4">
      <button
        className={`px-4 py-2 border border-slate-700 rounded-lg ${
          i18n.language === 'en' ? 'bg-blue-200' : 'text-slate-700 hover:bg-blue-200'
        }`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <button
        className={`px-4 py-2 border border-slate-700 rounded-lg ${
          i18n.language === 'ru' ? 'bg-blue-200' : 'text-slate-700 hover:bg-blue-200'
        }`}
        onClick={() => changeLanguage('ru')}
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;
